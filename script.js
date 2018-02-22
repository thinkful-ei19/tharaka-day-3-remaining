//  # 7 Factory functions with LOTR

const createCharacter = function (name, race, origin, attack, defense) {
  return {
    name: name,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = this.defense - character.attack;
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);   
    }
  };
    
};

const test = createCharacter('gandalf','wizard','god',10,6);
const test2 = createCharacter('gandalf2', 'wizard', 'god', 15, 1);

test.evaluateFight(test2);