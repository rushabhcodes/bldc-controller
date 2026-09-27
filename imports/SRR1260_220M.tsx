import type { InductorProps } from "@tscircuit/props"

export const SRR1260_220M = (props: Omit<InductorProps, "inductance">) => {
  return (
    <inductor
      inductance="22uH"
      supplierPartNumbers={{
  "jlcpcb": [
    "C3224283"
  ]
}}
      manufacturerPartNumber="SRR1260-220M"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="5.178044mm" pcbY="0mm" width="3.8239954mm" height="5.8200036mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-5.178044mm" pcbY="0mm" width="3.8239954mm" height="5.8200036mm" shape="rect" />
<silkscreenpath route={[{"x":-6.32620020000013,"y":3.062401799999975},{"x":-6.32620020000013,"y":6.326200200000017},{"x":6.326200200000017,"y":6.326200200000017},{"x":6.326200200000017,"y":3.062401799999975}]} />
<silkscreenpath route={[{"x":-6.32620020000013,"y":-3.0624018000000888},{"x":-6.32620020000013,"y":-6.326200199999903},{"x":6.326200200000017,"y":-6.326200199999903},{"x":6.326200200000017,"y":-3.0624018000000888}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="7.3246mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.336599999999976,"y":6.574600000000032},{"x":7.3366000000000895,"y":6.574600000000032},{"x":7.3366000000000895,"y":-6.5745999999999185},{"x":-7.336599999999976,"y":-6.5745999999999185},{"x":-7.336599999999976,"y":6.574600000000032}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3224283.obj?uuid=4b3e52950af04e0b902996f968361f10",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3224283.step?uuid=4b3e52950af04e0b902996f968361f10",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: 0 },
      }}
      {...props}
    />
  )
}