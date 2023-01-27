const Candy = require('./candy');
class ShoppingBasket {
    constructor() {
        this.basket = [];
    }

    getTotalPrice() {
      const prices = this.basket.map(candy => (candy.getPrice()));
        return prices.reduce((a, b) => a + b, 0);
    }

    addItem(candy) {
        this.basket.push(candy);
    }
}

module.exports = ShoppingBasket;