function Vehicle() {
    this.wheels = 4;
    this.fuel = 'gas'
} 
Vehicle.prototype.startEngine = function(){
    console.log("starting vehicle engine");
    }
    
Vehicle.prototype.drive = function() {
    console.log('driniasdlaskl;gnsadg');
}

function Moto() {
    Vehicle.call(this);
    this.wheels = 2;
}
Moto.prototype = Object.create(Vehicle.prototype);
Moto.prototype.drive = function() {
    console.log('conduc motoro');
}

var vehicle = new Vehicle();
var vehicleFuel = vehicle.fuel;