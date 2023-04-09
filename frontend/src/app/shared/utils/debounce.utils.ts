export function debounce(
  func: any,
  wait: number,
  id: string,
  timers: any = {},
) {
  clearTimeout(timers[id]);
  timers[id] = setTimeout(func, wait);
}
