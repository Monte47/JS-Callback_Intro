// class Clock {
//   constructor() {
//     const date = new Date();
//     this.hour = date.getHours();
//     this.minute = date.getMinutes();
//     this.second = date.getSeconds();
//     this.printTime();
//     setInterval(this._tick.bind(this), 1000);
//   }
//
//
//   printTime() {
//     console.log(`${this.hour}:${this.minute}:${this.second}`);
//   }
//
//   _tick() {
//     this.second++;
//     this.printTime();
//   }
// }

// const clock = new Clock();
//
// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question("Give me a number ", function (numstr) {
//       const num = parseInt(numstr);
//       console.log(sum += num);
//       numsLeft--;
//       addNumbers(sum, numsLeft, completionCallback);
//
//     });
//   }
//   if (numsLeft === 0 ) {
//     completionCallback(sum);
//     reader.close();
//   }
// }

// addNumbers(0, 3, sum => (console.log(`Total Sum: ${sum}`)));
//
// const askIfGreaterThan = (el1, el2, callback) => {
//   reader.question(`True or false: ${el1} > ${el2}`, function(res) {
//     let bool = res === "T";
//     callback(bool);
//   });
// };
//
//
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//
//   if (i < arr.length - 1) {
//     askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
//       madeAnySwaps = false;
//       if (isGreaterThan) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         madeAnySwaps = true;
//         i++;
//         innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
//       } else {
//         i++;
//         innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
//       }
//     });
//   }
//   if (i === arr.length - 1) {
//     outerBubbleSortLoop(madeAnySwaps);
//   }
// }
//
// function absurdBubbleSort(arr, sortCompletionCallback) {
//   innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
//   function outerBubbleSortLoop(madeAnySwaps) {
//     console.log(madeAnySwaps);
//     if (madeAnySwaps) {
//       innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
//     } else {
//       sortCompletionCallback(arr);
//     }
//   }
// }

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context) {
  console.log(this);
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"


myBoundTurnOn(); // should say "Turning on a lamp"
