/**
 * Divides two numbers and returns the result.
 */
export function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}
