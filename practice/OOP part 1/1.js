// this is the base class
function Animal(){
    this.legs = 4;
    this.fur = 'short';
}
// static variable
Animal.TAIL = true;

// static function
Animal.sleep = function () {
    console.log ('Animals static sleep');
};


Animal.prototype.walk = function () {
    console.log('animalu o ia la fuga');
};

Animal.prototype.askForFood = function () {
    console.log('i`m hungry');
};

// this is the child class
function Dog (){
    // inherit parent class properties
    Animal.call(this);
    this.fur = 'long';
    this.paws = true;
}
// inherit static variables and methods
Object.assign(Golden, Animal);


// inherit parent class methods
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function(){
    console.log('ham ham');
};

Dog.prototype.askForFood = function(){
    // call parent method aka super();
    Animal.prototype.askForFood();
    // do all dog specific things
    console.log('puppy eyes');
    console.log('ham ham');
};

// golden retriever

function Golden (){
    Dog.call(this);
    this.fur = 'golden';
    this.energy = 'max';
}

Golden.prototype = Object.create(Dog.prototype);

Dog.prototype.play = function() {
    Golden.prototype.askForFood ();
        console.log('roll to impress');

};

// static values
console.log(Animal.TAIL);


// to be able to get the value from a class attribute
// we need to create an object with that class
console.log(new Animal().legs);

// play with static methods

Animal.sleep();

// to be able to call class methods
// we need to create an object with that class
new Animal().walk();

console.log(Golden.TAIL);
console.log(Golden.sleep);
