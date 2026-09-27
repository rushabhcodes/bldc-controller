import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CPL"],
  pin2: ["CPH"],
  pin3: ["VCP"],
  pin4: ["VM"],
  pin5: ["VDRAIN"],
  pin6: ["GHA"],
  pin7: ["SHA"],
  pin8: ["GLA"],
  pin9: ["SPA"],
  pin10: ["SNA"],
  pin11: ["SNB"],
  pin12: ["SPB"],
  pin13: ["GLB"],
  pin14: ["SHB"],
  pin15: ["GHB"],
  pin16: ["GHC"],
  pin17: ["SHC"],
  pin18: ["GLC"],
  pin19: ["SPC"],
  pin20: ["SNC"],
  pin21: ["SOC"],
  pin22: ["SOB"],
  pin23: ["SOA"],
  pin24: ["VREF"],
  pin25: ["nFAULT"],
  pin26: ["SDO"],
  pin27: ["SDI"],
  pin28: ["SCLK"],
  pin29: ["nSCS"],
  pin30: ["ENABLE"],
  pin31: ["CAL"],
  pin32: ["AGND"],
  pin33: ["DVDD"],
  pin34: ["INHA"],
  pin35: ["INLA"],
  pin36: ["INHB"],
  pin37: ["INLB"],
  pin38: ["INHC"],
  pin39: ["INLC"],
  pin40: ["PGND"],
  pin41: ["EP"]
} as const

const pinAttributes = {
  pin32: {requiresGround: true},
  pin40: {requiresGround: true}
} as const

export const DRV8323SRTAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C701784"
  ]
}}
      manufacturerPartNumber="DRV8323SRTAR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.999994mm" pcbY="2.249932mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.999994mm" pcbY="1.75006mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.999994mm" pcbY="1.249934mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.999994mm" pcbY="0.750062mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.999994mm" pcbY="0.249936mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.999994mm" pcbY="-0.249936mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.999994mm" pcbY="-0.750062mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.999994mm" pcbY="-1.249934mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-2.999994mm" pcbY="-1.75006mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-2.999994mm" pcbY="-2.249932mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.249932mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.75006mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.249934mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.750062mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.249936mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="0.249936mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.750062mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.249934mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.75006mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.249932mm" pcbY="-2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="2.999994mm" pcbY="-2.249932mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.999994mm" pcbY="-1.75006mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.999994mm" pcbY="-1.249934mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.999994mm" pcbY="-0.750062mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.999994mm" pcbY="-0.249936mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="2.999994mm" pcbY="0.249936mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="2.999994mm" pcbY="0.750062mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="2.999994mm" pcbY="1.249934mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="2.999994mm" pcbY="1.75006mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="2.999994mm" pcbY="2.249932mm" width="0.7999984mm" height="0.2199894mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="2.249932mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="1.75006mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="1.249934mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="0.750062mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0.249936mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-0.249936mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-0.750062mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-1.249934mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-1.75006mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-2.249932mm" pcbY="2.999994mm" width="0.2199894mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="0mm" pcbY="0mm" width="4.499991mm" height="4.499991mm" shape="rect" />
<silkscreenpath route={[{"x":-3.1499048000000016,"y":2.750007200000013},{"x":-3.1499048000000016,"y":3.1500064000000094},{"x":-2.7499056000000053,"y":3.1500064000000094}]} />
<silkscreenpath route={[{"x":2.7501087999999925,"y":3.1500064000000094},{"x":3.150107999999989,"y":3.1500064000000094},{"x":3.150107999999989,"y":2.750007200000013}]} />
<silkscreenpath route={[{"x":2.7501087999999925,"y":-3.150006399999981},{"x":3.150107999999989,"y":-3.150006399999981},{"x":3.150107999999989,"y":-2.7500071999999847}]} />
<silkscreenpath route={[{"x":-2.7499056000000053,"y":-3.150006399999981},{"x":-3.1499048000000016,"y":-3.150006399999981},{"x":-3.1499048000000016,"y":-2.7500071999999847}]} />
<silkscreenpath route={[{"x":-3.550818399999997,"y":2.9489400000000074},{"x":-3.7014604297039426,"y":3.0976810559976826},{"x":-3.8508378240147465,"y":2.9476700000000164},{"x":-3.7014604297039426,"y":2.7976589440023503},{"x":-3.550818399999997,"y":2.9464000000000254}]} />
<silkscreentext text="{NAME}" pcbX="-0.2413mm" pcbY="4.4036mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.110799999999998,"y":3.6535999999999973},{"x":3.6282000000000068,"y":3.6535999999999973},{"x":3.6282000000000068,"y":-3.653599999999983},{"x":-4.110799999999998,"y":-3.653599999999983},{"x":-4.110799999999998,"y":3.6535999999999973}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701784.obj?uuid=9c7dcadb820d4d49b8b80f27caa6b9a5",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701784.step?uuid=9c7dcadb820d4d49b8b80f27caa6b9a5",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: -0.00005079999999679785, y: -0.00005079999999679785, z: 0 },
      }}
      {...props}
    />
  )
}