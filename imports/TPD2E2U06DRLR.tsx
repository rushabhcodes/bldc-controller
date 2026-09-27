import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC2"],
  pin2: ["NC1"],
  pin3: ["IO1"],
  pin4: ["GND"],
  pin5: ["IO2"]
} as const

const pinAttributes = {
  pin1: {doNotConnect: true},
  pin2: {doNotConnect: true},
  pin4: {requiresGround: true}
} as const

export const TPD2E2U06DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1972959"
  ]
}}
      manufacturerPartNumber="TPD2E2U06DRLR"
      footprint={<footprint>
        <smtpad portHints={["pin4"]} pcbX="0.700024mm" pcbY="-0.499999mm" width="0.4500118mm" height="0.2899918mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.700024mm" pcbY="-0.000127mm" width="0.4500118mm" height="0.2899918mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.700024mm" pcbY="0.499999mm" width="0.4500118mm" height="0.2899918mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.700024mm" pcbY="-0.499999mm" width="0.4500118mm" height="0.2899918mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.700024mm" pcbY="0.499999mm" width="0.4500118mm" height="0.2899918mm" shape="rect" />
<silkscreenpath route={[{"x":0.6499097999998185,"y":0.844219800000019},{"x":-0.6501130000001467,"y":0.853821000000039}]} />
<silkscreenpath route={[{"x":0.6499097999998185,"y":-0.899439399999892},{"x":-0.6501130000001467,"y":-0.899439399999892}]} />
<silkscreencircle pcbX="-0.890016mm" pcbY="0.930021mm" radius="0.050038mm" />
<silkscreentext text="{NAME}" pcbX="-0.089916mm" pcbY="1.980821mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.368616000000202,"y":1.2308209999999917},{"x":1.188783999999714,"y":1.2308209999999917},{"x":1.188783999999714,"y":-1.1487789999999904},{"x":-1.368616000000202,"y":-1.1487789999999904},{"x":-1.368616000000202,"y":1.2308209999999917}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1972959.obj?uuid=ce682da4a06c4a098d062f74e6fe00c1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1972959.step?uuid=ce682da4a06c4a098d062f74e6fe00c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.03 },
      }}
      {...props}
    />
  )
}