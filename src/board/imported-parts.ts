import { STPS5H100B_TR } from "../../imports/STPS5H100B_TR"
import { SRR1260_220M } from "../../imports/SRR1260_220M"
import { EEUFR1J471 } from "../../imports/EEUFR1J471"
import { A_0154003_DRT } from "../../imports/A_0154003_DRT"
import { TLV1701AIDBVR } from "../../imports/TLV1701AIDBVR"
import { LM4040A25IDBZR } from "../../imports/LM4040A25IDBZR"
import { NCP21XV103J03RA } from "../../imports/NCP21XV103J03RA"
import { WSL2512R0100FEA } from "../../imports/WSL2512R0100FEA"
import { ABM8_16_000MHZ_B2_T } from "../../imports/ABM8_16_000MHZ_B2_T"
import { SMBJ30A_E3_52 } from "../../imports/SMBJ30A_E3_52"
import { TPD2E2U06DRLR } from "../../imports/TPD2E2U06DRLR"
import type { ChipProps } from "@tscircuit/props"
import { STM32G474RET6 } from "../../imports/STM32G474RET6"
import { DRV8323SRTAR } from "../../imports/DRV8323SRTAR"
import { CSD18540Q5B } from "../../imports/CSD18540Q5B"
import { LMR36510ADDAR } from "../../imports/LMR36510ADDAR"
import { TPS2116DRLR } from "../../imports/TPS2116DRLR"
import { TLV75533PDBVR } from "../../imports/TLV75533PDBVR"
import { TPS2553DBVR } from "../../imports/TPS2553DBVR"
import { USBLC6_2SC6 } from "../../imports/USBLC6_2SC6"

// Keep CLI output in imports/ unchanged. Adapt its CAD data here, preserving the
// board's physical pin mapping and schematic pin names.
const imported = {
  STM32G474RET6, DRV8323SRTAR, CSD18540Q5B, LMR36510ADDAR,
  "SRR1260-220M": SRR1260_220M,
  "EEUFR1J471": EEUFR1J471,
  "0154003.DRT": A_0154003_DRT,
  "TLV1701AIDBVR": TLV1701AIDBVR,
  "LM4040A25IDBZR": LM4040A25IDBZR,
  "NCP21XV103J03RA": NCP21XV103J03RA,
  "WSL2512R0100FEA": WSL2512R0100FEA,
  "ABM8-16.000MHZ-B2-T": ABM8_16_000MHZ_B2_T,
  "SMBJ30A-E3/52": SMBJ30A_E3_52,
  "STPS5H100B-TR": STPS5H100B_TR,
  "TPD2E2U06DRLR": TPD2E2U06DRLR,

  TPS2116DRLR, TLV75533PDBVR, TPS2553DBVR,
  "USBLC6-2SC6": USBLC6_2SC6,
}
export type ImportedMpn = keyof typeof imported

const rotations: Partial<Record<ImportedMpn, number>> = {
  STM32G474RET6: 270, DRV8323SRTAR: 0, CSD18540Q5B: 0,
  LMR36510ADDAR: 0, TPS2116DRLR: 0, TLV75533PDBVR: 180,
  TPS2553DBVR: 180, "USBLC6-2SC6": 270,
}

export function importedPartProps(mpn: ImportedMpn) {
  // These generated functions return a single JSX element and have no hooks.
  // Deliberately take only CAD/procurement props: TPS2553 imports as <switch>,
  // USBLC6 imports an anonymous-pin symbol, and LMR36510 VCC is a regulator
  // output even though its imported pin attributes require external power.
  const element = imported[mpn]({ name: "IMPORTED_PART", loadCapacitance: "18pF" })
  const { footprint, cadModel, supplierPartNumbers } = element.props as ChipProps
  return { footprint, cadModel, supplierPartNumbers, pcbRotation: rotations[mpn] ?? 0 }
}
