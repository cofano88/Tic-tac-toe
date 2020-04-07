(() => {
  const container = document.getElementById("root");
  let moveNumber = 0;

  // -----------------------------------------------------------------

  const createField = () => {
    const field = document.createElement("div");
    field.className = "field";
    container.append(field);

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      field.append(cell);
    }
  };

  // -----------------------------------------------------------------------

  const getSimbol = (move) => {
    if (move % 2 === 0) {
      const cross = document.createElement("div");
      cross.className = "cross";
      return cross;
    }
    const circle = document.createElement("div");
    circle.className = "circle";
    return circle;
  };

  //   ----------------------------------------------------------------------------

  const makeMove = () => {
    const cell = document.getElementsByClassName("cell");

    for (let i = 0; i < cell.length; i++) {
      cell[i].addEventListener("click", function () {
        if (!this.innerHTML) {
          this.append(getSimbol(moveNumber));
          moveNumber = ++moveNumber;
          isWinner();
        }
      });
    }
  };

  //   ----------------------------------------------------------------------------------

  function isWinner() {
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < 3; i++) {
      if (
        cells[1 + i].firstChild.className === "cross" &&
        cells[4 + i].firstChild.className === "cross" &&
        cells[7 + i].firstChild.className === "cross"
      ) {
        alert(`Cross is winner,in ${moveNumber} moves! `);
      }
      if (
        cells[1 + i].firstChild.className === "circle" &&
        cells[4 + i].firstChild.className === "circle" &&
        cells[7 + i].firstChild.className === "circle"
      ) {
        alert(`Circle is winner,in ${moveNumber} moves! `);
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        cells[1 + i * 3].firstChild.className === "cross" &&
        cells[2 + i * 3].firstChild.className === "cross" &&
        cells[3 + i * 3].firstChild.className === "cross"
      ) {
        alert(`Cross is winner,in ${moveNumber} moves! `);
      }
      if (
        cells[1 + i * 3].firstChild.className === "circle" &&
        cells[1 + i * 3].firstChild.className === "circle" &&
        cells[1 + i * 3].firstChild.className === "circle"
      ) {
        alert(`Circle is winner,in ${moveNumber} moves! `);
      }
    }

    if (
      cells[1].firstChild.className === "cross" &&
      cells[5].firstChild.className === "cross" &&
      cells[9].firstChild.className === "cross"
    ) {
      alert(`Cross is winner,in ${moveNumber} moves! `);
    }
    if (
      cells[1].firstChild.className === "circle" &&
      cells[5].firstChild.className === "circle" &&
      cells[9].firstChild.className === "circle"
    ) {
      alert(`Circle is winner,in ${moveNumber} moves! `);
    }

    if (
      cells[3].firstChild.className === "cross" &&
      cells[5].firstChild.className === "cross" &&
      cells[7].firstChild.className === "cross"
    ) {
      alert(`Cross is winner,in ${moveNumber} moves! `);
    }
    if (
      cells[3].firstChild.className === "circle" &&
      cells[5].firstChild.className === "circle" &&
      cells[7].firstChild.className === "circle"
    ) {
      alert(`Circle is winner,in ${moveNumber} moves! `);
    }
  }

  createField();
  makeMove();
})();
