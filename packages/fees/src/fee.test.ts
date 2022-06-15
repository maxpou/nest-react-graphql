import { applyFeesToPrice, getFeesPercentage } from './fees';

it('getFeesPercentage - return 5% when price > 100', () => {
  expect(getFeesPercentage(800)).toBe(5);
});

it('getFeesPercentage - return 10% when price <= 100', () => {
  expect(getFeesPercentage(12)).toBe(10);
});

it('applyFeesToPrice - return price with 5% when price > 100', () => {
  expect(applyFeesToPrice(800)).toBe(840);
});

it('getFeesPercentage - return price with 10% when price <= 100', () => {
  expect(applyFeesToPrice(12)).toBe(13.2);
});
