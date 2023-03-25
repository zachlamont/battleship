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
  const board = Array.from(Array(10), () => Array(10).fill(null));
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
        if (board[y + i][x] !== null) {
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
        if (board[y][x + i] !== null) {
          throw new Error("Ship placement overlap");
        }
      }

      for (let i = 0; i < ship.length; i++) {
        board[y][x + i] = { ship: ship, isHit: false };
      }
    }

    ships.push(ship);
  }
  /*
  function receiveAttack(x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      throw new Error("Invalid coordinates");
    }

    const square = board[y][x];
    if (square === null) {
      return false;
    } else {
      square.isHit = true;
      square.ship.hit();
      return true;
    }
  }
*/
  function receiveAttack(x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      throw new Error("Invalid coordinates");
    }

    const square = board[y][x];
    if (square === null) {
      // Mark square as hit even if there is no ship
      board[y][x] = { isHit: true };
      return true;
    } else {
      square.isHit = true;
      square.ship.hit();
      return true;
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

playerBoard.placeShip(ship(5), 0, 0, true);
playerBoard.placeShip(ship(4), 1, 0, true);
playerBoard.placeShip(ship(3), 2, 0, true);
playerBoard.placeShip(ship(3), 3, 0, true);
playerBoard.placeShip(ship(2), 4, 0, true);

computerBoard.placeShip(ship(5), 5, 0, true);
computerBoard.placeShip(ship(4), 6, 0, true);
computerBoard.placeShip(ship(3), 7, 0, true);
computerBoard.placeShip(ship(3), 8, 0, true);
computerBoard.placeShip(ship(2), 9, 0, true);

const player = {
  attack(gameboard, x, y) {
    gameboard.receiveAttack(x, y);
  },
};

const computer = {
  attack(gameboard) {
    let attackCompleted = false;
    while (!attackCompleted) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      if (
        gameboard.board[y] &&
        gameboard.board[y][x] &&
        !gameboard.board[y][x].isHit
      ) {
        console.log(gameboard.board[y][x]);
        gameboard.receiveAttack(x, y);
        attackCompleted = true;
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
      if (board.board[i][j] !== null) {
        if (board.board[i][j].isHit) {
          if (board.board[i][j].ship) {
            square.classList.add("hit");
            square.textContent = "hit";
          } else {
            square.classList.add("miss");
            square.textContent = "miss";
          }
        } else {
          square.classList.add("ship");
          square.textContent = "ship";
        }
      }

      square.addEventListener("click", () => {
        if (currentPlayer === player) {
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
