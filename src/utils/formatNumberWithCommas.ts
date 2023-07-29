export function formatNumberWithCommas(numberStr: string) {
  return numberStr
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/(\.\d\d)\d+$/, "$1");
}
