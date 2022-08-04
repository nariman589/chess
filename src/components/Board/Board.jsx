import Pieces from "../pieces/Pieces";
import "./index.css";

export default function Board() {
  const board = [];
  let flag = true;
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if (j === 1) flag = !flag;
      if (flag) board.push(<div className="black ceil"></div>);
      else board.push(<div className="white ceil"></div>);
      flag = !flag;
    }

    // board.push(<div className="black ceil"></div>)
    // board.push(<div className="white ceil"></div>)
  }
  return (
    <div className="board">
      {board.map((ceil) => {
        return ceil;
      })}
      <Pieces />
    </div>
  );
}
