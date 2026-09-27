import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D4"],
  pin6: ["D3"],
  pin7: ["D2"],
  pin8: ["D1"]
} as const

export const CSD18540Q5B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C86513"
  ]
}}
      manufacturerPartNumber="CSD18540Q5B"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.902968mm" pcbY="-2.9324935mm" width="0.6999986mm" height="1.27mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.9324935mm" width="0.6999986mm" height="1.27mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.637032mm" pcbY="-2.9324935mm" width="0.6999986mm" height="1.27mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.907032mm" pcbY="-2.9324935mm" width="0.6999986mm" height="1.27mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="0.4573905mm" width="4.8999902mm" height="4.499991mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="3.0674945mm" width="0.6999986mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="3.0674945mm" width="0.6999986mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="3.0674945mm" width="0.6999986mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="3.0674945mm" width="0.6999986mm" height="0.999998mm" shape="rect" />
<silkscreenpath route={[{"x":2.60101080000004,"y":3.067494500000066},{"x":2.60101080000004,"y":-2.932493499999964}]} />
<silkscreenpath route={[{"x":-2.5989788000000544,"y":3.067494500000066},{"x":-2.5989788000000544,"y":-2.932493499999964}]} />
<silkscreencircle pcbX="-2.6469848mm" pcbY="-3.3935035mm" radius="0.104902mm" />
<silkscreentext text="{NAME}" pcbX="-0.0635mm" pcbY="4.5727005mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.9932000000001153,"y":3.8227005000002237},{"x":2.8661999999999352,"y":3.8227005000002237},{"x":2.8661999999999352,"y":-3.814699499999847},{"x":-2.9932000000001153,"y":-3.814699499999847},{"x":-2.9932000000001153,"y":3.8227005000002237}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C86513.obj?uuid=ed84f5dd80b4414bacf3798e6484c98f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C86513.step?uuid=ed84f5dd80b4414bacf3798e6484c98f",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.06750050000005103, y: 0.001015999999935957, z: 0 },
      }}
      {...props}
    />
  )
}