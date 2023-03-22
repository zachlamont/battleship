import { reverseString, ship, gameboard } from "./index.js";

test("reverseString", () => {
  expect(reverseString("dog")).toBe("god");
});

//SHIP TESTS

describe("ship", () => {
  test("should create a ship object with the correct length", () => {
    const testShip = ship(5);
    expect(testShip.length).toBe(5);
  });

  test("should create a ship object with a hits property of 0", () => {
    const testShip = ship(5);
    expect(testShip.hits).toBe(0);
  });

  test("should create a ship object with an isSunk property of false", () => {
    const testShip = ship(5);
    expect(testShip.isSunk).toBe(false);
  });

  test("should increase the hits property when the hit method is called", () => {
    const testShip = ship(5);
    testShip.hit();
    expect(testShip.hits).toBe(1);
  });

  test("should set the isSunk property to true when the hit method is called the same number of times as the ship length", () => {
    const testShip = ship(2);
    testShip.hit();
    expect(testShip.isSunk).toBe(false);
    testShip.hit();
    expect(testShip.isSunk).toBe(true);
  });
});

//GAMEBOARD -- SHIP PLACEMENT TESTS

describe("gameboard", () => {
  test("should create a gameboard object with an empty board array", () => {
    const testGameboard = gameboard();
    expect(testGameboard.board).toEqual(expect.any(Array));
    expect(testGameboard.board.length).toBe(10);
    expect(testGameboard.board[0].length).toBe(10);
  });
});

test("should place a ship horizontally on the board", () => {
  const testGameboard = gameboard();
  const testShip = ship(3);
  testGameboard.placeShip(testShip, 0, 0, false);
  expect(testGameboard.board[0][0].ship).toEqual(testShip);
  expect(testGameboard.board[0][1].ship).toEqual(testShip);
  expect(testGameboard.board[0][2].ship).toEqual(testShip);
});

test("should place a ship vertically on the board", () => {
  const testGameboard = gameboard();
  const testShip = ship(3);
  testGameboard.placeShip(testShip, 0, 0, true);
  expect(testGameboard.board[0][0].ship).toEqual(testShip);
  expect(testGameboard.board[1][0].ship).toEqual(testShip);
  expect(testGameboard.board[2][0].ship).toEqual(testShip);
});

test("should throw an error when placing a ship out of bounds horizontally", () => {
  const testGameboard = gameboard();
  const testShip = ship(5);
  expect(() => testGameboard.placeShip(testShip, 8, 9, false)).toThrow(
    "Ship placement out of bounds"
  );
});

test("should throw an error when placing a ship out of bounds vertically", () => {
  const testGameboard = gameboard();
  const testShip = ship(5);
  expect(() => testGameboard.placeShip(testShip, 9, 8, true)).toThrow(
    "Ship placement out of bounds"
  );
});

test("should throw an error when placing a ship overlapping horizontally", () => {
  const testGameboard = gameboard();
  const testShip1 = ship(3);
  const testShip2 = ship(4);
  testGameboard.placeShip(testShip1, 0, 0, false);
  expect(() => testGameboard.placeShip(testShip2, 0, 0, false)).toThrow(
    "Ship placement overlap"
  );
});

test("should throw an error when placing a ship overlapping vertically", () => {
  const testGameboard = gameboard();
  const testShip1 = ship(3);
  const testShip2 = ship(4);
  testGameboard.placeShip(testShip1, 0, 0, true);
  expect(() => testGameboard.placeShip(testShip2, 0, 0, true)).toThrow(
    "Ship placement overlap"
  );
});

test("should receive an attack and mark the corresponding cell as hit", () => {
  const testGameboard = gameboard();
  const testShip = ship(3);
  testGameboard.placeShip(testShip, 0, 0, false);
  testGameboard.receiveAttack(0, 0);
  expect(testGameboard.board[0][0].isHit).toBe(true);
});
