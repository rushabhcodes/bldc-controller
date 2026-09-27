import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"]
} as const

export const SMBJ30A_E3_52 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin2" pinNumber={2} aliases={["A"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
          <port name="pin1" pinNumber={1} aliases={["K"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <schematicpath points={[{"x":-0.14,"y":0.1},{"x":-0.14,"y":0.14},{"x":-0.1,"y":0.14},{"x":-0.1,"y":-0.14},{"x":-0.06,"y":-0.14},{"x":-0.06,"y":-0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0},{"x":0.1,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.1,"y":0},{"x":-0.2,"y":0}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.1 0.14 L -0.1 0 L 0.1 -0.14 Z" strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C1973126"
  ]
}}
      manufacturerPartNumber="SMBJ30A-E3/52"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.591308mm" pcbY="0mm" width="2.047494mm" height="2.2409912mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.591308mm" pcbY="0mm" width="2.047494mm" height="2.2409912mm" shape="rect" />
<silkscreenpath route={[{"x":2.256993200000011,"y":-1.3006324000000404},{"x":2.256993200000011,"y":-1.9049999999999727}]} />
<silkscreenpath route={[{"x":2.2527260000000524,"y":1.9049999999999727},{"x":2.256993200000011,"y":1.9049999999999727},{"x":2.256993200000011,"y":1.3006324000000404}]} />
<silkscreenpath route={[{"x":2.256993200000011,"y":-1.9049999999999727},{"x":-2.593009800000118,"y":-1.8915380000000823}]} />
<silkscreenpath route={[{"x":2.2527260000000524,"y":1.9049999999999727},{"x":-2.5972770000000764,"y":1.8885916000000407}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="2.905mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-3.4925000000000637,"y":-0.1269999999999527},{"x":-3.4925000000000637,"y":0.1270000000000664},{"x":-1.8414999999999964,"y":0.1270000000000664},{"x":-1.8414999999999964,"y":-0.1269999999999527},{"x":-3.4925000000000637,"y":-0.1269999999999527}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":2.723819800000001,"y":-0.8276844000000665},{"x":2.469819799999982,"y":-0.8276844000000665},{"x":2.469819799999982,"y":0.8233156000000008},{"x":2.723819800000001,"y":0.8233156000000008},{"x":2.723819800000001,"y":-0.8276844000000665}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":1.7713198000000148,"y":-0.12918440000009923},{"x":1.7713198000000148,"y":0.12481559999991987},{"x":3.4223197999999684,"y":0.12481559999991987},{"x":3.4223197999999684,"y":-0.12918440000009923},{"x":1.7713198000000148,"y":-0.12918440000009923}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-3.8567999999999074,"y":2.1549999999999727},{"x":3.8822000000000116,"y":2.1549999999999727},{"x":3.8822000000000116,"y":-2.1549999999999727},{"x":-3.8567999999999074,"y":-2.1549999999999727},{"x":-3.8567999999999074,"y":2.1549999999999727}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1973126.obj?uuid=c7eadcb522b4428cb8b83cfe45fcfd7a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1973126.step?uuid=c7eadcb522b4428cb8b83cfe45fcfd7a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -1.21 },
      }}
      {...props}
    />
  )
}