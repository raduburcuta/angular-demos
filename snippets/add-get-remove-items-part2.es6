/**
 * @type {string[]}
 */
let games;
let result;

games = ['Minecraft', 'Fortnite', 'WoW'];

delete games[1];

console.log(games[1]);
// undefined
console.log(games.length);
// 3
console.log(games);
// ['Minecraft', empty, 'WoW']

games = ['Minecraft', 'Fortnite', 'WoW'];
result = games.splice(1, 1);
console.log(result);
// ['Fortnite']

console.log(games);
// ['Minecraft', 'WoW']

games = ['Minecraft', 'Fortnite', 'WoW'];
result = games.splice(1, 1, 'StarCraft');
console.log(result);
// ['Fortnite']

console.log(games);
// ['Minecraft', 'StarCraft', 'WoW']

games = ['Minecraft', 'Fortnite', 'WoW'];
result = games.splice(-1, 0, 'StarCraft');
console.log(result);
// []

console.log(games);
// ['Minecraft', 'Fortnite', 'StarCraft', 'WoW']
