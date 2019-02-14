const games = ['Minecraft', 'Fortnite', 'Fifa 19', 'WoW'];
let result;

result = games.indexOf('Fortnite');
console.log(result);
// 1

result = games.indexOf('StarCraft');
console.log(result);
// -1

result = games.lastIndexOf('Fortnite');
console.log(result);
// 1

result = games.includes('Fortnite');
console.log(result);
// true

result = games.includes('StarCraft');
console.log(result);
// false

const arr = [NaN];

console.log(arr.indexOf(NaN));
// -1
console.log(arr.includes(NaN));
// true
