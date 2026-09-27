import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const NCP21XV103J03RA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicrect schX={0} schY={0} width={0.6} height={0.2} strokeWidth={0.02} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.6} schY={0} schStemLength={0.3} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.6} schY={0} schStemLength={0.3} />
          <schematicpath points={[{"x":0.25,"y":0.25},{"x":-0.19,"y":-0.19},{"x":-0.29,"y":-0.19}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C73681"
  ]
}}
      manufacturerPartNumber="NCP21XV103J03RA"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.999998mm" pcbY="0mm" width="1.1325352mm" height="1.3770102mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.999998mm" pcbY="0mm" width="1.1325352mm" height="1.3770102mm" shape="rect" />
<silkscreenpath route={[{"x":0.4761991999999964,"y":-0.9170924000000014},{"x":1.7611343999999463,"y":-0.9170924000000014},{"x":1.7611343999999463,"y":0.9170924000000014},{"x":0.4761991999999964,"y":0.9170924000000014}]} />
<silkscreenpath route={[{"x":-0.47619920000011007,"y":-0.9170924000000014},{"x":-1.7611343999999463,"y":-0.9170924000000014},{"x":-1.7611343999999463,"y":0.9170924000000014},{"x":-0.47619920000011007,"y":0.9170924000000014}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="1.9144mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.0026000000000295,"y":1.1644000000000005},{"x":2.02800000000002,"y":1.1644000000000005},{"x":2.02800000000002,"y":-1.1643999999998869},{"x":-2.0026000000000295,"y":-1.1643999999998869},{"x":-2.0026000000000295,"y":1.1644000000000005}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C73681.obj?uuid=c7acac53bcbc44d68fbab8f60a747688",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C73681.step?uuid=c7acac53bcbc44d68fbab8f60a747688",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999842880061, z: 0 },
      }}
      {...props}
    />
  )
}