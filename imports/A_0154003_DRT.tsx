import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const A_0154003_DRT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicrect schX={0} schY={0} width={0.4} height={0.16} strokeWidth={0.02} color="#A00000" />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":0.2,"y":0}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C206913"
  ]
}}
      manufacturerPartNumber="0154003.DRT"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.184906mm" pcbY="0mm" width="4.2399966mm" height="3.81mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="3.184906mm" pcbY="0mm" width="4.2399966mm" height="3.81mm" shape="rect" />
<silkscreenpath route={[{"x":-4.8260000000001355,"y":2.5399999999999636},{"x":4.826000000000022,"y":2.5399999999999636},{"x":4.826000000000022,"y":2.1361400000000685}]} />
<silkscreenpath route={[{"x":-4.8260000000001355,"y":2.1361400000000685},{"x":-4.8260000000001355,"y":2.5399999999999636}]} />
<silkscreenpath route={[{"x":4.826000000000022,"y":-2.136139999999955},{"x":4.826000000000022,"y":-2.5399999999999636},{"x":-4.8260000000001355,"y":-2.5399999999999636},{"x":-4.8260000000001355,"y":-2.136139999999955}]} />
<silkscreenpath route={[{"x":0,"y":-1.0159999999999627},{"x":0.2204129394717711,"y":-0.9656921848943512},{"x":0.397170393093802,"y":-0.8247328193442627},{"x":0.49526337938823417,"y":-0.6210406344498551},{"x":0.49526337938823417,"y":-0.39495936555022126},{"x":0.397170393093802,"y":-0.19126718065570003},{"x":0.2204129394717711,"y":-0.050307815105497866},{"x":0,"y":0}]} />
<silkscreenpath route={[{"x":0,"y":1.0160000000000764},{"x":-0.2204129394717711,"y":0.9656921848944648},{"x":-0.397170393093802,"y":0.8247328193442627},{"x":-0.49526337938834786,"y":0.6210406344498551},{"x":-0.49526337938834786,"y":0.39495936555022126},{"x":-0.397170393093802,"y":0.19126718065581372},{"x":-0.2204129394717711,"y":0.050307815105497866},{"x":0,"y":0}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.54mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.5586000000000695,"y":2.7899999999999636},{"x":5.558599999999956,"y":2.7899999999999636},{"x":5.558599999999956,"y":-2.7899999999999636},{"x":-5.5586000000000695,"y":-2.7899999999999636},{"x":-5.5586000000000695,"y":2.7899999999999636}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C206913.obj?uuid=e9e19ce0a183441ba00c2988d646546f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C206913.step?uuid=e9e19ce0a183441ba00c2988d646546f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.30587050000000016, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}