class animal {
  constructor(eye) {
    this.eye = eye;
  }

  color() {
    console.log(`This Animal have ${this.eyes} eyes`);
  }
}

class dog extends animal {
  constructor(color, height, eye) {
    super(eye);
    this.color = color;
    this.height = height;
  }
  dogDetails() {
    console.log(
      `Dog color is ${this.color} Their height is ${this.height} and have ${this.eye} eyes`
    );
  }
}

let Dog = new dog("brown", "2feet", 2);
console.log(Dog);
Dog.dogDetails();

// Now About Cat

class Cat extends animal {
  constructor(color, height, eye) {
    super(eye);
    this.color = color;
    this.height = height;
  }
  CatDetail() {
    console.log(
      `Cat color is ${this.color} Their height is ${this.height} and have ${this.eye} eyes`
    );
  }
}

let cat = new Cat("White", "1feet", 2);
console.log(cat, cat.CatDetail());

// Now Extends Cow

class cow extends animal {
  constructor(color, height, eye) {
    super(eye);
    this.color = color;
    this.height = height;
  }

  cowDeatils() {
    console.log(
      `Cow color is ${this.color} Their height is ${this.height} and have ${this.eye} eyes`
    );
  }
}
let Cow = new cow("White", "1feet", 2);
console.log(Cow, Cow.cowDeatils());
