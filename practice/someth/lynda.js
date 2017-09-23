// invoking instances through the constructor

var Dog = function () {
    var name, breed;
    return console.dir(this);
};

firstDog = new Dog;
firstDog.name = "Albert";
firstDog.breed = "Pitbull";

secondDog = new Dog;
secondDog.name = "Vladimir";
secondDog.breed = "Putin";

// expanding functionality through prototype

var speak = function(what) {
    console.log(what);
}

var Dog = function () {
    var name, breed;
}
var Cat = function () {
    var name, breed;
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Albert";
firstDog.breed = "Pitbull";
firstDog.speak = " woof woof"


firstCat = new Cat;
firstCat.name = "Fluffly";
firstCat.breed = "MATZ";
firstCat.speak = "meow meow";

console.log(firstDog);
console.log(firstCat);
