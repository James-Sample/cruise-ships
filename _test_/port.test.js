/* globals describe it expect */
const Port = require('../src/port')
const Itinerary = require('../src/Itinerary');
const Ship = require('../src/Ship');


describe('creating a port object', () => {
    it('creates an instance of port', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('gives the port a name', () => {
        const port = new Port('Calais');
        expect(port.name).toEqual('Calais')
    })
})

describe('methods are below', () => {
    it('adds a ship to the port', () => {
        const port = new Port('Dover');
        const ship = jest.fn();
        port.addShip(ship)
        expect(port.ships).toContain(ship);
    })
    it('removes a ship from the port', () => {
        const port = new Port('Dover');
        const titanic = jest.fn();
        const queenMary = jest.fn();
        port.addShip(titanic)
        port.addShip(queenMary)
        port.removeShip(queenMary)
        expect(port.ships).toEqual([titanic]);
    })
})