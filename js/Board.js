//Create the Position and Board class

class Position {
  constructor(row, col) {
    // could be x & y
    this.row = row;
    this.col = col;
  }
}

class Board {
  constructor(rows, cols) {
    this.rows = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
          row.push(new Wall());
        } else {
          row.push(new Grass());
        }
      }
      this.rows.push(row);
    }
  }

  render(root) {
    this.root = root;
    for (let k = 0; k < this.rows.length; k++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      rowDiv.id = `row${k}`;
      for (let l = 0; l < this.rows[k].length; l++) {
        rowDiv.appendChild(this.rows[k][l].element);
      }
      this.root.appendChild(rowDiv);
    }
  }

  //update() {}

  setEntity(entity /*, position*/) {
    const oldChild = this.rows[4][5]; //] fix hard-coded positions here
    let parentNode = document.getElementById(`row4`);
    this.rows[4][5] = parentNode.replaceChild(entity.element, oldChild.element);
    // this.rows[4][5] = entity;
  }

  getEntity(position) {}
}
