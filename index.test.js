const mockFunction1 = jest.fn(() => {
  return 'hello';
});

const mockFunction2 = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('Mock Function 1', () => {
  expect(mockFunction1()).toBe('hello');
  mockFunction1.mockReturnValueOnce('goodbye');
  expect(mockFunction1()).toBe('goodbye');
  expect(mockFunction1()).toBe('hello');
  expect(mockFunction1).toHaveBeenCalledTimes(3);
})

test('Mock Function 2', () => {
  const mockCallback = jest.fn(x => 42 + x);
  mockFunction2([0, 1], mockCallback)
  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
})