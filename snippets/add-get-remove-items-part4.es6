let games = ['Minecraft', 'WoW'];
let result;

result = games.concat(['Fortnite', 'Fifa 19']);
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 'Fifa 19']
console.log(games);
// ['Minecraft', 'WoW']

result = games.concat(['Fortnite'], ['Fifa 19']);
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 'Fifa 19']

result = games.concat(['Fortnite'], 'Fifa 19');
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 'Fifa 19']

games = ['Minecraft', 'WoW'];
const fortnite = {
  0: 'Fortnite',
  1: 2017,
  length: 2,
};
result = games.concat(fortnite);
console.log(result);
// ['Minecraft', 'WoW', {0: 'Fortnite',1: 2017}]

games = ['Minecraft', 'WoW'];
const fifa = {
  0: 'Fifa 19',
  1: 2018,
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

result = games.concat(fifa);
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 2017}]
