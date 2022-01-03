import { Canvas, Fill } from "@shopify/react-native-skia";
import React from "react";

import { COLS, ROWS, Glyph, GLYPH } from "./Glyph";
import { useGlyphs } from "./Symbols";

export const Matrix = () => {
  const glyphs = useGlyphs();
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="black" />
      {new Array(COLS).fill(0).map((_i, i) => {
        return new Array(ROWS)
          .fill(0)
          .map((_j, j) => (
            <Glyph
              glyphs={glyphs}
              key={`${i}-${j}`}
              x={i * GLYPH.width}
              y={j * GLYPH.height}
              state={{ color: "rgb(0, 255, 70)", opacity: 1 }}
            />
          ));
      })}
    </Canvas>
  );
};