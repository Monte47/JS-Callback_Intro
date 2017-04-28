class Game {

  constructor() {
    this.towers = [[3,2,1], [] ,[]];
  }



}

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Game.prototype.promptMove = function(callback) {
  console.log(this.towers);
  reader.question("Which tower to move from?", function(from) {
    reader.question("Which tower to move to?", function(to) {
      const fromTower = parseInt(from);
      const toTower = parseInt(to);
      callback(fromTower, toTower);
      reader.close();
    });
  });
};


Game.prototype.isValidMove = function(fromTower, toTower) {
  if (this.towers[fromTower].length > 0 ) {
    if ((this.towers[fromTower][-1] < this.towers[toTower][-1]) || (this.towers[toTower].length === 0)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

Game.prototype.move = function(fromTower, toTower) {
  if (this.isValidMove(fromTower, toTower)) {
    this.towers[toTower].push(this.towers[fromTower].pop());
    return true;
  } else {
    return false;
  }
};

Game.prototype.print = function() {
  console.log(JSON.stringify(this.towers));
};

Game.prototype.isWon = function() {
  return (this.towers[0].length === 0 && (this.towers[1].length === 3 || this.towers[2].length === 3));
};

Game.prototype.run = function(callback) {
  this.promptMove((fromTower, toTower) => {
    if (!this.move(fromTower, toTower)) {
      console.log("Invalid!");
    }
    if(!this.isWon()) {
      this.run(callback);
    } else {
      this.print();
      console.log("Win");
      callback();
    }
  });
};

let game1 = new Game();
// game1.promptMove((fromTower, toTower) => console.log(fromTower, toTower));
// console.log(game1.isValidMove(0,1));
// console.log(game1.isValidMove(2,1));
// console.log(game1.move(0, 1));
// console.log(game1.towers);
// console.log(game1.move(2, 1));
// console.log(game1.towers);
// game1.print();
// console.log(game1.isWon());
game1.run();
