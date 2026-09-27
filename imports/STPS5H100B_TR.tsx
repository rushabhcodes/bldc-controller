import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["nc"],
  pin2: ["K"],
  pin3: ["A"]
} as const

const pinAttributes = {
  pin1: {doNotConnect: true}
} as const

export const STPS5H100B_TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C10648"
  ]
}}
      manufacturerPartNumber="STPS5H100B-TR"
      footprint={<footprint>
        <smtpad portHints={["pin3"]} pcbX="2.288032mm" pcbY="-4.63497295mm" width="1.27mm" height="2.54mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.002032mm" pcbY="2.85701105mm" width="5.3999892mm" height="6.0999878mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.288032mm" pcbY="-4.63700495mm" width="1.27mm" height="2.54mm" shape="rect" />
<silkscreenpath route={[{"x":-3.3040320000000065,"y":4.758963050000034},{"x":-3.3040320000000065,"y":4.885963049999987},{"x":-3.3053019999999833,"y":-2.3530369499999324},{"x":3.298697999999945,"y":-2.3530369499999324},{"x":3.298697999999945,"y":4.885963049999987},{"x":3.2999680000000353,"y":5.012963050000053}]} />
<silkscreentext text="{NAME}" pcbX="-0.005842mm" pcbY="6.91212305mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.5578420000000506,"y":6.162123050000105},{"x":3.546158000000105,"y":6.162123050000105},{"x":3.546158000000105,"y":-6.148876949999931},{"x":-3.5578420000000506,"y":-6.148876949999931},{"x":-3.5578420000000506,"y":6.162123050000105}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C10648.obj?uuid=5b476b38582b49f586002eb3e8cb30ae",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C10648.step?uuid=5b476b38582b49f586002eb3e8cb30ae",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 1.8960592500000246, z: -0.81 },
      }}
      {...props}
    />
  )
}