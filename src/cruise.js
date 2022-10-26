function Ship(name) {
this.name = name;
this.captain = "Steve";
this.passengers = [];
this.startPort = "Dover";
this.destination = "";
}

Ship.prototype.setSail = function(destination) {
    this.startPort = false
    this.destination = destination
    console.log(`Setting sale for ${destination}!`)
}


module.exports = Ship;