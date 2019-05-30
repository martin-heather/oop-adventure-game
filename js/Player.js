// //Create the Player class

class Player extends Creature {
  constructor(name, position, board, level, items, gold) {
    super(name, 'player/front.png', 1, [], 0);
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
    updateActionCam();
  }

  pickup(entity) {
    if (entity instanceof Item) {
      this.items.push(entity);
      playSound('loot');
    }
    if (entity instanceof Gold) {
      this.gold += entity.value;
      playSound('gold');
    }
    clearEntity(this.position);
  }

  attack(entity) {
    super.attack(entity);
    playSound('pattack');
  }

  sell(item, trader) {
    this.gold += item.value;
    remove(this.items, item);
    trader.items.push(item);
    playSound('trade');
  }

  buy(item, trader) {
    this.gold -= item.value;
    this.items.push(item);
    remove(trader.items, item);
    playSound('trade');
  }

  useItem(item, target) {
    item.use(target);
    remove(player.items, item);
    updateActionCam();
  }

  loot(entity) {
    this.gold += entity.gold;
    for (let i = 0; i < entity.items.length; i++) {
      this.items.push(entity.items[i]);
    }
    entity.items = [];
    entity.gold = 0;
    playSound('loot');
  }

  getExpToLevel() {
    return this.level * 10;
  }

  getExp(entity) {
    this.exp += entity.level * 10;
    let requirement = this.getExpToLevel();
    if (requirement >= this.exp) {
      this.levelUp(entity);
    }
  }

  levelUp(entity) {
    this.level + entity.level;
    this.hp = this.getMaxHp();
    this.strength = entity.level * 10;
    this.attackSpeed = 3000 / this.level;
    playSound('levelup');
  }
}
