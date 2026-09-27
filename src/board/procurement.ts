import { importedPartProps } from "./imported-parts"

// Fixed, reviewable procurement choices; no automatic substitutions at export.
export function resistorPart(value: string, footprint: string, name: string) {
  if (name === "R_NTC") return {manufacturerPartNumber:"NCP21XV103J03RA", ...importedPartProps("NCP21XV103J03RA")}
  if (value === "0.01") return {manufacturerPartNumber:"WSL2512R0100FEA", ...importedPartProps("WSL2512R0100FEA")}
  const codes: Record<string,string> = {"0":"0R", "10":"10R", "100":"100R", "1k":"1K", "2.2k":"2K2", "5.1k":"5K1", "10k":"10K", "24.9k":"24K9", "33k":"33K", "100k":"100K", "110k":"110K", "150k":"150K", "330k":"330K"}
  if (!codes[value]) throw new Error(`Unspecified resistor ${value}`)
  return {manufacturerPartNumber:`RC${footprint}${value === "0" ? "JR" : "FR"}-07${codes[value]}L`}
}
export function capacitorPart(value:string, name:string, footprint:string) {
  if (value === "470uF") return {manufacturerPartNumber:"EEUFR1J471", polarized:true, ...importedPartProps("EEUFR1J471")}
  const lookup: Record<string,[string,string,string]> = {
    "4.7uF:1210":["GCM32DC72A475KE02L","C913445","1210"],
    "220nF:0805":["CL21B224KCFSFNE","C307542","0805"],
    "1uF:1206":["CL31B105KCHNNNE","C13832","1206"],
    "47nF:0805":["CL21B473KCFNNNE","C17074","0805"],
    "100nF:0805":["CL21B104KCFNNNE","C28233","0805"],
    "100nF:0603":["CL10B104KB8NNNC","C1591","0603"],
    "1uF:0603":["CL10B105KO8NNNC","C59782","0603"],
    "1uF:0805":["CL31B105KCHNNNE","C13832","1206"],
    "4.7uF:0805":["CL21B475KAFNNNE","C98195","0805"],
    "22uF:1210":["CL32B226KAJNNNE","C309062","1210"],
    "1nF:0603":["CL10B102KB8NNNC","C1588","0603"],
    "10nF:0603":["CL10B103KB8NNNC","C1589","0603"],
    "30pF:0603":["C0603C300J5GACTU","","0603"],
  }
  const entry = lookup[`${value}:${footprint}`]
  if (!entry) throw new Error(`Unspecified capacitor ${name}: ${value} ${footprint}`)
  return {manufacturerPartNumber:entry[0], supplierPartNumbers:entry[1]?{jlcpcb:[entry[1]]}:undefined, footprint:entry[2]}
}
