const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i+= 1) {
  string += friends[i];

  if (i < friends.length -1) {
    string += ",";
  }
}

console.log(string);

const result = friends.join(",");
console.log(result);

const card = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

