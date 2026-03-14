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

const cardToRemove = card.indexOf("Карточка-3");
card.splice(cardToRemove, 1);
console.log(card);

const cardToInsert = "Карточка-6"
card.splice(4, 0, cardToInsert)
console.log(card);

const cardToUpdate = card.indexOf("Карточка-4")
card.splice(cardToUpdate, 1, "Нова карточка")
console.log(card);
