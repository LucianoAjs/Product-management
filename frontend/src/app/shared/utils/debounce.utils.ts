const timers: any = {};
export function debounce(func: any, wait: number, id: string) {
  clearTimeout(timers[id]);
  timers[id] = setTimeout(func, wait);
}
