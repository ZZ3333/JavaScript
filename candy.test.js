const Candy = require('./candy');

describe(Candy, () => {
    it('returns candy name', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getName()).toBe('Mars');
    })

    it('returns candy price', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getPrice()).toBe(4.99);
    })
})