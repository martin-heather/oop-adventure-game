// //Create the Player class

class Player extends Creature {
  constructor(name, position, board, level, items, gold) {
    super(name, 'player/front.png', level, items, gold);
    this.attackSpeed = 2000 / this.level;
    this.exp = 0;
    this.position = position;
    this.board = board;
  }

  render(root) {
    this.root = root;
    this.update();
    this.root.appendChild(this.element);
  }

  update() {
    this.element.style.top = this.position.row * ENTITY_SIZE + 'px';
    this.element.style.left = this.position.col * ENTITY_SIZE + 'px';
    this.element.style.zIndex = '100';
    this.element.style.position = 'absolute';
  }

  move(direction) {
    switch (direction) {
      case 'left':
        {
          if (this.position.col > 1) {
            this.setImg('player/left.png');
            this.position.col -= 1;
          }
        }
        break;
      case 'right':
        {
          if (this.position.col < board.rows[0].length - 2) {
            this.setImg('player/right.png');
            this.position.col += 1;
          }
        }
        break;
      case 'up':
        {
          if (this.position.row > 1) {
            this.setImg('player/back.png');
            this.position.row -= 1;
          }
        }
        break;
      case 'down': {
        if (this.position.row < board.rows.length - 2) {
          this.setImg('player/front.png');
          this.position.row += 1;
        }
      }
    }
    this.render(this.root);
  }

  attack(entity) {
    setInterval(() => hit(entity, this.strength), this.attackSpeed);
  }

  pickup(entity) {}

  attack(entity) {}

  buy(item, trader) {}

  useItem(item, target) {}

  getExpToLevel() {}

  levelUp(entity) {}
}
