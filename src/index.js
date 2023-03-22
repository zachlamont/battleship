function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("mazda"));

//SHIP FACTORY

function ship(length) {
  let hits = 0;
  let isSunk = false;

  function hit() {
    hits++;
    if (hits === length) {
      isSunk = true;
    }
  }

  return {
    length,
    get hits() {
      return hits;
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

  function areAllShipsSunk() {
    return ships.every((ship) => ship.isSunk);
  }

  return { board, placeShip, receiveAttack, areAllShipsSunk };
}

export { reverseString, ship, gameboard };
