// Class of Fruits created
class Fruits {
  constructor(name, color) {
    // added properties to Fruits
    this.name = name;
    this.color = color;
  }
  // added methods to Fruits
  ripe(){
    console.log(this.name, "is ripe")
    return this;
  }
  grow(){
    console.log(this.name, "is growing")
    return this;
  }
}

// Class of Apple created with inheritance with Fruits
class Apple extends Fruits {
  constructor(name, color, type, variety) {
    super(name, color);
    // added extra properties to Class Apple
    this.type = type;
    this.variety = variety;
  }
  // added extra methods to Class Apple
  juicy(){
    console.log(this.name, "is juicy")
    return this;
  }

  local(){
    console.log(this.name, "is cultivated locally")
    return this;
  }
}



// Instances created (4)
// Every fruit can access the class Fruit
// Apple can access extra properties and methods exclusive to it.
let banana = new Fruits("banana", "yellow");
let grapes = new Fruits("grapes", "green");
let mango = new Fruits("mango", "yellow");
let apple = new Apple("apple", "red", "medium", "kashmiri");


// Consoling
console.log(apple);
apple.ripe().grow().juicy().local(); 

console.log(banana);
banana.ripe().grow();

console.log(grapes);
grapes.ripe().grow();

console.log(mango);
mango.ripe().grow();
