// var laptop = {
//   color:'black',
//   brand:'Delll',
//   hardkDiskMemory:'4GB',
//   price:'400',
//   start:function() {
//     console.log("starting leptop");
//   },
//   shutdown:function() {
//     console.log('shutting down');
//   },
//   sleep: function() {
//     console.log('goin to bed ');
//   }
// }
var arr=[];
for (i=0; i=10; i++) {
  var obj = {
    name: 'user' + i,
    age: '18' + i,
    height: 1.70 + (10*i),
    weight:50,
    calculateBMI: function() {
      console.log(obj.height/obj.weight);
    }
  }
  arr.push(obj);
}
console.log(arr);

// oop classes

class User {
  constructor(userData){
    this.height = userData.height;
    this.weight = userData.weight;
  }
  get calculateBMI() {
    console.log(this.height/this.weight);
  }
}

var user1 = new User();
user1.height = 178;
user1.weight = 60;
user1.calculateBMI();

var user2 = new User({
  height:185,
  weight:99
});
user2.name = 'iooooniiicaaaaa';
user2.calculateBMI();
for (var i=0; i<10; i++) {
  var obj= new User ({
    name: 'Class User',
    weight: 170+i,
    height: 80+i
  });
  arr2.push(obj);
}
console.log(arr2);
