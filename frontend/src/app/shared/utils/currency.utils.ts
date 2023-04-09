export function currency(value: string) {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
