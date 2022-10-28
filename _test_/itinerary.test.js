const Itinerary = require('../src/Itinerary');
const Port = require('../src/port');

describe('Creates an itinerary for the cruise ship', () => {
    it('creates and itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
    it('object has a ports property', () => {
       const dover = new Port('Dover');
       const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais])
    })
})