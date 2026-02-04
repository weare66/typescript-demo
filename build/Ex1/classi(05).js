"use strict";
/////////////////////////
//Class(создание)
/////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const user = new User('Peta');
// console.log(user);
// user.name = 'Vasa';
// console.log(user);
// class Admin {
//     public role: number
//     // constructor(role: number) {
//     //     this.role = role;
//     // }
// }
// const admin = new Admin();
// admin.role = 1;
/////////////////////////
//Конструктор
/////////////////////////
// class User {
//   name: string;
//   age: number;
//   constructor();
//   constructor(name: string);
//   constructor(age: number);
//   constructor(name: string, age: number);
//   constructor(ageOrName?: string | number, age?: number) {
//     if (typeof ageOrName === 'string') {
//       this.name = ageOrName;
//     } else if (typeof ageOrName === 'number') {
//       this.age = ageOrName;
//     } else if (typeof age === 'number') {
//       this.age = age;
//     }
//   }
// }
// const user = new User('Peta');
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User('Peta', 66);
/////////////////////////
//Методы
/////////////////////////
// enum StatusPayment {
//   HOLDED,
//   PROCEESSED,
//   REVERSED,
//   // SUCCESS = 'success',
//   // FAILD = 'faild',
//   // PANDING = 'panding',
// }
// class Payment {
//   id: number;
//   status: StatusPayment = StatusPayment.HOLDED;
//   createdAt: Date = new Date();
//   updatedAt: Date;
//   constructor(id: number) {
//     this.id = id;
//   }
//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   }
//   unholdPayment(): void {
//     if (this.status == StatusPayment.PROCEESSED) {
//       throw new Error('Платёж не может быть возвращён!');
//     }
//     this.status = StatusPayment.REVERSED;
//     this.createdAt = new Date();
//   }
// }
// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);
/////////////////////////
//Перегрузка методов
/////////////////////////
// class User {
//   skills: string[];
//   addSkill(skill: string): void;
//   addSkill(skill: string[]): void;
//   addSkill(skill: string[] | string /** string или  string[*/): void {
//     if (typeof skill == 'string') {
//       this.skills.push(skill);
//     } else {
//         this.skills.concat(skill);
//     }
//   }
// }
// //new User().addSkill()
// function run(distance: string): string;
// function run(distance: number): number;
// function run(distance: number | string): number | string {
//   if (typeof distance === 'number') {
//     return 1;
//   } else {
//     return '';
//   }
// }
// run()
///тоже самое, только синтаксис др в названиях
/**
class User {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string[] | string ): void {
    if (typeof skill == 'string') {
      this.skills.push(skill);
    } else {
        this.skills.concat(skill);
    }
  }
}
*/
/////////////////////////
//Getter and setter
/////////////////////////
// class User {
//   _login: string;
//   password: string;
//   createdAt: Date;
//   // getLogin(l: string) {
//   //   this.login = 'user-' + l;
//   // }
//   set login(l: string | number) {
//     this._login = 'user-' + l;
//     this.createdAt = new Date();
//   }
//   get login() {
//     return this._login;
//   }
//   async getPassword(p:string) {
//   }
//   // set password(p: string) {
//   //   //sync
//   // }
// }
// const user = new User();
// user.login = 'mmyyLogin';
// console.log(user);
// console.log(user.login);
//////////////////////
//Implements
/////////////////////
// interface ILogger {
//   log(...args): void;
//   error(...args): void;
// }
// class Logger implements ILogger {
//   log(...args: any[]): void {
//     console.log(...args);
//   }
//   async error(...args: any[]): Promise<void>  {
//     //Кинуть во внешнюю систему
//     console.log(...args);
//   }
// }
// interface IPayable {
//   pay(paymentId: number): void;
//   price?: number;
// }
// interface IDeletable {
//   delete(): void;
// }
// class User implements IPayable, IDeletable {
//   delete(): void {
//     throw new Error("Method not implemented.");
//   }
//   pay(paymentId: number | string): void {
//     console.log(paymentId);
//   }
//   // price?: number;
// }
//////////////////////
//Extends
//////////////////////
// type PaymentStatus = 'new' | 'paid';
// class Payment {
//   id: number;
//   status: PaymentStatus = 'new';
//   constructor(id: number) {
//     this.id = id;
//   }
//   pay() {
//     this.status = 'paid';
//   }
// }
// class PersistendPayment extends Payment {
//   databaseId: number;
//   paidAt: Date;
//   constructor() {
//     const id = Math.random();
//     super(id);
//   }
//   save() {
//     // Сохранение в базу
//   }
//   override pay(date?: Date) {
//     // this.status = 'paid';
//     //super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }
// // new PersistendPayment().
////////////////////////////
//Особенности наследования
///////////////////////////
// type PaymentStatus = 'new' | 'paid';
// class Payment {
//   id: number;
//   status: PaymentStatus = 'new';
//   constructor(id: number) {
//     this.id = id;
//   }
//   pay() {
//     this.status = 'paid';
//   }
// }
// class PersistendPayment extends Payment {
//   databaseId: number;
//   paidAt: Date;
//   constructor() {
//     const id = Math.random();
//     super(id);
//   }
//   save() {
//     // Сохранение в базу
//   }
//   override pay(date?: Date) {
//     // this.status = 'paid';
//     super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }
// new PersistendPayment();
// class User {
//   name: string = 'user';
//   constructor() {
//     console.log(this.name);
//   }
// }
// class Admin extends User {
//   name: string = 'admin';
//   constructor() {
//     super();
//     console.log(this.name);
//   }
// }
// new Admin();
// //new Error('');
// class GttpError extends Error {
//   code: number;
//   constructor(message: string, code?: number) {
//     super(message)
//     this.code = code ?? 500;
//   }
// }
////////////////////////////
//Композиция VS наследование
///////////////////////////
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Users extends Array<User> {
//   searchByName(name: string) {
//     return this.filter((u) => u.name === name);
//   }
//   override toString(): string {
//     return this.map((u) => u.name).join(', ');
//   }
// }
// const users = new Users();
// users.push(new User('Vasa'));
// users.push(new User('Peta'));
// users.push(new User('Vova'));
// console.log(users.toString());
// class UserList {
//   user: User[];
//   push(u: User) {
//     this.user.push(u);
//   }
// }
// class Payment {
//   date: Date;
// }
// class UserWithPayment extends Payment {
//   name: string;
// }
// class UserWithPayment2 {
//   user:User;
//   payment: Payment;
//   constructor(user:User,payment: Payment) {
//     this.payment = payment;
//     this.user = user;
//   }
// }
////////////////////////////
//Видимость свойст
///////////////////////////
// class Vehicle {
//   public make: string;
//   private damages: string[];
//   private _model: string;
//   #price: number;
//   protected run: number;
//   set model(m: string) {
//     this._model = m;
//     this.#price = 100;
//   }
//   get model() {
//     return this._model;
//   }
//   isPriceEqual(v: Vehicle) {
//     return this.#price === v.#price;
//   }
//   addDamage(damage: string) {
//     this.damages.push(damage);
//   }
// }
// class EuroTrack extends Vehicle {
//   setRun(km: number) {
//     this.run = km / 0.62;
//   }
// }
// new Vehicle();
//////////////////////////
//045 test 5
/////////////////////////
// class Product {
//   constructor(public id: number, public title: string, public price: number) {}
// }
// class Delivery {
//   constructor(public date: Date) {}
// }
// class DeliveryToHome extends Delivery {
//   constructor(date: Date, public addres: string) {
//     super(date);
//   }
// }
// class DeliveryToMarket extends Delivery {
//   constructor(public marcetId: number) {
//     super(new Date());
//   }
// }
// type DeliveryOptions = DeliveryToHome | DeliveryToMarket;
// class Cart {
//   private products: Product[] = [];
//   private delivery: DeliveryOptions;
//   public addProdToCart(product: Product): void {
//     this.products.push(product);
//   }
//   public delProdFromCart(ProdId: number): void {
//     this.products = this.products.filter((prod: Product) => {
//       prod.id !== ProdId;
//     });
//   }
//   public getSum(): number {
//     return this.products.map((pr) => pr.price).reduce((sum, currentSum) => sum + currentSum, 0);
//   }
//   public setDelivery(delivery: DeliveryOptions): void {
//     this.delivery = delivery;
//   }
//   public cheackOut() {
//     if (this.products.length === 0) {
//       throw new Error('Продукты не добавили!');
//     }
//     if (!this.delivery) {
//       throw new Error('Нет доставки!');
//     }
//     return { success: true };
//   }
// }
// const cart = new Cart();
// cart.addProdToCart(new Product(1, 'Вешалка', 455));
// cart.addProdToCart(new Product(2, 'Торт', 569));
// cart.addProdToCart(new Product(3, 'Туша', 156));
// cart.delProdFromCart(2);
// cart.setDelivery(new DeliveryToHome(new Date(), ''));
// console.log(cart.getSum());
// console.log(cart.cheackOut());
//////////////////////////
//Статические свойства
//////////////////////////
// class UserService {
//   //static name: string = 'wds';
//   static db: any;
//   static getUser(id: number) {
//     return UserService.db.findById(id);
//   }
//   constructor(id: number) {
//     //у статич. нет конструктора
//   }
//   create() {
//     UserService.db;
//   }
//   static {
//     // здесь ничего асинхр не может быть
//     UserService.db = 'dew';
//   }
// }
// UserService.getUser(1);
// const inst = new UserService(1);
// inst.create();
//////////////////////////
//Работа с this
//////////////////////////
// class Payment {
//   private date: Date = new Date();
//   getDate(this: Payment) {
//     return this.date;
//   }
//   getDateArrow = () => {
//     return this.date;
//   };
// }
// const p = new Payment();
// const user = {
//   id: 1,
//   paymentDate: p.getDate.bind(p),
//   paymentDateArrow: p.getDateArrow,
// };
// // console.log(p.getDate());
// // console.log(user.paymentDate());
// // console.log(user.paymentDateArrow());
// class PaymentPersistent extends Payment {
//   save() {
//     return super.getDate(); //super -- обращение к родителю
//   }
//   save1() {
//     return this.getDateArrow();
//   }
// }
// console.log(new PaymentPersistent().save());
// console.log(new PaymentPersistent().getDateArrow);
//////////////////////////
//Типизация this
//////////////////////////
// class UserBuilder {
//   name: string;
//   setName(name: string): this {
//     this.name = name;
//     return this;
//   }
//   isAdmin(): this is AdminBuilder {
//     return this instanceof AdminBuilder;
//   }
// }
// class AdminBuilder extends UserBuilder {
//   roles: string[];
// }
// const res = new UserBuilder().setName('Вася!');
// const res2 = new AdminBuilder().setName('Петя');
// let user: UserBuilder | AdminBuilder = new UserBuilder();
// if (user.isAdmin()) {
//   console.log(user);
// } else {
//   console.log(user);
// }
//////////////////////////
//Абстрактные классы
//////////////////////////
// abstract class Controller {
//   abstract handle(req: any): void;
//   handleWithLogs(req: any) {
//     console.log('start');
//     this.handle(req);
//     console.log('end');
//   }
// }
// class UserController extends Controller {
//   handle(req: any): void {
//     console.log(req);
//   }
// }
// //new Controller() --- error
// const c = new UserController();
// c.handleWithLogs('Request');
