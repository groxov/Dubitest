const moveFirstToEnd = require('./first.js');

// Тесты
describe('moveFirstToEnd', () => {
  test('перемещает первый элемент массива в конец', () => {
    expect(moveFirstToEnd([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
  });

  test('работает с массивом из одного элемента', () => {
    expect(moveFirstToEnd([1])).toEqual([1]);
  });

  test('возвращает пустой массив, если входной массив пуст', () => {
    expect(moveFirstToEnd([])).toEqual([]);
  });

  test('работает с массивом строк', () => {
    expect(moveFirstToEnd(['a', 'b', 'c'])).toEqual(['b', 'c', 'a']);
  });
});