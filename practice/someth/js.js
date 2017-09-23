// function test () {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
//


// function letTest() {
//   let x = 1;
//   if (true) {
//     let x = 2 ;
//     console.log(x);
//   }
//   console.log(x);
// }
//


// const OBJ = {
//   'foo' : 'bar'
// }
// console.log(OBJ);
// OBJ.foo = 'cd2';
// console.log(OBJ);
//


// function notHoisting(){
//     let y=1000;
//     // console.log(y);//10
//     const z = 100;
//     for(let i = 0; i<=10; i++) {
//         const y = 0;
//         console.log(i+y);
//         // console.log(z);
//     }
//     if (true) {
//         const y = 8;
//         // const condition = false;
//         // console.log(y);
//         // console.log(condition);
//     }
//     // console.log(y);
//     // console.log(condition);
// }


// const ZXC = {
//   name : 'abc',
//   varsta : '22',
//   sex : 'M'
// }
// console.log(ZXC);
// ZXC.ocupatia = 'somer';
// console.log(ZXC);
// ZXC.ocupatia = 'nex somer';
// ZXC.sex = 'F';
// console.log(ZXC);



// CLASSIC FUNCTION
// function prod (p1, p2) {
//   return p1 * p2
// }
// // console.log(prod(2,2));


// CLASSIC FUNCTION CU ARROW FUNCTION
// const prodVarianta1 = (p1, p2) => {
//   console.log(p1)
//   console.log(p2)
//
//   const PI = 3.14
//   console.log(PI)
//
//   return p1 * p2 * PI
// }
// console.log(prodVarianta1(22,123))

// CLASSIC FUNCTION CU ARROW FUNCTION V2
// const prodVarianta2 = (p1 , p2) => p1 * p2;
// console.log(prodVarianta2(2,2))


// ADD EVENT LISTENER FOR THE SEND BUTTON VIA VANILLA JS and arrow function
window.addEventListener("load", function() {
  const sendButton = document.getElementsByClassName("js-send-btn")[0];
  const infoLabel = document.getElementsByClassName("js-info")[0];
  // sendButton.addEventListener('click', function(){
  //   infoLabel.innerHTML = "omg"
  sendButton.addEventListener('click', x  =>  infoLabel.innerHTML = "omgomgomg" )

})

// const sum = function(x,y) {
//   return x+y;
// }
// console.log(sum(2,2))
//
// const sum2 = (x,y) => {return x+y}
// console.log(sum2(10,10))
//
// const sum3 = (x,y,z) => x+y+z
// console.log(sum3(1,2,3))
//
// const double = function (x) {
//   return x*x;
// }
// console.log(double(5))
//
// const double2 = (x,y) => {return x*y}
// console.log(double2(17,22))

let numbers = [];
const evens = [];

    for (let i = 0; i<20; i++) {
      numbers.push(Math.floor(Math.random() * 20))
    }

// varianta clasica

// numbers.forEach(function(nr){
//   if (nr%2 == 0) {
//     evens.push(nr)
//   }
//   console.log(evens);
// })


// varianta cu ARROW
// for (let i = 0; i<10; i++) {
//   numbers.push(Math.floor(Math.random() * 10))
// }
// numbers.forEach(nr => {
// 	if (nr % 2 == 0) { evens.push(nr); }
//   console.log(evens)
// });

// es6 classes

function Animal() {
  this.legs = 4;
  this.fur = 'short';
}

// static method
Animal.sleep = function () {
  console.log('animalu doarme');
}
Animal.sleep();

Animal.prototype.walk = function () {
  console.log('animal is walking')
}
const abc = new Animal();
console.log(abc.walk);

function Dog() {
  Animal.call(this);
  this.eyes= 'green',
  this.dick = true;
}
var b = new Dog
console.log(Dog);
