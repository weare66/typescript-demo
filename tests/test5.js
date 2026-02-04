"use strict";
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery).
// Для Cart реализовать методы:
Object.defineProperty(exports, "__esModule", { value: true });
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
class Product {
    id;
    title;
    price;
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    date;
    constructor(date) {
        this.date = date;
    }
}
class DeliveryToHome extends Delivery {
    addres;
    constructor(date, addres) {
        super(date);
        this.addres = addres;
    }
}
class DeliveryToMarket extends Delivery {
    marcetId;
    constructor(marcetId) {
        super(new Date());
        this.marcetId = marcetId;
    }
}
class Cart {
    products = [];
    delivery;
    addProdToCart(product) {
        this.products.push(product);
    }
    delProdFromCart(ProdId) {
        this.products = this.products.filter((prod) => {
            prod.id !== ProdId;
        });
    }
    getSum() {
        return this.products.map((pr) => pr.price).reduce((sum, currentSum) => sum + currentSum, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    cheackOut() {
        if (this.products.length === 0) {
            throw new Error('Продукты не добавили!');
        }
        if (!this.delivery) {
            throw new Error('Нет доставки!');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProdToCart(new Product(1, 'Вешалка', 455));
cart.addProdToCart(new Product(2, 'Торт', 569));
cart.addProdToCart(new Product(3, 'Туша', 156));
cart.delProdFromCart(2);
cart.setDelivery(new DeliveryToHome(new Date(), ''));
console.log(cart.getSum());
console.log(cart.cheackOut());
//# sourceMappingURL=test5.js.map