//function media (a,b) {
//    return (a+b) /2 ;
//}
//var rez = media(20,10);
//    alert(rez);

//function produs (a,b,c) {
//    return (a*b*c)
//}
//var zxc = produs(4,2,8)
//    alert(zxc);

function prod (a, b) {
    var p =  a * b;
    return p;
}

function  sum(a, b) {
    var x =  a + b;
    return x;
}
var rez2 = sum(prod(2,2), prod(5,5));
console.log(rez2);

class Car {
    /* Inside the class we have marca, model, km, an */
    constructor(marca2, model2, km2, an2) {
        this.marca = marca2;
        this.model = model2;
        this.km = km2;
        this.an = an2;
    }

    setKm(newkm) {
        this.km = newkm;
    }
    
    drive() {
        console.log("masina mea este un", this.marca, this.model, this.km);
    }
    
    driveFor(km) {
        console.log("im driving", this.marca, this.model, "si am facut", km, "km");
    }
}


var masina = {
    marca: 'vw',
    model: 'gold',
    km: '10000',
    an: '2005',
    soferi: [ 'unu' , 'doi' , 'trei' ],
    drive: function() {
        console.log("masina mea este un", this.marca, this.model, this.km);
    },
    driveFor: function(km) {
        console.log("im driving", this.marca, this.model, "si am facut", km, "km");
    }
};

masina.drive();
masina.driveFor(12321);

var masinaNoua = new Car("Dacia", "1300", 200000, 1980);
masinaNoua.drive();

var masinaNoua2 = new Car("BMW", "x110", 10, 2020);
masinaNoua2.drive();

masinaNoua.setKm(5);
masinaNoua.drive();
masinaNoua2.drive();