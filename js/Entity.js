//the Entity, Wall, Grass, Gold, Dungeon and Tradesman classes

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

// class Dungeon extends Entity {
//   constructor(isOpen, hasPuppy, gold, items) {
//     super(src);
//     this.isOpen = isOpen;
//     this.hasPuppy = hasPuppy;
//     this.gold = gold;
//     this.items = items;
//     if (this.isOpen) {
//       this.src = 'open.png';
//     } else {
//       this.src = 'closed.png';
//     }
//   }

//   isOpen() {
//     this.isOpen = true;
//     this.src = this.src = 'open.png';
//   }
// }

class Trader extends Entity {
  constructor(items) {
    super('trader.gif');
    this.items = items;
  }
}
