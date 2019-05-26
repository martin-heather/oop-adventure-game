//The Entity, Wall, Grass, Gold, Dungeon and Trader classes

class Entity {
  constructor(src) {
    this.element = document.createElement('img'); //this.img
    this.setImg(src);
  }
  setImg(src) {
    this.element.src = 'imgs/' + src;
  }
}

class Wall extends Entity {
  constructor() {
    super('environment/wall.png');
  }
}

class Grass extends Entity {
  constructor(src) {
    super(`environment/grass${getRandom(1, 3)}.png`);
  }
}

class Gold extends Entity {
  constructor(value) {
    super('gold.gif');
  }
}

class Dungeon extends Entity {
  constructor(isOpen, hasPuppy, gold, items) {
    super('dungeon/open.png');
    this.isOpen = isOpen;
    this.hasPuppy = hasPuppy;
    this.gold = gold;
    this.items = items;
    if (this.isOpen) {
      this.setImg('dungeon/open.png');
    } else {
      this.setImg('dungeon/closed.png');
    }
  }

  isOpen() {
    this.isOpen = true;
    this.setImg('dungeon/open.png');
  }
}

class Trader extends Entity {
  constructor(items) {
    super('trader.gif');
    this.items = items;
  }
}
