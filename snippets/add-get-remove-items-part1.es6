/**
 * @type {string[]}
 */
const games = ['Minecraft', 'Fortnite', 'WoW'];
let arrayLength;

arrayLength = games.push('Fifa 19');
console.log(arrayLength);
// 4

console.log(games);
// ['Minecraft', 'Fortnite', 'WoW', 'Fifa 19']

const fifa19 = games.pop();
console.log(fifa19);
// 'Fifa 19'

console.log(games);
// ['Minecraft', 'Fortnite', 'WoW']

const minecraft = games.shift();
console.log(minecraft);
// 'Minecraft'

console.log(games);
// ['Fortnite', 'WoW']

arrayLength = games.unshift('StarCraft');
console.log(arrayLength);
// 3

console.log(games);
// ['StarCraft', 'Fortnite', 'WoW']
