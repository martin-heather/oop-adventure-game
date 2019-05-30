//Create the Item, Potion, Bomb and Key class

class Item extends Entity {
  constructor(value, rarity, type) {
    super(`items/${type}.png`);
    this.name = `${ITEM_RARITIES[rarity]} ${type}`;
    this.value = value;
    this.rarity = rarity;
    this.sound; //]Sound file path
  }
  setImg(src) {
    this.element.src = 'imgs/' + src;
  }
}

class Potion extends Item {
  constructor(rarity) {
    super((rarity + 1) * 10, rarity, 'potion');
    this.potency = (rarity + 1) * 10;
  }

  use(target) {
    target.hp += this.potency;
    // - Plays the item sound
  }
}

class Bomb extends Item {
  constructor(rarity) {
    super((rarity + 1) * 20, rarity, 'bomb');
    this.damage = (rarity + 1) * 30;
  }

  use(target) {
    console.log(this);
    target.hp = Math.max(target.hp - this.damage, 0);
    // - Plays the item sound
  }
}

class Key extends Item {
  constructor() {
    super(100, 3, 'key');
  }

  use(target) {
    // - opens the dungeon and plays the item sound if the dungeon does not have the princess
    target.isOpen = true;
    target.setImg('dungeon/open.png');
  }
}
