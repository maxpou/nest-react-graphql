export function getFeesPercentage(price: number): number {
  if (price > 100) {
    return 5;
  }
  return 10;
}

export function applyFeesToPrice(price: number): number {
  const feePercentage = getFeesPercentage(price);
  return price + (price * feePercentage) / 100;
}
