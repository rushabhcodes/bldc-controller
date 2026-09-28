// PCB placement overrides are kept separate from schematic sheet placement.
// Power cells use compact adjacent FETs; control and USB stay below/left.
export const placement: Record<string, {pcbX?:number;pcbY?:number;pcbRotation?:number}> = {
  J_DC:{pcbX:-72,pcbY:44,pcbRotation:90}, F1:{pcbX:-49,pcbY:44}, D_REVERSE:{pcbX:-32,pcbY:43,pcbRotation:270},
  D_BUS:{pcbX:-19,pcbY:42}, C_BUS:{pcbX:0,pcbY:42}, C_BUS_2:{pcbX:14,pcbY:42}, C_BUS_HF:{pcbX:5,pcbY:32}, R_BLEED:{pcbX:-6,pcbY:32},
  J_MOTOR:{pcbX:69,pcbY:21,pcbRotation:270},
  U_BUCK:{pcbX:-60,pcbY:23}, L1:{pcbX:-45,pcbY:23},
  C_BUCK_IN:{pcbX:-69,pcbY:24,pcbRotation:90}, C_BUCK_HF:{pcbX:-65.5,pcbY:23.5,pcbRotation:90},
  C_BUCK_IN2:{pcbX:-72.5,pcbY:24,pcbRotation:90}, C_BUCK_IN3:{pcbX:-76,pcbY:24,pcbRotation:90},
  C_BUCK_VCC:{pcbX:-55,pcbY:21.25,pcbRotation:270}, C_BOOT:{pcbX:-55,pcbY:24.25,pcbRotation:90},
  R_FB_TOP:{pcbX:-54,pcbY:17},R_FB_BOT:{pcbX:-59,pcbY:17},
  U_DRV:{pcbX:21,pcbY:20,pcbRotation:180},
  C_CP_FLY:{pcbX:26.5,pcbY:17.7,pcbRotation:90}, C_CP_STORE:{pcbX:32,pcbY:20,pcbRotation:90},
  C_DRV_VM:{pcbX:29,pcbY:18,pcbRotation:90}, C_DRV_VM_HF:{pcbX:25.5,pcbY:21.3,pcbRotation:90},
  C_DRV_DVDD:{pcbX:19.5,pcbY:15,pcbRotation:0}, C_DRV_REF:{pcbX:15.5,pcbY:21,pcbRotation:90},
  R_DRV_CMD:{pcbX:11,pcbY:13},R_DRV_EN:{pcbX:11,pcbY:17},R_DRV_CAL:{pcbX:11,pcbY:21},
  R_DRV_CS:{pcbX:11,pcbY:25},R_DRV_MISO:{pcbX:11,pcbY:29},R_DRV_FAULT:{pcbX:11,pcbY:33},J_DISABLE:{pcbX:21,pcbY:33},
  U_MCU:{pcbX:-11,pcbY:-15},
  C_VDD1:{pcbX:-19,pcbY:-19,pcbRotation:90}, C_VDD2:{pcbX:-7.25,pcbY:-23.3},
  C_VDD3:{pcbX:-2.5,pcbY:-11.25,pcbRotation:90}, C_VDD4:{pcbX:-14.75,pcbY:-6.5},
  C_VBAT:{pcbX:-19.5,pcbY:-9.5}, C_MCU_BULK:{pcbX:-14,pcbY:-26},
  R_AVDD:{pcbX:-12,pcbY:-30},C_AVDD:{pcbX:-9,pcbY:-26},C_AREF:{pcbX:-10.5,pcbY:-23.3},
  Y1:{pcbX:-22,pcbY:-13.4,pcbRotation:0}, C_XTAL1:{pcbX:-23.5,pcbY:-17.4,pcbRotation:90},C_XTAL2:{pcbX:-25.8,pcbY:-8.5,pcbRotation:90},
  R_RESET:{pcbX:-28,pcbY:-17}, C_RESET:{pcbX:-23.5,pcbY:-20.1},
  U_OV:{pcbX:42,pcbY:-21},U_REF:{pcbX:33,pcbY:-21},R_REF:{pcbX:32,pcbY:-15},C_REF:{pcbX:33,pcbY:-26},C_OV:{pcbX:42,pcbY:-15},
  R_OV_TOP:{pcbX:51,pcbY:-15}, R_OV_BOT:{pcbX:50,pcbY:-21},R_OV_HYS:{pcbX:50,pcbY:-26},R_OV_PU:{pcbX:42,pcbY:-26},
  R_DUMP_G:{pcbX:53,pcbY:-34},R_DUMP_PD:{pcbX:60,pcbY:-36},Q_DUMP:{pcbX:60,pcbY:-31},J_DUMP:{pcbX:69,pcbY:-19,pcbRotation:270},
  R_NTC:{pcbX:40,pcbY:0},R_NTC_PULLUP:{pcbX:25,pcbY:-8},C_NTC:{pcbX:25,pcbY:-12},
}
for(const [i,p] of ["A","B","C"].entries()) {
  const y = 34-i*13
  placement[`Q_${p}L`] = {pcbX:38,pcbY:y}
  placement[`Q_${p}H`] = {pcbX:49,pcbY:y}
  placement[`R_G${p}L`] = {pcbX:33,pcbY:y-4.2}
  placement[`R_G${p}H`] = {pcbX:44,pcbY:y-4.2}
  placement[`R_PD${p}L`] = {pcbX:38,pcbY:y-4.8}
  placement[`R_PD${p}H`] = {pcbX:49,pcbY:y-4.8}
  placement[`R_SHUNT_${p}`] = {pcbX:29,pcbY:y+4.5,pcbRotation:180}
  placement[`C_BRIDGE_${p}`] = {pcbX:57,pcbY:y,pcbRotation:0}
  placement[`R_PWM_${p}H`] = {pcbX:5,pcbY:23-i*4}
  placement[`R_PWM_${p}L`] = {pcbX:0,pcbY:23-i*4}
  placement[`R_ISENSE_${p}`] = {pcbX:-34,pcbY:-20-i*4}
  placement[`C_ISENSE_${p}`] = {pcbX:-28,pcbY:-21-i*4,pcbRotation:180}
}
for(let i=0;i<4;i++) {
  placement[`R_VTOP_${i}`] = {pcbX:0+i*6,pcbY:-22,pcbRotation:270}
  placement[`R_VBOT_${i}`] = {pcbX:0+i*6,pcbY:-28,pcbRotation:90}
  placement[`C_V_${i}`] = {pcbX:0+i*6,pcbY:-31,pcbRotation:90}
}

// Orient two-pin parts toward their local signal and return destinations.
for(const [name,rotation] of Object.entries({C_BUS_HF:180,R_FB_TOP:180,R_FB_BOT:180,C_LDO_OUT:0,C_VDD3:270,C_VBAT:180,C_CP_STORE:270,C_DRV_DVDD:180,R_NTC:0,C_REF:180,R_OV_TOP:180,R_OV_BOT:180})) {
  placement[name] = {...placement[name], pcbRotation:rotation}
}

placement.C_XTAL1.pcbRotation = 270

// Snapshot review: shorten MCU-to-driver signals and reserve a clear fanout
// corridor. Move the complete MCU decoupling cluster with the MCU.
for (const name of ["U_MCU", "C_VDD1", "C_VDD2", "C_VDD3", "C_VDD4", "C_VBAT",
  "C_MCU_BULK", "R_AVDD", "C_AVDD", "C_AREF"]) {
  const old = placement[name]
  placement[name] = {...old, pcbX:old.pcbX!+1, pcbY:old.pcbY!+23}
}
Object.assign(placement, {
  U_DRV:{pcbX:16,pcbY:20,pcbRotation:180},
  Y1:{pcbX:-20.5,pcbY:10.5,pcbRotation:180},
  C_XTAL1:{pcbX:-23,pcbY:13.5,pcbRotation:180},
  C_XTAL2:{pcbX:-23,pcbY:7,pcbRotation:180},
  R_RESET:{pcbX:-27,pcbY:9},C_RESET:{pcbX:-20,pcbY:1},
  C_AREF:{pcbX:-9.5,pcbY:-.3,pcbRotation:180},
  // Keep the charge-pump parts below the right-hand gate/sense pin escape.
  C_CP_FLY:{pcbX:21.2,pcbY:16.2,pcbRotation:270},
  C_CP_STORE:{pcbX:20.8,pcbY:12.5,pcbRotation:0},
  C_DRV_VM:{pcbX:25.3,pcbY:19.7,pcbRotation:90},
  C_DRV_VM_HF:{pcbX:22,pcbY:19.25,pcbRotation:0},
  C_DRV_DVDD:{pcbX:14.5,pcbY:15,pcbRotation:180},
  C_DRV_REF:{pcbX:10.5,pcbY:21,pcbRotation:90},
  R_DRV_CMD:{pcbX:2,pcbY:8},R_DRV_EN:{pcbX:5,pcbY:12},
  R_DRV_CAL:{pcbX:9,pcbY:10,pcbRotation:180},R_DRV_CS:{pcbX:5,pcbY:17},
  R_DRV_MISO:{pcbX:5,pcbY:21},R_DRV_FAULT:{pcbX:8,pcbY:25},
  J_DISABLE:{pcbX:-12,pcbY:30},
  R_NTC_PULLUP:{pcbX:-4,pcbY:-8},C_NTC:{pcbX:-4,pcbY:-12},
  J_USB:{pcbX:-75.8,pcbY:0,pcbRotation:270},
  U_CC_ESD:{pcbX:-66,pcbY:0},R_CC1:{pcbX:-63,pcbY:3},R_CC2:{pcbX:-63,pcbY:-3},
  U_USB_ESD:{pcbX:-56,pcbY:0},
  U_USB_PWR:{pcbX:-58,pcbY:11},C_USB_IN:{pcbX:-64,pcbY:11},R_USB_FAULT:{pcbX:-50,pcbY:11},
  R_USB_DP:{pcbX:-51,pcbY:3},R_USB_DM:{pcbX:-51,pcbY:0},
  R_USB_SENSE_TOP:{pcbX:-56,pcbY:-9},R_USB_SENSE_BOT:{pcbX:-54,pcbY:-12},
  R_PR_TOP:{pcbX:-46,pcbY:-15},R_PR_BOT:{pcbX:-41,pcbY:-15},
  U_LDO:{pcbX:-37,pcbY:-2},C_LDO_OUT:{pcbX:-33,pcbY:-8,pcbRotation:0},
  C_LDO_IN:{pcbX:-38,pcbY:-6},
  R_MUX_ST:{pcbX:-47,pcbY:-19},
  J_TEST:{pcbX:22,pcbY:-47},
  D_BUS:{pcbX:-19,pcbY:42,pcbRotation:0},
  R_BLEED:{pcbX:-6,pcbY:32,pcbRotation:180},
})
// Orient the MCU toward its nearby support circuits.
placement.U_MCU.pcbRotation = 270
for (const [i,p] of ["A","B","C"].entries()) {
  placement[`R_PWM_${p}H`] = {pcbX:17+i*3,pcbY:10}
  placement[`R_PWM_${p}L`] = {pcbX:17+i*3,pcbY:6}
  placement[`R_ISENSE_${p}`] = {pcbX:-29,pcbY:4-i*4}
  placement[`C_ISENSE_${p}`] = {pcbX:-23,pcbY:4-i*4,pcbRotation:180}
}
// ADC inputs are on the MCU's west side. Keep their filter bank on that side.
for (let i=0;i<4;i++) {
  placement[`R_VTOP_${i}`] = {pcbX:-45,pcbY:14-i*4,pcbRotation:0}
  placement[`R_VBOT_${i}`] = {pcbX:-40,pcbY:14-i*4,pcbRotation:90}
  placement[`C_V_${i}`] = {pcbX:-35,pcbY:14-i*4,pcbRotation:90}
}
