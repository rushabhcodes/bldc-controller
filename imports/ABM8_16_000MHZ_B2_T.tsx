import type { CrystalProps } from "@tscircuit/props"

type ImportedCrystalProps = Omit<CrystalProps, "frequency" | "pinVariant">

export const ABM8_16_000MHZ_B2_T = (props: ImportedCrystalProps) => {
  const { name = "X1", ...restProps } = props

  return (
    <crystal
      name={name}
      frequency="16MHz"
      pinVariant="four_pin"
      supplierPartNumbers={{
  "jlcpcb": [
    "C179641"
  ]
}}
      manufacturerPartNumber="ABM8-16.000MHZ-B2-T"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.099947mm" pcbY="-0.87503mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.099947mm" pcbY="-0.87503mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.099947mm" pcbY="0.87503mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.099947mm" pcbY="0.87503mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":-2.540025400000218,"y":-1.0159492000000228},{"x":-2.540025400000218,"y":-1.7779491999999664},{"x":-2.540025400000218,"y":-1.9049492000000328}]} />
<silkscreenpath route={[{"x":-2.029510800000139,"y":-1.6786860000000843},{"x":-2.286050800000112,"y":-1.6786860000000843},{"x":-2.286050800000112,"y":1.6512032000000545},{"x":2.285949199999891,"y":1.6512032000000545},{"x":2.285949199999891,"y":0.00020319999987350457},{"x":2.285949199999891,"y":-1.6507968000000801},{"x":-2.029510800000139,"y":-1.6786860000000843}]} />
<silkscreenpath route={[{"x":-2.540025400000218,"y":-1.9049492000000328},{"x":-1.6510254000002078,"y":-1.9049492000000328}]} />
<silkscreentext text="{NAME}" pcbX="-0.122555mm" pcbY="2.657604mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-2.286025400000085,"y":-1.0159492000000228},{"x":-2.286025400000085,"y":-1.6509492000001273},{"x":-1.6510254000000941,"y":-1.6509492000001273},{"x":-2.286025400000085,"y":-1.0159492000000228}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-2.7855550000001585,"y":1.907603999999992},{"x":2.5404449999998633,"y":1.907603999999992},{"x":2.5404449999998633,"y":-2.148396000000048},{"x":-2.7855550000001585,"y":-2.148396000000048},{"x":-2.7855550000001585,"y":1.907603999999992}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C179641.obj?uuid=da128905ee8b4374ad5860b9e47f474a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C179641.step?uuid=da128905ee8b4374ad5860b9e47f474a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012699999956566899, z: -0.01 },
      }}
      {...restProps}
    />
  )
}