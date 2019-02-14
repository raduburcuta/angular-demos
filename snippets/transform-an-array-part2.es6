const arr = [1, 2, 3, 4, 5];

console.log(arr.join('+'));
// '1+2+3+4+5'

const sum  = arr.reduce((previousValue, item, index, arr) => previousValue + item, 0);
console.log(sum);
// 15
