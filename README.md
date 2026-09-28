# 24 V ceiling-fan BLDC controller

A tscircuit bench prototype for an external isolated 24 V supply, a three-phase BLDC motor, IR commands, and USB-C configuration. The board is 160 × 114 mm with four copper layers. All PCB nets are routed, and the routed build passes the Gerber short check. This is **not a fabrication-ready design**: motor-current copper sizing, blind/buried-via fabrication, manufacturing review, and hardware testing remain open. Do not order or energize it as a finished controller.

## Project files

- `index.circuit.tsx`: the tscircuit board definition.
- `src/board/`: board placement and electrical part mappings.
- `imports/`: original JLCPCB component imports used by the board.

## Run

```sh
bun install --frozen-lockfile
bun run typecheck
bunx tsci check netlist
bunx tsci check schematic-placement
bunx tsci check placement
bun run build
bunx tsci check shorts dist/index/circuit.json
```

Use `bun run dev` for the interactive circuit viewer and `bun run snapshot` for current schematic and PCB images. Generated files are ignored by Git.

Netlist and PCB placement checks pass with zero errors or warnings. The schematic placement checker exits successfully but suggests rotating the two terminal blocks and TVS diode; review their symbols before release.

The single-pass autorouter build completes with 388 PCB traces, 402 vias, and zero reported circuit errors. `tsci check shorts` reports no Gerber shorts. The routing snapshot in `dist/autorouter-debug-blindvias/phase-0-routed.png` is an inspection aid; generated files are ignored by Git.

The board permits blind and buried vias so top-to-inner1 ground drops do not extend into inner2 signal copper. Confirm the 0.2 mm via drills, 0.4 mm pads, and required layer spans with a fabricator. The 0.15 mm nominal routing width also reaches the motor and supply nets; these high-current paths require wider copper and Kelvin-sense review. Inspect all layers, rerun DRC and Gerber checks after any change, and review stencil, drill, assembly, and electrical limits against manufacturer data. The imported terminal blocks replace the former Phoenix parts and require fit and current-rating review. The project does not contain motor-control firmware.
