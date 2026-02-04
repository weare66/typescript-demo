// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery).
// Для Cart реализовать методы:

// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class DeliveryToHome extends Delivery {
  constructor(date: Date, public addres: string) {
    super(date);
  }
}

class DeliveryToMarket extends Delivery {
  constructor(public marcetId: number) {
    super(new Date());
  }
}

type DeliveryOptions = DeliveryToHome | DeliveryToMarket;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProdToCart(product: Product): void {
    this.products.push(product);
  }

  public delProdFromCart(ProdId: number): void {
    this.products = this.products.filter((prod: Product) => {
      prod.id !== ProdId;
    });
  }

  public getSum(): number {
    return this.products.map((pr) => pr.price).reduce((sum, currentSum) => sum + currentSum, 0);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public cheackOut() {
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
