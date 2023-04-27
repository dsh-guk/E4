function ElectricalAppliance(name, manufacturer) {
    this.name = name,
    this.manufacturer = manufacturer
}

ElectricalAppliance.prototype.getPowerConsumption = function (power) {
    console.log(`Power Consumption of the ${this.name} is ${power} W.`)
}

ElectricalAppliance.prototype.getTurn = function (on_off) {
    console.log(`The ${this.name} is switched ${on_off}.`)
}


function Lighting(name, manufacturer, typeOfLamp) {
    this.name = name,
    this.manufacturer = manufacturer,
    this.typeOfLamp = typeOfLamp
}

Lighting.prototype = new ElectricalAppliance()
Lighting.prototype.getPowerConsumption = function (power) {
    console.log(`Electricity consumption of the ${this.name} is ${power} W.`)
}

function PC(name, manufacturer, display) {
    this.name = name,
    this.manufacturer = manufacturer,
    this.display = display
}

PC.prototype = new ElectricalAppliance()
PC.prototype.getTurn = function (on_off) {
    console.log(`This ${this.name} is switched ${on_off}.`)
}

const iron = new ElectricalAppliance("iron", "Tefal");
const lamp = new Lighting("lamp", "Bork", "LED");
const computer = new PC("computer", "Apple", 17);

iron.getPowerConsumption(650);  // "Power Consumption of the iron is 650 W."
lamp.getPowerConsumption(15);  // "Electricity consumption of the lamp is 15 W."
computer.getPowerConsumption(380);  // "Power Consumption of the computer is 380 W."

lamp.getTurn("on");  // "The lamp is switched on."
computer.getTurn("off");  // "This computer is switched off."

console.log(lamp);
console.log(computer);