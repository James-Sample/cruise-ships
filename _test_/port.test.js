/* globals describe it expect */
const Port = require('../src/port')


describe('creating a port object', () => {
    it('creates an instance of port', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('gives the port a name', () => {
        const port = new Port('Calais');
        expect(port.name).toEqual('Calais')
    })
})