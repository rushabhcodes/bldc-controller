import { KF301_5_0_2P } from "./imports/KF301_5_0_2P"
import { KF301_5_0_3P } from "./imports/KF301_5_0_3P"
import { USB4105_GF_A } from "./imports/USB4105_GF_A"
import { SMBJ30A_E3_52 } from "./imports/SMBJ30A_E3_52"
import { placement } from "./src/board/placement"
import { resistorPart, capacitorPart } from "./src/board/procurement"
import { Fragment, type ReactElement } from "react"
import { importedPartProps, type ImportedMpn } from "./src/board/imported-parts"
import { drv8323s, nets, pinLabels, stm32g474 } from "./src/board/pinouts"

// Bench revision A. Routing and fabrication have not been verified.
export default function CeilingFanController() {
  const parts: ReactElement[] = []
  const sections = ["Input", "Buck", "LogicPower", "USB", "MCU", "Driver", "Remote", "PhaseA", "PhaseB", "PhaseC", "Sense", "BusDump"]
  const slots: Record<string, number> = {}
  function pos(section: string, pcbX: number, pcbY: number, large = false) {
    const sx = 0, sy = 0, i = slots[section] ?? 0
    slots[section] = i + (large ? 9 : 1)
    return { pcbX, pcbY, schSectionName: `section_${section}`, schSheetName: section, schX: sx + (i % 3) * 9, schY: sy - Math.floor(i / 3) * 4 }
  }
  const schematicOverrides: Record<string, { schX?: number; schY?: number; schWidth?: number; schHeight?: number; schRotation?:number }> = {
    D_BUS:{schRotation:-90}, U_CC_ESD:{schHeight:.6}, U_OV:{schHeight:.6},
    C_BUS_2:{schX:4,schY:8}, C_BUCK_IN2:{schX:4,schY:8},C_BUCK_IN3:{schX:2,schY:10},
    C_BUS: {schX: 0, schY: 8}, C_BUS_HF: {schX: 2, schY: 8},
    C_BUCK_IN: {schX: 0, schY: 8}, C_BUCK_HF: {schX: 2, schY: 8},
    C_5V_A: {schX: 10, schY: 8}, C_5V_B: {schX: 12, schY: 8},
    C_MUX_OUT: {schX: 0, schY: 8}, C_LDO_IN: {schX: 2, schY: 8},
    C_VDD1: {schX: 0, schY: 8}, C_VDD2: {schX: 2, schY: 8}, C_VDD3: {schX: 4, schY: 8},
    C_VDD4: {schX: 0, schY: 10}, C_MCU_BULK: {schX: 2, schY: 10}, C_VBAT: {schX: 4, schY: 10},
    C_AVDD: {schX: 8, schY: 8}, C_AREF: {schX: 10, schY: 8},
    C_DRV_VM: {schX: 0, schY: 8}, C_DRV_VM_HF: {schX: 2, schY: 8},
    R_RESET: {schX: -4, schY: 0}, C_RESET: {schX: -4, schY: -2},
    C_XTAL1: {schX: 5.6, schY: 2.5}, C_XTAL2: {schX: 10.4, schY: 2.5},
    U_BUCK: {schHeight: 1}, U_LDO: {schHeight: 0.6}, U_DRV: {schHeight: 4.2},
    J_SWD: {schWidth: 0.865}, J_TEST: {schWidth: 1.435},
  }
  const pcbFlips = new Set(["C_BRIDGE_B", "C_BRIDGE_C", "C_ISENSE_C", "C_LDO_OUT", "C_MUX_IN2", "C_NTC", "C_XTAL1", "R_BOOT", "R_MUX_ST", "R_NTC", "R_SHUNT_A", "R_SHUNT_C", "R_USB_FAULT", "R_VTOP_0", "R_VTOP_1", "R_VTOP_2", "R_VTOP_3"])
  const isRail = (n: string) => n === "GND" || n === "VM" || n.startsWith("V3V3") || n.startsWith("V5_") || n.startsWith("USB_VBUS") || n.startsWith("VBUS_SENSE")
  function r(name: string, value: string, a: string, b: string, section: string, x: number, y: number, footprint = "0603") {
    parts.push(<resistor key={name} name={name} resistance={value} footprint={footprint} {...resistorPart(value, footprint, name)} pcbRotation={pcbFlips.has(name) ? 180 : 0}
      connections={nets({ pin1: a, pin2: b })} {...pos(section, x, y)}
      schRotation={a === "GND" ? 90 : (isRail(a) || isRail(b) ? -90 : 0)} {...schematicOverrides[name]} {...placement[name]} />)
  }
  function c(name: string, value: string, a: string, section: string, x: number, y: number, footprint = "0603", b = "GND") {
    parts.push(<capacitor key={name} name={name} capacitance={value} {...capacitorPart(value, name, footprint)} pcbRotation={pcbFlips.has(name) ? 180 : 0}
      connections={nets({ pin1: a, pin2: b })} {...pos(section, x, y)}
      schRotation={b === "GND" || isRail(a) || name === "C_CP_STORE" ? -90 : 0} {...schematicOverrides[name]} {...placement[name]} />)
  }
  function ic(name: string, mpn: ImportedMpn, pins: readonly string[],
    wiring: Record<string, string>, section: string, x: number, y: number) {
    parts.push(<chip key={name} name={name} manufacturerPartNumber={mpn} pinLabels={pinLabels(pins)}
      {...importedPartProps(mpn)} pinAttributes={Object.fromEntries(pins.map(pin => [pin, wiring[pin] ? {
        mustBeConnected: true,
        ...(wiring[pin] === "GND" ? { requiresGround: true } : {}),
        ...(!name.startsWith("Q_") && /^(VIN|VIN1|VIN2|VM|VDRAIN|IN|VBAT|VDDA|VREF|VDD[1-4]|VBUS)$/.test(pin) ? { requiresPower: true } : {}),
      } : { doNotConnect: true }]))} connections={nets(wiring)} {...pos(section, x, y, true)} {...schematicOverrides[name]} {...placement[name]} />)
  }
  function header(name: string, signals: string[], section: string, x: number, y: number, pitch = 2.54) {
    const position = {...pos(section, x, y), ...placement[name]}
    const connections = nets(Object.fromEntries(signals.map((n, i) => [`pin${i + 1}`, n])))
    if (pitch === 5) {
      if (signals.length === 2) parts.push(<KF301_5_0_2P key={name} name={name} connections={connections} {...position} schRotation={-90} />)
      else parts.push(<KF301_5_0_3P key={name} name={name} connections={connections} {...position} />)
      return
    }
    parts.push(<pinheader key={name} name={name} pinCount={signals.length} pitch={pitch} gender="male" showSilkscreenPinLabels={false}
      manufacturerPartNumber={`M20-9990${signals.length}46`}
      footprint={`pinrow${signals.length}_p${pitch}mm`} pinLabels={signals.map((n, i) => `${n}_${i + 1}`)}
      connections={connections} {...position} {...schematicOverrides[name]} />)
  }

  // Series diode blocks reverse input polarity and backfeed to the adapter.
  // Regenerated energy is diverted to the external resistor by the bus dump.
  header("J_DC", ["VIN24", "GND"], "Input", -67, 45, 5)
  parts.push(<fuse key="F1" name="F1" schRotation={-90} currentRating="3A" voltageRating="125V" manufacturerPartNumber="0154003.DRT" {...importedPartProps("0154003.DRT")}
    connections={nets({ pin1: "VIN24", pin2: "VIN_FUSED" })} {...pos("Input", -56, 42)} {...placement.F1} />)
  ic("D_REVERSE", "STPS5H100B-TR", ["NC", "K", "A"], {K:"VM", A:"VIN_FUSED"}, "Input", -44, 42)
  parts.push(<SMBJ30A_E3_52 key="D_BUS" name="D_BUS" schRotation={0}
    connections={nets({K:"VM", A:"GND"})}
    {...pos("Input", -19,42)} {...placement.D_BUS} />)
  c("C_BUS", "470uF", "VM", "Input", -18, 42, "electrolytic_d10mm_p5mm")
  c("C_BUS_2", "470uF", "VM", "Input", 7, 42, "electrolytic_d12.5mm_p5mm")
  c("C_BUS_HF", "1uF", "VM", "Input", -7, 42, "1206")
  r("R_BLEED", "10k", "VM", "GND", "Input", -7, 36, "1206")
  header("J_MOTOR", ["PHASE_A", "PHASE_B", "PHASE_C"], "Input", 56, 48, 5)

  // TI LMR36510 application: 400 kHz, 22 uH, 2 x 22 uF, 100k/24.9k feedback.
  ic("U_BUCK", "LMR36510ADDAR", ["PGND", "VIN", "EN", "PG", "FB", "VCC", "BOOT", "SW", "EP"],
    { PGND: "GND", VIN: "VM", EN: "VM", FB: "BUCK_FB", VCC: "BUCK_VCC",
      BOOT: "BUCK_BOOT", SW: "BUCK_SW", EP: "GND" }, "Buck", -58, 22)
  c("C_BUCK_IN", "4.7uF", "VM", "Buck", -65, 29, "1210")
  c("C_BUCK_HF", "220nF", "VM", "Buck", -65, 23, "0805")
  c("C_BUCK_IN2", "1uF", "VM", "Buck", -70, 23, "1206")
  c("C_BUCK_IN3", "1uF", "VM", "Buck", -70, 29, "1206")
  c("C_BUCK_VCC", "1uF", "BUCK_VCC", "Buck", -59, 15)
  c("C_BOOT", "100nF", "BUCK_BOOT", "Buck", -51, 21, "0603", "BUCK_SW")
  parts.push(<inductor key="L1" name="L1" inductance="22uH" manufacturerPartNumber="SRR1260-220M" {...importedPartProps("SRR1260-220M")}
    connections={nets({ pin1: "BUCK_SW", pin2: "V5_LOCAL" })} {...pos("Buck", -42, 24)} {...placement.L1} />)
  c("C_5V_A", "22uF", "V5_LOCAL", "Buck", -30, 27, "1210")
  c("C_5V_B", "22uF", "V5_LOCAL", "Buck", -30, 20, "1210")
  r("R_FB_TOP", "100k", "V5_LOCAL", "BUCK_FB", "Buck", -45, 14)
  r("R_FB_BOT", "24.9k", "BUCK_FB", "GND", "Buck", -39, 14)

  // Local supply has priority; USB only reaches V5_LOGIC through a limiter and mux.
  ic("U_MUX", "TPS2116DRLR", ["GND", "OUT1", "VIN1", "PR1", "MODE", "VIN2", "OUT2", "ST"],
    { GND: "GND", OUT1: "V5_LOGIC", OUT2: "V5_LOGIC", VIN1: "V5_LOCAL",
      VIN2: "USB_5V_LIMITED", PR1: "MUX_PR1", MODE: "V5_LOCAL", ST: "LOCAL_POWER_OK" }, "LogicPower", -47, -4)
  r("R_PR_TOP", "33k", "V5_LOCAL", "MUX_PR1", "LogicPower", -48, 2)
  r("R_PR_BOT", "10k", "MUX_PR1", "GND", "LogicPower", -42, 2)
  r("R_MUX_ST", "10k", "V3V3", "LOCAL_POWER_OK", "LogicPower", -39, -4)
  c("C_MUX_IN1", "1uF", "V5_LOCAL", "LogicPower", -52, -4)
  c("C_MUX_IN2", "1uF", "USB_5V_LIMITED", "LogicPower", -49, -10)
  c("C_MUX_OUT", "1uF", "V5_LOGIC", "LogicPower", -42, -10)
  ic("U_LDO", "TLV75533PDBVR", ["IN", "GND", "EN", "NC", "OUT"],
    { IN: "V5_LOGIC", EN: "V5_LOGIC", GND: "GND", OUT: "V3V3" }, "LogicPower", -32, -5)
  c("C_LDO_IN", "1uF", "V5_LOGIC", "LogicPower", -34, -12)
  c("C_LDO_OUT", "4.7uF", "V3V3", "LogicPower", -28, -12, "0805")

  parts.push(<USB4105_GF_A key="J_USB" name="J_USB" pcbRotation={270}
    connections={nets({ EH1:"GND", EH2:"GND", EH3:"GND", EH4:"GND",
      GND1:"GND", GND2:"GND", GND3:"GND", GND4:"GND",
      VBUS1:"USB_VBUS", VBUS2:"USB_VBUS", VBUS3:"USB_VBUS", VBUS4:"USB_VBUS",
      CC1:"USB_CC1", CC2:"USB_CC2", DP1:"USB_DP", DP2:"USB_DP", DN1:"USB_DM", DN2:"USB_DM" })}
    {...pos("USB", -76.325, -35, true)} {...placement.J_USB} />)
  ic("U_CC_ESD", "TPD2E2U06DRLR", ["NC1","NC2","IO1","GND","IO2"],
    {IO1:"USB_CC1",IO2:"USB_CC2",GND:"GND"}, "USB", -66, -35)
  r("R_CC1", "5.1k", "USB_CC1", "GND", "USB", -63, -32)
  r("R_CC2", "5.1k", "USB_CC2", "GND", "USB", -63, -38)
  ic("U_USB_ESD", "USBLC6-2SC6", ["IO1_A", "GND", "IO2_A", "IO2_B", "VBUS", "IO1_B"],
    { IO1_A: "USB_DP", IO1_B: "USB_DP", IO2_A: "USB_DM", IO2_B: "USB_DM", VBUS: "USB_VBUS", GND: "GND" }, "USB", -56, -35)
  // ILIM=IN selects 75 mA nominal (50–100 mA). USB-only code must budget below 50 mA.
  ic("U_USB_PWR", "TPS2553DBVR", ["IN", "GND", "EN", "nFAULT", "ILIM", "OUT"],
    { IN: "USB_VBUS", GND: "GND", EN: "USB_VBUS", nFAULT: "USB_PWR_FAULT_N", ILIM: "USB_VBUS", OUT: "USB_5V_LIMITED" },
    "USB", -58, -24)
  c("C_USB_IN", "100nF", "USB_VBUS", "USB", -64, -24)
  r("R_USB_FAULT", "10k", "V3V3", "USB_PWR_FAULT_N", "USB", -50, -24)
  r("R_USB_DP", "0", "USB_DP", "MCU_USB_DP", "USB", -46, -33)
  r("R_USB_DM", "0", "USB_DM", "MCU_USB_DM", "USB", -46, -38)
  r("R_USB_SENSE_TOP", "100k", "USB_VBUS", "USB_PRESENT", "USB", -56, -44)
  r("R_USB_SENSE_BOT", "100k", "USB_PRESENT", "GND", "USB", -49, -44)

  ic("U_MCU", "STM32G474RET6", stm32g474,
    { VBAT: "V3V3", VDD1: "V3V3", VDD2: "V3V3", VDD3: "V3V3", VDD4: "V3V3",
      VSS1: "GND", VSS2: "GND", VSS3: "GND", VSS4: "GND", VSSA: "GND", VDDA: "V3V3_A", VREF: "V3V3_A",
      NRST: "NRST", PF0: "HSE_IN", PF1: "HSE_OUT", PA0: "CURRENT_A", PA1: "CURRENT_B", PA2: "CURRENT_C",
      PA3: "USB_PRESENT", PA4: "TEMP_PCB", PC0: "VBUS_SENSE", PC1: "PHASE_A_SENSE", PC2: "PHASE_B_SENSE", PC3: "PHASE_C_SENSE",
      PA8: "PWM_A_H", PA9: "PWM_B_H", PA10: "PWM_C_H", PB13: "PWM_A_L", PB14: "PWM_B_L", PB15: "PWM_C_L",
      PB12: "DRV_FAULT_N", PB3: "DRV_SCK", PB4: "DRV_MISO", PB5: "DRV_MOSI", PB6: "DRV_CS_N", PB7: "DRV_ENABLE_CMD",
      PC6: "DRV_CAL", PC7: "LOCAL_POWER_OK", PC8: "USB_PWR_FAULT_N", PA11: "MCU_USB_DM", PA12: "MCU_USB_DP",
      PA13: "SWDIO", PA14: "SWCLK", PA15: "IR_RX", PB8: "BOOT0", PC13: "STATUS_LED" }, "MCU", -11, -15)
  c("C_VDD1", "100nF", "V3V3", "MCU", -18, -23)
  c("C_VDD2", "100nF", "V3V3", "MCU", -3, -23)
  c("C_VDD3", "100nF", "V3V3", "MCU", -3, -6)
  c("C_VDD4", "100nF", "V3V3", "MCU", -18, -6)
  c("C_MCU_BULK", "4.7uF", "V3V3", "MCU", -24, -20, "0805")
  r("R_AVDD", "10", "V3V3", "V3V3_A", "MCU", -23, -10)
  c("C_AVDD", "1uF", "V3V3_A", "MCU", -24, -5)
  c("C_AREF", "100nF", "V3V3_A", "MCU", -24, 0)
  c("C_VBAT", "100nF", "V3V3", "MCU", -20, -28)
  parts.push(<crystal key="Y1" name="Y1" frequency="16MHz" loadCapacitance="18pF" pinVariant="four_pin" manufacturerPartNumber="ABM8-16.000MHZ-B2-T" {...importedPartProps("ABM8-16.000MHZ-B2-T")}
    connections={nets({ pin1: "HSE_IN", pin3: "HSE_OUT", pin2:"GND", pin4:"GND" })} {...pos("MCU", -10, -32)} schX={8} schY={2.8} {...placement.Y1} />)
  c("C_XTAL1", "30pF", "HSE_IN", "MCU", -18, -36)
  c("C_XTAL2", "30pF", "HSE_OUT", "MCU", -2, -36)
  r("R_RESET", "10k", "V3V3", "NRST", "MCU", 1, -27)
  c("C_RESET", "100nF", "NRST", "MCU", 7, -27)
  r("R_BOOT", "10k", "BOOT0", "GND", "MCU", 3, -35)
  header("J_BOOT", ["V3V3", "BOOT0"], "MCU", 9, -35)
  header("J_RESET", ["NRST", "GND"], "MCU", 10, -43)
  header("J_SWD", ["V3V3", "SWDIO", "GND", "SWCLK", "NRST"], "MCU", -5, -48)

  ic("U_DRV", "DRV8323SRTAR", drv8323s,
    { CPL: "DRV_CPL", CPH: "DRV_CPH", VCP: "DRV_VCP", VM: "VM", VDRAIN: "VM", AGND: "GND", PGND: "GND", EP: "GND",
      GHA: "DRV_GHA", SHA: "PHASE_A", GLA: "DRV_GLA", SPA: "SHUNT_A", SNA: "GND",
      GHB: "DRV_GHB", SHB: "PHASE_B", GLB: "DRV_GLB", SPB: "SHUNT_B", SNB: "GND",
      GHC: "DRV_GHC", SHC: "PHASE_C", GLC: "DRV_GLC", SPC: "SHUNT_C", SNC: "GND",
      SOA: "CSA_A", SOB: "CSA_B", SOC: "CSA_C", VREF: "V3V3_A", nFAULT: "DRV_FAULT_N",
      SDO: "DRV_MISO", SDI: "DRV_MOSI", SCLK: "DRV_SCK", nSCS: "DRV_CS_N", ENABLE: "DRV_ENABLE",
      CAL: "DRV_CAL", DVDD: "DRV_DVDD", INHA: "PWM_A_H", INLA: "PWM_A_L", INHB: "PWM_B_H",
      INLB: "PWM_B_L", INHC: "PWM_C_H", INLC: "PWM_C_L" }, "Driver", 19, 16)
  c("C_DRV_VM", "1uF", "VM", "Driver", 12, 21, "1206")
  c("C_DRV_VM_HF", "100nF", "VM", "Driver", 12, 16, "0805")
  c("C_CP_FLY", "47nF", "DRV_CPH", "Driver", 16, 24, "0805", "DRV_CPL")
  c("C_CP_STORE", "1uF", "DRV_VCP", "Driver", 24, 24, "0805", "VM")
  c("C_DRV_DVDD", "1uF", "DRV_DVDD", "Driver", 13, 9)
  c("C_DRV_REF", "100nF", "V3V3_A", "Driver", 25, 9)
  r("R_DRV_CMD", "1k", "DRV_ENABLE_CMD", "DRV_ENABLE", "Driver", 7, 2)
  r("R_DRV_EN", "10k", "DRV_ENABLE", "GND", "Driver", 7, 12)
  r("R_DRV_CAL", "10k", "DRV_CAL", "GND", "Driver", 7, 7)
  r("R_DRV_CS", "10k", "V3V3", "DRV_CS_N", "Driver", 3, 18)
  r("R_DRV_MISO", "10k", "V3V3", "DRV_MISO", "Driver", 3, 24)
  r("R_DRV_FAULT", "10k", "V3V3", "DRV_FAULT_N", "Driver", 3, 30)
  header("J_DISABLE", ["DRV_ENABLE", "GND"], "Driver", 13, 34)

  for (const [i, phase] of ["A", "B", "C"].entries()) {
    const x = 38 + i * 15, section = `Phase${phase}`
    for (const [side, y, drain, source] of [
      ["H", 32, "VM", `PHASE_${phase}`], ["L", 13, `PHASE_${phase}`, `SHUNT_${phase}`],
    ] as const) {
      ic(`Q_${phase}${side}`, "CSD18540Q5B", ["S1", "S2", "S3", "G", "D1", "D2", "D3", "D4"],
        { S1: source, S2: source, S3: source, G: `GATE_${phase}${side}`, D1: drain, D2: drain, D3: drain, D4: drain }, section, x, y)
      r(`R_G${phase}${side}`, "10", `DRV_G${side}${phase}`, `GATE_${phase}${side}`, section, x - 6, y - 4)
      r(`R_PD${phase}${side}`, "100k", `GATE_${phase}${side}`, source, section, x + 1, y - 5)
    }
    r(`R_SHUNT_${phase}`, "0.01", `SHUNT_${phase}`, "GND", section, x, 0, "2512")
    c(`C_BRIDGE_${phase}`, "1uF", "VM", section, x + 1, 22, "1206")
    r(`R_PWM_${phase}H`, "100k", `PWM_${phase}_H`, "GND", "Driver", 15 + i * 6, 2)
    r(`R_PWM_${phase}L`, "100k", `PWM_${phase}_L`, "GND", "Driver", 15 + i * 6, -3)
    r(`R_ISENSE_${phase}`, "100", `CSA_${phase}`, `CURRENT_${phase}`, "Sense", 32 + i * 8, -11)
    c(`C_ISENSE_${phase}`, "1nF", `CURRENT_${phase}`, "Sense", 32 + i * 8, -16)
  }
  // 16:1 dividers; 30 V -> 1.875 V, nominal ADC full scale -> 52.8 V.
  for (const [i, [src, dst]] of [
    ["VM", "VBUS_SENSE"], ["PHASE_A", "PHASE_A_SENSE"],
    ["PHASE_B", "PHASE_B_SENSE"], ["PHASE_C", "PHASE_C_SENSE"],
  ].entries()) {
    const x = 27 + i * 12
    r(`R_VTOP_${i}`, "150k", src, dst, "Sense", x, -25, "0805")
    r(`R_VBOT_${i}`, "10k", dst, "GND", "Sense", x, -30)
    c(`C_V_${i}`, "1nF", dst, "Sense", x, -35)
  }
  r("R_NTC_PULLUP", "10k", "V3V3_A", "TEMP_PCB", "Sense", 64, -11)
  // Murata NCP21XV103J03RA: 10k at 25 C, B25/50 = 3900 K.
  r("R_NTC", "10k", "TEMP_PCB", "GND", "Sense", 61, 5, "0805")
  c("C_NTC", "10nF", "TEMP_PCB", "Sense", 64, -16)

  // Off-board TSOP38438 at the optical window. Header order matches OUT/GND/VS.
  header("J_IR", ["IR_RAW", "GND", "IR_3V3"], "Remote", -29, -48)
  r("R_IR_SUPPLY", "100", "V3V3", "IR_3V3", "Remote", -35, -40)
  c("C_IR_SUPPLY", "4.7uF", "IR_3V3", "Remote", -30, -35, "0805")
  r("R_IR_SERIES", "1k", "IR_RAW", "IR_RX", "Remote", -29, -41)
  r("R_IR_PULLUP", "10k", "V3V3", "IR_RX", "Remote", -23, -41)
  r("R_LED", "2.2k", "V3V3", "LED_ANODE", "Remote", 25, -44)
  parts.push(<led key="D_STATUS" name="D_STATUS" color="green" footprint="0603" manufacturerPartNumber="LTST-C190KGKT"
    connections={nets({ anode: "LED_ANODE", cathode: "STATUS_LED" })} {...pos("Remote", 33, -44)} />)
  header("J_TEST", ["VM", "GND", "V5_LOCAL", "V3V3", "DRV_FAULT_N"], "Remote", 54, -47)

  // Autonomous bus-energy dump. RH100 10 ohm external resistor must be fitted
  // to its specified heatsink before connecting a motor. Nominal 30.8/29.2 V.
  ic("U_OV", "TLV1701AIDBVR", ["INP","GND","INM","OUT","VCC"],
    {INP:"OV_SENSE",GND:"GND",INM:"REF_2V5",OUT:"OV_OUT",VCC:"V5_LOCAL"}, "BusDump", -56, 5)
  ic("U_REF", "LM4040A25IDBZR", ["K","A","NC"],
    {K:"REF_2V5",A:"GND",NC:"GND"}, "BusDump", -67, 6)
  r("R_REF", "2.2k", "V5_LOCAL", "REF_2V5", "BusDump", -67, 12)
  c("C_REF", "100nF", "REF_2V5", "BusDump", -72, 6)
  c("C_OV", "100nF", "V5_LOCAL", "BusDump", -56, 10)
  r("R_OV_TOP", "110k", "VM", "OV_SENSE", "BusDump", -64, 0)
  r("R_OV_BOT", "10k", "OV_SENSE", "GND", "BusDump", -64, -5)
  r("R_OV_HYS", "330k", "OV_OUT", "OV_SENSE", "BusDump", -56, 0)
  r("R_OV_PU", "2.2k", "V5_LOCAL", "OV_OUT", "BusDump", -56, -5)
  r("R_DUMP_G", "100", "OV_OUT", "DUMP_GATE", "BusDump", -68, -12)
  r("R_DUMP_PD", "100k", "DUMP_GATE", "GND", "BusDump", -62, -17)
  ic("Q_DUMP", "CSD18540Q5B", ["S1","S2","S3","G","D1","D2","D3","D4"],
    {S1:"GND",S2:"GND",S3:"GND",G:"DUMP_GATE",D1:"DUMP_LOW",D2:"DUMP_LOW",D3:"DUMP_LOW",D4:"DUMP_LOW"}, "BusDump", -69, -18)
  header("J_DUMP", ["VM", "DUMP_LOW"], "BusDump", -68, -5, 5)

  return <board width="160mm" height="114mm" layers={4} title="Ceiling fan controller — bench revision A"
    schTraceAutoLabelEnabled thickness="1.6mm"
    partsEngine={{findPart: () => ({})}}
    isViaInPadAllowed allowBlindAndBuriedVias={false}
    minTraceWidth={.15} nominalTraceWidth={.25} minTraceToPadEdgeClearance={.15}
    minPadEdgeToPadEdgeClearance={.15} minViaHoleDiameter={.3} minViaPadDiameter={.6}
    pcbStyle={{viaHoleDiameter:.3,viaPadDiameter:.6}}
    minBoardEdgeClearance={.3} autorouter={{local:true, traceClearance:.15, allowViaInPad:false}}>
    {sections.map((name) => <Fragment key={name}><schematicsheet name={name} displayName={name} sheetWidth={500} sheetHeight={800} /><schematicsection name={`section_${name}`} displayName={name} /></Fragment>)}
    {parts}
    <copperpour name="GND_PLANE" layer="inner1" connectsTo="net.GND" unbroken clearance={.25} boardEdgeMargin={.5} useThermalReliefs={false} />
    <copperpour name="GND_BOTTOM" layer="bottom" connectsTo="net.GND" clearance={.25} boardEdgeMargin={.5} />
    <silkscreentext text="24V BLDC FAN / REV A BENCH" pcbX={0} pcbY={52} fontSize={1.5} />
    <silkscreentext text="USB: LOGIC POWER ONLY" pcbX={-62} pcbY={-17} fontSize={1} />
    <silkscreentext text="EXTERNAL DUMP LOAD REQUIRED" pcbX={36} pcbY={-53} fontSize={1} />
    <silkscreentext text="+24V   GND" pcbX={-65} pcbY={36.5} fontSize={1} />
    <silkscreentext text="U     V     W" pcbX={46} pcbY={41.5} fontSize={1} />
    <silkscreentext text="DUMP: 10R / 100W" pcbX={68} pcbY={-10} fontSize={1} />
    <silkscreentext text="+VM" pcbX={76} pcbY={-21.5} fontSize={.9} />
    <silkscreentext text="SW" pcbX={76} pcbY={-16.5} fontSize={.9} />
    <silkscreentext text="IR: OUT GND 3V3" pcbX={-29} pcbY={-53} fontSize={.9} />
    <silkscreentext text="SWD  1=3V3" pcbX={-5} pcbY={-53} fontSize={.9} />
    <silkscreentext text="SHORT TO DISABLE" pcbX={-12} pcbY={26.5} fontSize={.9} />
    {[[-75, 52], [75, 52], [-75, -52], [75, -52]].map(([x, y], i) =>
      <Fragment key={i}><hole name={`H${i + 1}`} pcbX={x} pcbY={y} diameter="3.2mm" /></Fragment>)}
  </board>
}
