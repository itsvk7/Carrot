export function randomNumber(min, max) {
  const random = Math.round(Math.random() * (max - min - 1)) + 1;

  return random;
}
