import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["PC14_OSC32_IN"],
  pin4: ["PC15_OSC32_OUT"],
  pin5: ["PF0_OSC_IN"],
  pin6: ["PF1_OSC_OUT"],
  pin7: ["PG10_NRST"],
  pin8: ["PC0"],
  pin9: ["PC1"],
  pin10: ["PC2"],
  pin11: ["PC3"],
  pin12: ["PA0"],
  pin13: ["PA1"],
  pin14: ["PA2"],
  pin15: ["VSS1"],
  pin16: ["VDD1"],
  pin17: ["PA3"],
  pin18: ["PA4"],
  pin19: ["PA5"],
  pin20: ["PA6"],
  pin21: ["PA7"],
  pin22: ["PC4"],
  pin23: ["PC5"],
  pin24: ["PB0"],
  pin25: ["PB1"],
  pin26: ["PB2"],
  pin27: ["VSSA"],
  pin28: ["VREF_POS"],
  pin29: ["VDDA"],
  pin30: ["PB10"],
  pin31: ["VSS2"],
  pin32: ["VDD2"],
  pin33: ["PB11"],
  pin34: ["PB12"],
  pin35: ["PB13"],
  pin36: ["PB14"],
  pin37: ["PB15"],
  pin38: ["PC6"],
  pin39: ["PC7"],
  pin40: ["PC8"],
  pin41: ["PC9"],
  pin42: ["PA8"],
  pin43: ["PA9"],
  pin44: ["PA10"],
  pin45: ["PA11"],
  pin46: ["PA12"],
  pin47: ["VSS3"],
  pin48: ["VDD3"],
  pin49: ["PA13"],
  pin50: ["PA14"],
  pin51: ["PA15"],
  pin52: ["PC10"],
  pin53: ["PC11"],
  pin54: ["PC12"],
  pin55: ["PD2"],
  pin56: ["PB3"],
  pin57: ["PB4"],
  pin58: ["PB5"],
  pin59: ["PB6"],
  pin60: ["PB7"],
  pin61: ["PB8_BOOT0"],
  pin62: ["PB9"],
  pin63: ["VSS4"],
  pin64: ["VDD4"]
} as const

const pinAttributes = {
  pin15: {requiresGround: true},
  pin16: {requiresPower: true},
  pin29: {requiresPower: true},
  pin31: {requiresGround: true},
  pin32: {requiresPower: true},
  pin47: {requiresGround: true},
  pin48: {requiresPower: true},
  pin63: {requiresGround: true},
  pin64: {requiresPower: true}
} as const

export const STM32G474RET6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C521608"
  ]
}}
      manufacturerPartNumber="STM32G474RET6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.750056mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-3.24993mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-2.750058mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-2.249932mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-1.75006mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-1.249934mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.750062mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-0.249936mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0.249936mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="0.750062mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="1.249934mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="1.75006mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="2.249932mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="2.750058mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="3.24993mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="3.750056mm" pcbY="-5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="5.700014mm" pcbY="-3.7502338mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="5.700014mm" pcbY="-3.2501078mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="5.700014mm" pcbY="-2.7502358mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="5.700014mm" pcbY="-2.2501098mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="5.700014mm" pcbY="-1.7502378mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="5.700014mm" pcbY="-1.2501118mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="5.700014mm" pcbY="-0.7502398mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="5.700014mm" pcbY="-0.2501138mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="5.700014mm" pcbY="0.2497582mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="5.700014mm" pcbY="0.7498842mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="5.700014mm" pcbY="1.2497562mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="5.700014mm" pcbY="1.7498822mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="5.700014mm" pcbY="2.2497542mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="5.700014mm" pcbY="2.7498802mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="5.700014mm" pcbY="3.2497522mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="5.700014mm" pcbY="3.7498782mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin33"]} pcbX="3.750056mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin34"]} pcbX="3.24993mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin35"]} pcbX="2.750058mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin36"]} pcbX="2.249932mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin37"]} pcbX="1.75006mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin38"]} pcbX="1.249934mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin39"]} pcbX="0.750062mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin40"]} pcbX="0.249936mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin41"]} pcbX="-0.249936mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin42"]} pcbX="-0.750062mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin43"]} pcbX="-1.249934mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin44"]} pcbX="-1.75006mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin45"]} pcbX="-2.249932mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin46"]} pcbX="-2.750058mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin47"]} pcbX="-3.24993mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin48"]} pcbX="-3.750056mm" pcbY="5.699887mm" width="0.2999994mm" height="1.499997mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin49"]} pcbX="-5.700014mm" pcbY="3.7498782mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin50"]} pcbX="-5.700014mm" pcbY="3.2497522mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin51"]} pcbX="-5.700014mm" pcbY="2.7498802mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin52"]} pcbX="-5.700014mm" pcbY="2.2497542mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin53"]} pcbX="-5.700014mm" pcbY="1.7498822mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin54"]} pcbX="-5.700014mm" pcbY="1.2497562mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin55"]} pcbX="-5.700014mm" pcbY="0.7498842mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin56"]} pcbX="-5.700014mm" pcbY="0.2497582mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin57"]} pcbX="-5.700014mm" pcbY="-0.2501138mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin58"]} pcbX="-5.700014mm" pcbY="-0.7502398mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin59"]} pcbX="-5.700014mm" pcbY="-1.2501118mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin60"]} pcbX="-5.700014mm" pcbY="-1.7502378mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin61"]} pcbX="-5.700014mm" pcbY="-2.2501098mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin62"]} pcbX="-5.700014mm" pcbY="-2.7502358mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin63"]} pcbX="-5.700014mm" pcbY="-3.2501078mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<smtpad portHints={["pin64"]} pcbX="-5.700014mm" pcbY="-3.7502338mm" width="1.499997mm" height="0.2999994mm" radius="0.1499997mm" shape="pill" />
<silkscreenpath route={[{"x":-4.999989999999997,"y":-4.119397400000011},{"x":-4.999964599999998,"y":-4.119397400000011},{"x":-4.131183000000021,"y":-4.9881790000000095}]} />
<silkscreenpath route={[{"x":4.999989999999968,"y":5.011800999999991},{"x":4.131208399999991,"y":5.011800999999991}]} />
<silkscreenpath route={[{"x":4.999989999999968,"y":5.011800999999991},{"x":4.999989999999968,"y":4.142993999999987}]} />
<silkscreenpath route={[{"x":-4.999989999999997,"y":4.142993999999987},{"x":-4.999989999999997,"y":5.011800999999991},{"x":-4.131183000000021,"y":5.011800999999991}]} />
<silkscreenpath route={[{"x":-4.131183000000021,"y":-4.9881790000000095},{"x":-4.999989999999997,"y":-4.9881790000000095},{"x":-4.999989999999997,"y":-4.119397400000011}]} />
<silkscreenpath route={[{"x":4.999989999999968,"y":-4.119397400000011},{"x":4.999989999999968,"y":-4.9881790000000095},{"x":4.131182999999993,"y":-4.9881790000000095}]} />
<silkscreenpath route={[{"x":-4.2500042000000064,"y":4.261815199999987},{"x":-4.2500042000000064,"y":-4.238193200000012},{"x":4.2500042000000064,"y":-4.238193200000012},{"x":4.2500042000000064,"y":4.261815199999987},{"x":-4.2500042000000064,"y":4.261815199999987}]} />
<silkscreenpath route={[{"x":-3.2994600000000105,"y":-3.013329000000013},{"x":-3.510394378607913,"y":-3.1025373594299523},{"x":-3.5969167117677614,"y":-3.314587658499434},{"x":-3.508602117039061,"y":-3.525897799829167},{"x":-3.2969200000000285,"y":-3.613317047119125},{"x":-3.0852378829609677,"y":-3.525897799829167},{"x":-2.996923288232267,"y":-3.314587658499434},{"x":-3.0834456213921158,"y":-3.1025373594299523},{"x":-3.294380000000018,"y":-3.013329000000013}]} />
<silkscreenpath route={[{"x":-4.361256200000014,"y":-5.47817040000001},{"x":-4.509997255997689,"y":-5.628812429703942},{"x":-4.359986200000009,"y":-5.778189824014746},{"x":-4.209975144002357,"y":-5.628812429703942},{"x":-4.3587162000000035,"y":-5.47817040000001}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="7.311011mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.549200000000013,"y":6.5610109999999935},{"x":6.549199999999985,"y":6.5610109999999935},{"x":6.549199999999985,"y":-6.689789000000005},{"x":-6.549200000000013,"y":-6.689789000000005},{"x":-6.549200000000013,"y":6.5610109999999935}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C521608.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C521608.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.011810999999994465, z: 0.000795 },
      }}
      {...props}
    />
  )
}