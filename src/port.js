(function exportPort() {
    function Port(name) {
      this.name = name;
      this.ships = [];
    }
  
    Port.prototype = {
      addShip(ship) {
        this.ships.push(ship);
      },
      removeShip(ship) {
        this.ships = this.ships.filter(dockedShip => dockedShip !== ship);
      },
    };
  
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = Port;
    } else {
      window.Port = Port;
    }
  }());


// ES6 format below (not working)

//class Port {
//    IIFE = (() => {
//    constructor(name) {
//        this.name = name;
//        this.ships = [];
//    }
//    addShip(ship) {
//        this.ships.push(ship);
//    }
//    removeShip(ship) {
//        this.ships.splice(this.ships.indexOf(ship));
//    }

//    if (typeof module !== 'undefined' && module.exports) {
//        module.esports = Port;
//    } else {
//        window.Port = Port;
//    }

//})();
//}
  

//let myPortInstance = new Port();

//module.exports = Port;