const ShoppingBasket = require('./shoppingBasket');

describe(ShoppingBasket, () => {
    it('returns price = 0 when basket is empty', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0);
    })
})