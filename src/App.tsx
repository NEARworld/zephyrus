import { useEffect, useRef } from "react";

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

function generateShape(
  ctx: CanvasRenderingContext2D,
  kind: "rectangle" | "circle",
  width: number,
  height: number,
  index: number
) {
  ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  // 10 11 12 13 14 15 ... 20
  // 0 11 24 39
  width = width + index;
  const x = width * index;
  const y = 10;
  if (kind === "rectangle")
    ctx.fillRect(400 - x - 10, y, width, (height + index) * 2);
  if (kind === "circle") ctx.arc(10, 10, width / 2, 0, 2 * Math.PI);
}
export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const shapes = Array.from({ length: 10 }).forEach((v, i) =>
      generateShape(ctx, "rectangle", 10, 10, i)
    );
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      style={{
        border: "1px black solid",
      }}
    />
  );
}
