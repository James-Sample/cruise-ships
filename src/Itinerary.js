(function exportItinerary(){
    function Itinerary(ports) {
        this.ports = ports;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Itinerary;
    } else {
        window.Itinerary = Itinerary;
    }
}());




//class Itinerary {
//    constructor(ports) {
//        this.ports = ports;
//    }
//}


//module.exports = Itinerary;