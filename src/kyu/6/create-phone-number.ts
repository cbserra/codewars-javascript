export function createPhoneNumber(numbers: number[]): string {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{3})/, "($1) $2-$3");
}
