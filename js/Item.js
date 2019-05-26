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
    // - parameters: target (Creature)
    // - Restores hp of target by potency value. HP of target can't go past its max HP.
    // - Plays the item sound
  }
}

class Bomb extends Item {
  constructor(rarity) {
    super((rarity + 1) * 20, rarity, 'bomb');
    this.damage = (rarity + 1) * 30;
  }

  use(target) {
    // - parameters: target (Creature)
    // - damages hp of target by damage value. HP of target can't be lower than 0.
    // - Plays the item sound
  }
}

class Key extends Item {
  constructor() {
    super(100, 3, 'key');
    this.damage = (rarity + 1) * 30;
  }

  use(target) {
    // - parameters: target (Dungeon)
    // - opens the dungeon and plays the item sound if the dungeon does not have the princess
  }
}
