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

games.forEach((item) => {
  console.log(item);
  // {name: 'Minecraft', published: 2009}
  // {name: 'Fortnite', published: 2017}
  // {name: 'WoW', published: 2004}
});

delete games[1];

games.forEach((item) => {
  console.log(item);
  // {name: 'Minecraft', published: 2009}
  // {name: 'WoW', published: 2004}
});
