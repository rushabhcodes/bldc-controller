import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const KF301_5_0_3P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C474882"
  ]
}}
      manufacturerPartNumber="KF301-5.0-3P"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-4.99999mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="4.99999mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.3999972mm" shape="circle" />
<silkscreenpath route={[{"x":7.899984199999949,"y":2.4999950000001263},{"x":7.899984199999949,"y":1.4999969999998939},{"x":7.500010399999951,"y":1.4999969999998939}]} />
<silkscreenpath route={[{"x":7.899984199999949,"y":2.4999950000001263},{"x":7.500010399999951,"y":2.4999950000001263}]} />
<silkscreenpath route={[{"x":-7.500010400000065,"y":3.99999200000002},{"x":7.500010399999951,"y":3.99999200000002}]} />
<silkscreenpath route={[{"x":7.500010399999951,"y":3.99999200000002},{"x":7.500010399999951,"y":-3.6999925999998595}]} />
<silkscreenpath route={[{"x":-7.500010400000065,"y":3.99999200000002},{"x":-7.500010400000065,"y":-3.6999925999998595}]} />
<silkscreenpath route={[{"x":-7.500010400000065,"y":-3.6999925999998595},{"x":7.500010399999951,"y":-3.6999925999998595}]} />
<silkscreentext text="{NAME}" pcbX="0.1905mm" pcbY="4.9878mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":1.9999959999998964,"y":-1.9999959999998964},{"x":2.999994000000015,"y":-1.9999959999998964},{"x":2.999994000000015,"y":-3.4999930000000177},{"x":1.9999959999998964,"y":-3.4999930000000177},{"x":1.9999959999998964,"y":-1.9999959999998964}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":2.4999950000000126,"y":-0.9999979999998914},{"x":1.4999970000000076,"y":-1.9999959999998964},{"x":3.499992999999904,"y":-1.9999959999998964},{"x":2.4999950000000126,"y":-0.9999979999998914}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-2.4999950000001263,"y":-0.9999979999998914},{"x":-3.4999930000000177,"y":-1.9999959999998964},{"x":-1.4999970000000076,"y":-1.9999959999998964},{"x":-2.4999950000001263,"y":-0.9999979999998914}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":-2.999994000000015,"y":-1.9999959999998964},{"x":-1.99999600000001,"y":-1.9999959999998964},{"x":-1.99999600000001,"y":-3.4999930000000177},{"x":-2.999994000000015,"y":-3.4999930000000177},{"x":-2.999994000000015,"y":-1.9999959999998964}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-7.768400000000042,"y":4.237799999999993},{"x":8.149400000000014,"y":4.237799999999993},{"x":8.149400000000014,"y":-3.983799999999974},{"x":-7.768400000000042,"y":-3.983799999999974},{"x":-7.768400000000042,"y":4.237799999999993}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C474882.obj?uuid=7a1c767a6883477d8097e3100aeff343",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C474882.step?uuid=7a1c767a6883477d8097e3100aeff343",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.14999970000008034, z: -0.000008400000000463592 },
      }}
      {...props}
    />
  )
}