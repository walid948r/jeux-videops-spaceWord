const {
  getRandomInt,
  rectIntersect,
  circleIntersect,
  timeToString
} = require("../game-utils");

test("getRandomInt(-42, 42) should be less than 43", () => {
  expect(getRandomInt(-42, 42)).toBeLessThan(43);
});

test("getRandomInt(42, 42) should return 42", () => {
  expect(getRandomInt(42, 42)).toBe(42);
});

test("rectIntersect should return false", () => {
  expect(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)).toBe(false);
});

test("rectIntersect should return true", () => {
  expect(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true);
});

test("circleIntersect should return false", () => {
  expect(circleIntersect(3, 2, 1, 6, 1, 1.5)).toBe(false);
});

test("circleIntersect should return true", () => {
  expect(circleIntersect(3, 2, 1, 3, -2, 4)).toBe(true);
});

test('timeToString(123456789) should return "17:36:78"', () => {
  expect(timeToString(123456789)).toBe("17:36:78");
});

test('timeToString("toto") should return "NaN:NaN:NaN"', () => {
  expect(timeToString("toto")).toBe("NaN:NaN:NaN");
});

test("getRandomInt returns value >= min", () => {
  expect(getRandomInt(5, 10)).toBeGreaterThanOrEqual(5);
});

test("getRandomInt returns value <= max", () => {
  expect(getRandomInt(5, 10)).toBeLessThanOrEqual(10);
});

test("rectIntersect same rectangle returns true", () => {
  expect(rectIntersect(0, 0, 10, 10, 0, 0, 10, 10)).toBe(true);
});

test("circleIntersect same position returns true", () => {
  expect(circleIntersect(0, 0, 5, 0, 0, 5)).toBe(true);
});

test("timeToString(0) returns 00:00:00", () => {
  expect(timeToString(0)).toBe("00:00:00");
});