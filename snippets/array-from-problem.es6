/**
 * @type {*[]}
 */
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

/**
 * @type {*[]}
 */
const gamesRef = Array.from(games);
gamesRef[0].published = 2019;

console.log(gamesRef[0]);
// {name: "Minecraft", published: 2019}

console.log(games[0]);
// {name: "Minecraft", published: 2019}
