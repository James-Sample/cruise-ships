/* globals describe it expect */

const Ship = require('../src/Ship');
const Port = require('../src/port')


describe('Creating a cruise ship', () => {
    it('creates a cruise ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
    it('sets a starting port for the ship', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.currentPort).toEqual(port)
    })
})

describe('methods are below', () => {
    it('makes the ship leave port', () => {
        const ship = new Ship(Port);
        ship.setSail()
        expect(ship.currentPort).toBeFalsy()
    })
    it('makes the ship dock at another port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais');
        ship.dock(calais)
        expect(ship.currentPort).toBe(calais);
    })
})