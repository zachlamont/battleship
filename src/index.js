function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("mazda"));

//SHIP FACTORY

function ship(length) {
  let _hits = 0;
  let isSunk = false;

  function hit() {
    _hits++;
    if (_hits === length) {
      isSunk = true;
    }
  }

  return {
    length,
    get hits() {
      return _hits;
    },
    get isSunk() {
      return isSunk;
    },
    hit,
  };
}

//GAMEBOARD FACTORY

function gameboard() {
  const board = Array.from(Array(10), () =>
    Array(10)
      .fill()
      .map(() => ({
        isHit: false,
        ship: null,
      }))
  );

  const ships = [];

  function placeShip(ship, x, y, isVertical) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      throw new Error("Invalid coordinates");
    }

    if (isVertical) {
      if (y + ship.length > 10) {
        throw new Error("Ship placement out of bounds");
      }

      for (let i = 0; i < ship.length; i++) {
        if (board[y + i][x].ship !== null) {
          throw new Error("Ship placement overlap");
        }
      }

      for (let i = 0; i < ship.length; i++) {
        board[y + i][x] = { ship: ship, isHit: false };
      }
    } else {
      if (x + ship.length > 10) {
        throw new Error("Ship placement out of bounds");
      }

      for (let i = 0; i < ship.length; i++) {
        if (board[y][x + i].ship !== null) {
          throw new Error("Ship placement overlap");
        }
      }

      for (let i = 0; i < ship.length; i++) {
        board[y][x + i] = { ship: ship, isHit: false };
      }
    }

    ships.push(ship);
  }

  function receiveAttack(x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      throw new Error("Invalid coordinates");
    }

    const square = board[y][x];
    if (square.ship !== null && square.isHit == false) {
      square.isHit = true;
      square.ship.hit();
      return true;
    } else if (square && square.isHit == false) {
      square.isHit = true;
      return true;
    } else {
      return false;
    }
  }

  function areAllShipsSunk() {
    return ships.every((ship) => ship.isSunk);
  }

  return { board, placeShip, receiveAttack, areAllShipsSunk };
}

export { reverseString, ship, gameboard };

//MAIN GAME LOOP

const playerBoard = gameboard();
const computerBoard = gameboard();

function placeRandomShips(board) {
  const shipLengths = [5, 4, 3, 3, 2];

  for (let length of shipLengths) {
    let shipPlaced = false;

    while (!shipPlaced) {
      try {
        const isHorizontal = Math.random() >= 0.5;
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        board.placeShip(ship(length), row, col, isHorizontal);
        shipPlaced = true;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

placeRandomShips(playerBoard);
placeRandomShips(computerBoard);

const player = {
  attack(gameboard, x, y) {
    gameboard.receiveAttack(x, y);
  },
};

const computer = {
  hasHitShip: false,
  lastHit: null, // [x, y] coordinates of the last hit
  adjacentSquares: [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ], // adjacent squares to target

  attack(gameboard) {
    let attackCompleted = false;
    while (!attackCompleted) {
      let x, y;
      if (this.hasHitShip) {
        // target an adjacent square to the last hit
        const [lastHitX, lastHitY] = this.lastHit;
        const [offsetX, offsetY] = this.adjacentSquares.shift(); // remove and use the first adjacent square
        x = lastHitX + offsetX;
        y = lastHitY + offsetY;
      } else {
        // choose a random square
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
      const square = gameboard.board[y][x];
      console.log(square);
      if (square && !square.isHit) {
        if (square.ship) {
          // if hit a ship, mark as hit and set hasHitShip to true
          gameboard.receiveAttack(x, y);
          this.hasHitShip = true;
          this.lastHit = [x, y];
          this.adjacentSquares = [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1],
          ]; // reset the adjacent squares
        } else {
          // if miss, mark as miss and set hasHitShip to false
          gameboard.receiveAttack(x, y);
          this.hasHitShip = false;
        }
        attackCompleted = true;
      } else if (this.hasHitShip && this.adjacentSquares.length === 0) {
        // if no more adjacent squares to target, reset hasHitShip and adjacentSquares
        this.hasHitShip = false;
        this.adjacentSquares = [
          [-1, 0],
          [0, -1],
          [1, 0],
          [0, 1],
        ];
      }
    }
  },
};

let currentPlayer = player;

function switchTurns() {
  if (currentPlayer === player) {
    currentPlayer = computer;
  } else {
    currentPlayer = player;
  }
}

const playerBoardElement = document.getElementById("player-board");
const computerBoardElement = document.getElementById("computer-board");

function renderBoard(board, element) {
  // Clear the board before rendering
  element.innerHTML = "";

  for (let i = 0; i < board.board.length; i++) {
    for (let j = 0; j < board.board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      if (board.board[i][j].ship === null && board.board[i][j].isHit === true) {
        console.log("yo" + board.board[i][j].ship);
        console.log("is hit" + board.board[i][j].isHit);
        square.classList.add("miss");
        square.textContent = "miss";
      }
      if (board.board[i][j].ship !== null) {
        if (board.board[i][j].isHit === true) {
          square.classList.add("hit");
          square.textContent = "hit";
        } else {
          square.classList.add("ship");
          square.textContent = "ship";
        }
      }

      square.addEventListener("click", () => {
        if (currentPlayer === player && !board.board[i][j].isHit) {
          currentPlayer.attack(computerBoard, j, i);
          renderBoard(computerBoard, computerBoardElement);
          switchTurns();
          playGame();
        }
      });
      element.appendChild(square);
    }
  }
}

function playGame() {
  if (playerBoard.areAllShipsSunk()) {
    alert("Computer wins!");
    return;
  }

  if (computerBoard.areAllShipsSunk()) {
    alert("Player wins!");
    return;
  }

  if (currentPlayer === computer) {
    console.log(playerBoard.board);
    currentPlayer.attack(playerBoard);
    renderBoard(playerBoard, playerBoardElement);
    switchTurns();
    playGame();
  }
}

renderBoard(playerBoard, playerBoardElement);
renderBoard(computerBoard, computerBoardElement);
playGame();
