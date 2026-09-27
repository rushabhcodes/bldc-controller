// Physical pin numbers, top view. Manufacturer sources: docs/references.md.
export const stm32g474 = [
  "VBAT", "PC13", "PC14", "PC15", "PF0", "PF1", "NRST", "PC0",
  "PC1", "PC2", "PC3", "PA0", "PA1", "PA2", "VSS1", "VDD1",
  "PA3", "PA4", "PA5", "PA6", "PA7", "PC4", "PC5", "PB0",
  "PB1", "PB2", "VSSA", "VREF", "VDDA", "PB10", "VSS2", "VDD2",
  "PB11", "PB12", "PB13", "PB14", "PB15", "PC6", "PC7", "PC8",
  "PC9", "PA8", "PA9", "PA10", "PA11", "PA12", "VSS3", "VDD3",
  "PA13", "PA14", "PA15", "PC10", "PC11", "PC12", "PD2", "PB3",
  "PB4", "PB5", "PB6", "PB7", "PB8", "PB9", "VSS4", "VDD4",
] as const
export const drv8323s = [
  "CPL", "CPH", "VCP", "VM", "VDRAIN", "GHA", "SHA", "GLA", "SPA", "SNA",
  "SNB", "SPB", "GLB", "SHB", "GHB", "GHC", "SHC", "GLC", "SPC", "SNC",
  "SOC", "SOB", "SOA", "VREF", "nFAULT", "SDO", "SDI", "SCLK", "nSCS", "ENABLE",
  "CAL", "AGND", "DVDD", "INHA", "INLA", "INHB", "INLB", "INHC", "INLC", "PGND", "EP",
] as const
export const pinLabels = (pins: readonly string[]) => Object.fromEntries(pins.map((label, i) => [`pin${i + 1}`, label]))
export const nets = (connections: Record<string, string>) => Object.fromEntries(Object.entries(connections).map(([pin, net]) => [pin, `net.${net}`]))
