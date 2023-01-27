const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

describe(ShoppingBasket, () => {
    it('returns price = 0 when basket is empty', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0);
    })

    it('adds a candy to the basket', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        basket.addItem(candy);
        expect(basket.getTotalPrice()).toBe(4.99);
    })

    it('adds multiple candies to the basket', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        const candy_2 = new Candy('Skittle', 3.99);
        basket.addItem(candy);
        basket.addItem(candy_2);
        basket.addItem(candy_2);
        expect(basket.getTotalPrice()).toBe(12.97);
    })

    it('adds multiple mock candies to the basket', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        const candy_2 = new Candy('Skittle', 3.99);
        const candyDouble = { getPrice: () => 4.99 };
        const candyDouble_2 = { getPrice: () => 3.99};
        basket.addItem(candyDouble);
        basket.addItem(candyDouble_2);
        basket.addItem(candyDouble_2);
        expect(basket.getTotalPrice()).toBe(12.97);
    })
});



