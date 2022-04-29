import type {
  SkiaValue,
  SkiaReadonlyValue,
  Vector,
} from "@shopify/react-native-skia";
import {
  runDecay,
  add,
  clamp,
  dist,
  vec,
  useValue,
  useTouchHandler,
} from "@shopify/react-native-skia";

import { HEIGHT, PADDING, WIDTH } from "../Model";

const translateY = HEIGHT + PADDING;

export const useGraphTouchHandler = (
  x: SkiaValue<number>,
  c: SkiaReadonlyValue<Vector>
) => {
  const gestureActive = useValue(false);
  const offsetX = useValue(0);
  const onTouch = useTouchHandler({
    onStart: (pos) => {
      const normalizedCenter = add(c.current, vec(0, translateY));
      if (dist(normalizedCenter, pos) < 50) {
        gestureActive.current = true;
        offsetX.current = x.current - pos.x;
      }
    },
    onActive: (pos) => {
      if (gestureActive.current) {
        x.current = clamp(offsetX.current + pos.x, 0, WIDTH);
      }
    },
    onEnd: ({ velocityX }) => {
      if (gestureActive.current) {
        gestureActive.current = false;
        runDecay(x, { velocity: velocityX, clamp: [0, WIDTH] });
      }
    },
  });
  return onTouch;
};
