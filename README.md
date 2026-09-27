# 24 V ceiling-fan BLDC controller

A tscircuit bench prototype for an external isolated 24 V supply, a three-phase BLDC motor, IR commands, and USB-C configuration. The board is 160 × 114 mm with four copper layers. This is **not a fabrication-ready design**: complete routing, copper checks, manufacturing review and hardware testing are pending. Do not order or energize it as a finished controller.

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
bunx tsci check shorts
```

Use `bun run dev` for the interactive circuit viewer and `bun run snapshot` for current schematic and PCB images. Generated files are ignored by Git.

Netlist and PCB placement checks pass with zero errors or warnings. An unrouted preview build also passes. The schematic placement checker exits successfully but suggests rotating the two terminal blocks and TVS diode; review their symbols before release. Full routing has not completed: the native autorouter timed out after 180 seconds, so the shorts check has not been run on a routed board. The previous explicit copper paths were removed because they did not match the refreshed imported footprints. Before fabrication, redesign wide power and Kelvin routes, inspect every route and copper layer, verify through vias, run DRC and Gerber shorts checks, and review stencil, drill, assembly and electrical limits against manufacturer data. The imported terminal blocks replace the former Phoenix parts and require fit and current-rating review. The project does not contain motor-control firmware.
