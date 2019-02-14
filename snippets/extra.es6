const user = {
  age: 18,
  younger(otherUser) {
    return otherUser.age < this.age;
  }
};

const users = [
  {age: 16},
  {age: 12},
  {age: 32}
];

const youngerUsers = users.filter(user.younger, user);
console.log(youngerUsers);
// [{age: 16},{age: 12}]
