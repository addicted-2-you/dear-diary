export function getNumbersSequence(number) {
  return Array.from(new Array(number)).map((_, index) => index + 1);
}
