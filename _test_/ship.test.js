/* globals describe it expect */

const Ship = require('../src/Ship');
const Port = require('../src/port');
const Itinerary = require('../src/Itinerary');


describe('Creating a cruise ship', () => {
    describe('test using beforeEach method', () => {
        let port;
        let itinerary;
        let ship;
        beforeEach(() => {
            port = new Port('Dover')
            itinerary = new Itinerary([port]);
            ship = new Ship(itinerary);
        })
    it('creates a cruise ship object', () => {
        expect(ship).toBeInstanceOf(Object);
    })
    it('sets a starting port for the ship', () => {
        expect(ship.currentPort).toEqual(port)
    })
})
})

describe('methods are below', () => {
    describe('test using beforeEach method', () => {
        let dover;
        let itinerary;
        let calais;
        let ship;
        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
        })
    it('makes the ship leave port', () => {
        ship.setSail()
        expect(ship.currentPort).toBeFalsy()
        expect(ship.previousPort).toBe(dover);
        expect(dover.ships).not.toContain(ship);
    })
    it('makes the ship dock at another port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    })
    it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
    it('adds the ship to port on instantiation', () => {
        expect(dover.ships).toContain(ship);
    })
})
})
