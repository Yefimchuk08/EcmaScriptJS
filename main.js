
const square = x => x * x;
console.log("square(5) =", square(5));


const divide = (a, b) => b === 0 ? "Error: division by zero" : a / b;
console.log("divide(10, 2) =", divide(10, 2)); 
console.log("divide(10, 0) =", divide(10, 0)); 


const getRandom = () => Math.floor(Math.random() * 10) + 1;
console.log("getRandom() =", getRandom());


let calculatorWrong = {
  x: 10,
  y: 5,
  sum: () => this.x + this.y
};
console.log("calculatorWrong.sum() =", calculatorWrong.sum());


let calculator = {
  x: 10,
  y: 5,
  sum() {
    return this.x + this.y;
  }
};
console.log("calculator.sum() =", calculator.sum()); 


const minMax = arr => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
};
console.log("minMax([3, 1, 8, 4]) =", minMax([3, 1, 8, 4])); 


const user = { name: "Alice", age: 25, isAdmin: false };
const { name, age } = user;
console.log("name =", name, "| age =", age);

const car = { brand: "Toyota", model: "Camry", year: 2020 };
const { brand: make, model: type } = car;
console.log("make =", make, "| type =", type);

const options = { width: 100, height: 200 };
const { width, height, color = "black" } = options;
console.log("width =", width, "| height =", height, "| color =", color);

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: "Bob", age: 30 });

const company = {
  name: "TechCorp",
  address: { city: "Kyiv", street: "Main St" }
};
const {
  name: companyName,
  address: { city, street }
} = company;
console.log("companyName =", companyName, "| city =", city, "| street =", street);


class Animal {
  sound() {
    console.log("Some sound");
  }

  static info() {
    console.log("This is an Animal class");
  }
}
const a = new Animal();
a.sound(); 
Animal.info();


class Dog extends Animal {
  constructor(breed) {
    super();
    this.breed = breed;
  }

  sound() {
    console.log("Bark!");
  }

  makeSound() {
    super.sound(); 
    this.sound();  
  }
}
const dog = new Dog("Labrador");
dog.sound(); 
dog.makeSound(); 
console.log("dog.breed =", dog.breed); 


const fruits = ["apple", "banana", "orange"];
const [first, second] = fruits;
console.log("first =", first, "| second =", second);


const numbers = [1, 2, 3, 4, 5];
const [a1, , b1, , c1] = numbers;
console.log("a =", a1, "| b =", b1, "| c =", c1);


const colors = ["red", "green"];
const [r, g, b = "blue"] = colors;
console.log("r =", r, "| g =", g, "| b =", b);

let x = 5, y = 10;
[x, y] = [y, x];
console.log("x =", x, "| y =", y); 


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
for (const { name, age } of users) {
  console.log(`Name: ${name}, Age: ${age}`);
}
