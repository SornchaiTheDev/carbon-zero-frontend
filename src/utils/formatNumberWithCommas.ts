export function formatNumberWithCommas(numberStr: string) {
  const parts = numberStr.split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] || "0";
  return `${integerPart}.${decimalPart}`;
}

export function formatInputNumberWithCommas(numberStr: string) {
  return numberStr
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/(\.\d\d)\d+$/, "$1");
}