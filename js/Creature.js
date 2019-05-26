// //Create the Creature and Monster class

class Creature extends Entity {
  constructor(name, img, level, items, gold) {
    super(img);
    this.name = name;
    this.level = level;
    this.items = items;
    this.gold = gold;
    this.hp = 100;
    this.strength = this.level * 10;
    this.attackSpeed = 3000 / this.level;
  }
}

// getMaxHp() {
//   return this.level * 100;
// }

// hit(val) {
//   return Math.max(this.hp - val, 0);
// }

// attack(entity) {
//   setInterval(() => hit(entity, this.strength), this.attackSpeed);
// }
// }

class Monster extends Creature {
  constructor(name, level, items, gold) {
    super(name, 'monsters/WizzrobeFire.gif', level, items, gold);
    this.strength = this.level * 10;
    this.attackSpeed = 3000 / this.level;
  }

  attack(entity) {
    setInterval(() => hit(entity, this.strength), this.attackSpeed);
  }
}
