export function timeout(second: number) {
  return {
    timeout: second * 1000,
  };
}
