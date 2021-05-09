const {
  recalculateSubtotal,
  incrementQty,
  decrementQty,
} = require('../src/helpers');

test('increment quantity should plus 1', () => {
  expect(incrementQty(2)).toBe(3);
});

test('decrement quantity should minus 1', () => {
  expect(decrementQty(3)).toBe(2);
});

test('fn incrementQty "2" increment 3', () => {
  expect(incrementQty('2')).toBe(3);
});

test('fn decrementQty "2" decrement 1', () => {
  expect(decrementQty('2')).toBe(1);
});

test('decrement from 1 is 1', () => {
  expect(decrementQty(1)).toBe(1);
});

test('recalculate price 25000', () => {
  expect(recalculateSubtotal(25000, 3)).toBe(75000);
});

test('recalculate price with discount', () => {
  expect(recalculateSubtotal(25000, 4, 10)).toBe(90000);
})
