function moveFirstToEnd(arr) {
    if (arr.length === 0) return arr; // Проверяем, что массив не пуст
    arr.push(arr.shift());
    return arr;
  }
module.exports = moveFirstToEnd;