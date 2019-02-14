/**
 * @type {string[]}
 */
const games = ['Minecraft', 'Fortnite', 'WoW'];

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
const games = [
  {
    name: 'Minecraft',
    published: 2009,
    expansions: [],
    minimumRequirements: {},
  },
  {
    name: 'Fortnite',
    published: 2017,
    expansions: [],
    minimumRequirements: {},
  },
  {
    name: 'WoW',
    published: 2004,
    expansions: ['The Burning Crusade', 'Wrath of the Lich King'],
    minimumRequirements: {
      os: 'Windows XP - Windows 10',
      cpu: 'AMD Phenom 2 X3',
      ram: '2 GB',
    },
  },
];

/**
 * @type {{name, published, expansions, minimumRequirements}}
 */
const wow = games[2];

/**
 * @type {string[]}
 */
const foo = Array.from('bar');
// foo = ['b', 'a', 'r'];

/**
 * @type {number[]}
 */
const double = Array.from([10, 20, 30], number => number * 2);
// double = [20, 40, 60];
