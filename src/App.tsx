export default function App() {
  function generateShapes(
    kind: "rectangle" | "circle",
    backgroundColor: string
  ) {
    if (kind === "rectangle") {
      console.log(kind);
    }
    if (kind === "circle") {
      console.log(kind);
    }

    const shapes = [];
    for (let i = 0; i < 100; i++) {
      shapes.push(
        <div
          style={{
            backgroundColor,
            height: "30px",
            width: "30px",
          }}
        />
      );
    }
    return shapes;
  }
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        flexWrap: "wrap",
      }}
    >
      {generateShapes("rectangle", "brown").map((shape, index) => shape)}
    </div>
  );
}
