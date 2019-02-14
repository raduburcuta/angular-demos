const games = [
  {
    name: 'Minecraft',
    published: 2009,
  },
  {
    name: 'Fortnite',
    published: 2017,
  },
  {
    name: 'WoW',
    published: 2004,
  },
];
let result;

result = games.find((game, index, array) => game.name === 'Fortnite');
console.log(result);
// {name: 'Fortnite', published: 2017}

result = games.find((game) => game.name === 'StarCraft');
console.log(result);
// undefined

result = games.findIndex((game, index, array) => game.name === 'Fortnite');
console.log(result);
// 1

result = games.findIndex((game) => game.name === 'StarCraft');
console.log(result);
// -1

result = games.filter((game, index, array) => game.published < 2010);
console.log(result);
// [{name: 'Minecraft', published: 2009}, {name: 'WoW', published: 2004}]

result = games.filter(game => game.published > 2019);
console.log(result);
// []
