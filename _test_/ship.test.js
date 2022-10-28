/* globals describe it expect */

const Ship = require('../src/Ship');
const Port = require('../src/port');
const Itinerary = require('../src/Itinerary');


describe('Creating a cruise ship', () => {
    it('creates a cruise ship object', () => {
        const port = new Port('Dover')
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    })
    it('sets a starting port for the ship', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toEqual(port)
    })
})

describe('methods are below', () => {
    it('makes the ship leave port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail()
        expect(ship.currentPort).toBeFalsy()
        expect(ship.previousPort).toBe(dover);
    })
    it('makes the ship dock at another port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
    })
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
})