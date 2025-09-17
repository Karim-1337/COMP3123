//Karim Karabayev
// Exercise 1
const greeter = (arr, counter) => {
  const greetText = 'Hello ';
  for (const name of arr) {
    console.log(`${greetText}${name}`);
  }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);



// Exercise 2 
function capitalize(s) {
  s = String(s || "");
  if (s.length === 0) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
console.log(capitalize("green"));
console.log(capitalize("hello world"));
console.log(capitalize(""));    

// Exercise 3
function capitalize(s) {
  s = String(s || "");
  if (s.length === 0) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function capitalizeColors(colors) {
  return colors.map(capitalize);
}

var colors = ["red", "green", "blue"];
console.log("Before:", colors);
console.log("After:", capitalizeColors(colors));


//Exercise 4
function atLeastTwenty(arr) {
  return arr.filter(function (n) {
    return Number(n) >= 20;
  });
}

var vals = [3, 20, 19, 50, 21, "25", "07"];
console.log("Input:", vals);
console.log(">= 20:", atLeastTwenty(vals));

// Exercise 5 
function sumAndProduct(arr) {
  var sum = 0;
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    var n = Number(arr[i]);
    sum += n;
    product *= n;
  }
  return { sum: sum, product: product };
}

var sample = [1, 2, 3, 4];
var result = sumAndProduct(sample);
console.log("Input:", sample);
console.log("Sum:", result.sum, "Product:", result.product);


// Exercise 6 
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  info() {
    return this.model + " (" + this.year + ")";
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = Number(balance) || 0;
  }
  deposit(amount) {
    this.balance += Number(amount) || 0;
    return this.balance;
  }
  pay(amount) {
    this.balance -= Number(amount) || 0;
    return this.balance;
  }
  info() {
    return super.info() + " — Balance: $" + this.balance;
  }
}
const s = new Sedan("Civic", 2021, 5000);
console.log(s.info());    
s.deposit(250);
console.log(s.info());       
s.pay(1000);
console.log(s.info());      