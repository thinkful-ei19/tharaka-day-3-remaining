//  # 7 Factory functions with LOTR

const createCharacter = function (name, race, origin, weapon, attack, defense) {
  return {
    nickname: name,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapons: weapon,
    describe: function () {
      console.log(`${this.nickname} is a ${this.race} from ${this.origin} who uses ${this.weapons}.`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = this.defense - character.attack;
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);   
    }
  };
    
};

let charArr = [];

charArr.push(createCharacter('gandalf','Wizard','Middle Earth', 'wizard staff', 10, 6));
charArr.push(createCharacter('bilbo','Hobbit','The Shire', 'Ring', 2, 1));
charArr.push(createCharacter('frodo','Hobbit','The Shire', 'String and Barrow Blade',  3, 2));
charArr.push(createCharacter('aragorn','Man','Dunnedain', 'Anduril',  6, 8));
charArr.push(createCharacter('legolas','Elf','Woodland Realm', 'Bow and Arrow', 8, 5));

charArr.push(createCharacter('Arwen Undomie', 'Half-Elf', 'Rivendell', 'Hadhafang', 10, 10));


let found = charArr.find((element) => {
  if(element.nickname === 'aragorn') {
    return element.describe();
  }
});

let hobbits = charArr.filter(char => {
  if(char.race === 'Hobbit') {
    return char;
  }
});

let highAttack = charArr.filter(char => {
  if(char.attack > 5) {
    return char;
  }
});

console.log(highAttack)
