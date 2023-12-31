'use strict';

const cart = {
  items: [],

  count: 0,

  discount: 0,

  get setDiscount () {
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
        this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
        this.discount = 21;
    } else {
        this.discount = 0;
    }
  },

  get totalPrice() {
    console.log(this.discount);
    return this.calculateItemPrice() * 0.01 * (100 - this.discount);
  },

  add(nameItem, priceItem, countItem) {
    return this.items.push({nameItem, priceItem, countItem});
  },

  increaseCount() {
    const totalCount = this.items.reduce(
      (acc, item, i, arr) => acc + item.countItem, 0);
    console.log(totalCount);
  },

  calculateItemPrice() {
    const sumPriceItems = this.items.reduce((acc, item, i, arr) => {
      const result = acc + (item.priceItem * item.countItem);
      return result;
    }, 0);
    return sumPriceItems;
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },

  print() {
    const itemsStr = JSON.stringify(this.items);
    console.log(itemsStr);
    console.log(this.totalPrice);
  },
};

cart.setDiscount = 'METHED'
cart.add('toy', 5, 2);
cart.add('doll', 3, 1);
cart.add('book', 4, 5);

cart.print();
cart.clear()
cart.print();




