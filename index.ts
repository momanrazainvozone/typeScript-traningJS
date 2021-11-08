var message: string = "Type Script";
console.log(message);

var num: number = 12;
console.log(num);

// class in TS
class Greeting {
  greet(): void {
    console.log("Hello World!!!");
  }
}
var obj = new Greeting();
obj.greet();

// Build in data types are
// 1) number
// 2) string
// 3) boolean
// 4) null
// 5) undefined
// 6) void

// Difference between null and undefine

// =>> undefine mean value not asign to varible
// =>> null means value asign to variable is undefined.

//User-defined Types

// =>> Enumerations (enums), classes, interfaces, arrays, and tuple.

var name: string = "John";
var score1: number = 50;
var score2: number = 42.5;
var sum = score1 + score2;
console.log("name" + name);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);

// Type Assertion in TypeScript
var str = "1";
var str2: number = <number>(<any>str); //str is now of type number
console.log(typeof str2);

// The following example illustrates variable scopes in TypeScript.

var global_num = 12; //global variable
class Numbers {
  num_val = 13; //class variable
  static sval = 10; //static field

  storeNum(): void {
    var local_num = 14; //local variable
  }
}
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable
var numObj = new Numbers();
console.log("Global num: " + numObj.num_val);

// Example: Rest Parameters

function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);

// Default Parameters
function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);

// Anonymous Function
var msg = function () {
  return "hello world";
};
console.log(msg());
