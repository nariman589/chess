import "./index.css";

export default function WhitePieces() {
  const pawns = [];
  for (let i = 1; i <= 8; i++) {
    pawns.push({
      x: 64 * i,
      y: 64,
    });
  }
  return (
    <>
      {pawns.map((pawn) => {
        return (
          <div
            className="pawn"
            style={{
              position: "absolute",
              top: `${pawn.y}px`,
              left: `${pawn.x}px`,
            }}
          ></div>
        );
      })}
    </>
  );
}
