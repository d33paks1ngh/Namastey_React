import { sum } from "../sum";
test("sum function should calculate the sum of two numbers", () => {
  // here we are testing the sum function
  const result = sum(3, 4);
  // Assertion
  expect(result).toBe(7);
});
