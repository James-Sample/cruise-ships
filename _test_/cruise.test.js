/* globals describe it expect */
const Ship = require('../src/cruise');
const ship = new Ship('Theo');

describe ('Cruise ship constructor', () => {
    it('returns an instance of the object', () => {
        expect(new Ship('Theo')).toBeInstanceOf(Object);
    })
    it('gives the ship a name', () => {
        ship;
        expect(ship.name).toBe('Theo')
    })
    it('gives the ship a captain', () => {
        ship;
        expect(ship.captain).toBe("Steve");
    })
    it('generates an array for the passengers', () => {
        ship;
        expect(ship.passengers).toBe([])
    })
    it('sets the ships starting point', () => {
        ship;
        expect(ship.startPort).toBe("Dover")
    })
});