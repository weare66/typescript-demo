"use strict";
//Типизация сторонней библиотеки, т.е. берём метод который мы используем, создаём файл с расширением ....d.ts и в нём через declare  описываем функцию, на основе действия самой функции описанной в node_modules
// import { toJson } from 'really-relaxed-json';
// const rjson = '[ one two three {foo:bar} ]';
// const json = toJson(rjson);
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(json);
////////////////////
//Пораждающие паттерны
//////////////////////////////////////////////////////
//Фабрика
//////////////////////////////////////////////////////
//1-ый вариант
// interface IInsurance {
//     id: number;
//     status: string;
//     setVehicle(vehicle: any): void;
//     submit(): Promise<boolean>;
// }
// class TFInsurance implements IInsurance {
//     id: number;
//     status: string;
//     private vehicle: any;
//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle;
//     }
//     async submit(): Promise<boolean> {
//        const res = await fetch('', {
//         method: 'POST',
//         body: JSON.stringify({vehicle: this.vehicle})
//     });
//     const date = await res.json();
//     return date.isSuccess;
//     }
// }
// class ABInsurance implements IInsurance {
//         id: number;
//     status: string;
//     private vehicle: any;
//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle;
//     }
//     async submit(): Promise<boolean> {
//        const res = await fetch('ab', {
//         method: 'POST',
//         body: JSON.stringify({vehicle: this.vehicle})
//     });
//     const date = await res.json();
//     return date.yes;
//     }
// }
// abstract class InsuranceFactory {
//     db: any;
//     abstract createInsurance(): IInsurance ;
//     saveHistory(ins: IInsurance) {
//         this.db.save(ins.id, ins.status);
//     }
// }
// class TFInsuranceFactory extends InsuranceFactory {
//     createInsurance(): TFInsurance {
//         return new TFInsurance();
//     }
// }
// class ABInsuranceFactory extends InsuranceFactory {
//     createInsurance(): ABInsurance {
//          return new ABInsurance()
//     }
// }
// const tfInsuranceFactory = new TFInsuranceFactory();
// const ins = tfInsuranceFactory.createInsurance();
// tfInsuranceFactory.saveHistory(ins);
// //2 вариант реализации
// const  INSURANCE_TYPE = {
//     tf: TFInsurance,
//     ab: ABInsurance,
// };
// type IT = typeof INSURANCE_TYPE;
// class InsuranseFactoryAlt {
//     db: any;
//     createInsurance<T extends keyof IT>(type: T): IT[T]  {
//         return INSURANCE_TYPE[type];
//     }
//     saveHistory(ins: IInsurance) {
//         this.db.save(ins.id, ins.status);
//     }
// }
// const insuranseFactoryAlt = new InsuranseFactoryAlt();
// const ins2 = new (insuranseFactoryAlt.createInsurance('tf'));
// insuranseFactoryAlt.saveHistory(ins2);
//////////////////////////////////////////////////////
//Singleton(Одиночка)
//////////////////////////////////////////////////////
// class MyMap {
//   private static instance: MyMap;
//   map: Map<number, string> = new Map();
//   private constructor() {}
//   clean() {
//     this.map = new Map();
//   }
//   public static get(): MyMap {
//     if (!MyMap.instance) {
//       MyMap.instance = new MyMap();
//     }
//     return MyMap.instance;
//   }
// }
// class Service1 {
//   addMap(key: number, value: string) {
//     const myMap = MyMap.get();
//     myMap.map.set(key, value);
//   }
// }
// class Service2 {
//   getKeys(key: number) {
//     const myMap = MyMap.get();
//     console.log(myMap.map.get(key));
//     myMap.clean();
//     console.log(myMap.map.get(key));
//   }
// }
// new Service1().addMap(1, 'Работает!');
// new Service2().getKeys(2);
//////////////////////////////////////////////////////
//Прототип
//////////////////////////////////////////////////////
// interface Prototype<T> {
//   clone(): T;
// }
// class UserHistory implements Prototype<UserHistory> {
//   createdAt: Date;
//   constructor(public email: string, public name: string) {
//     this.createdAt = new Date();
//   }
//   clone(): UserHistory {
//     let target = new UserHistory(this.email, this.name);
//     target.createdAt = this.createdAt;
//     return target;
//   }
// }
// let user = new UserHistory('efef', 'eefeqwf');
// console.log(user);
// let user2 = user.clone();
// user2.email = 'wewet';
// console.log(user2);
/////////////////////////////////////////
//Builder(Строитель)
////////////////////////////////////////
// enum ImageFormat {
//   Png = 'png',
//   Jpeg = 'jpeg',
// }
// interface IResolution {
//   width: number;
//   height: number;
// }
// interface IImageConversion extends IResolution {
//   format: ImageFormat;
// }
// class ImageBuildeer {
//   private formats: ImageFormat[] = [];
//   private resolution: IResolution[] = [];
//   addPng() {
//     if (this.formats.includes(ImageFormat.Png)) {
//       return this;
//     }
//     this.formats.push(ImageFormat.Png);
//     return this;
//   }
//   addJpeg() {
//     if (this.formats.includes(ImageFormat.Jpeg)) {
//       return this;
//     }
//     this.formats.push(ImageFormat.Jpeg);
//     return this;
//   }
//   addResolution(width: number, height: number) {
//     this.resolution.push({ width, height });
//     return this;
//   }
//   build(): IImageConversion[] {
//     const res: IImageConversion[] = [];
//     for (const r of this.resolution) {
//       for (const f of this.formats) {
//         res.push({
//           format: f,
//           width: r.width,
//           height: r.height,
//         });
//       }
//     }
//     return res;
//   }
// }
// console.log(
//   new ImageBuildeer().addJpeg().addPng().addResolution(100, 50).addResolution(200, 50).build(),
// );
////////////////////////////
//Структурные паттерны
////////////////////////////
////////////////////////////
//Мост
////////////////////////////
// interface IProvider {
//   sendMassege(massege: string): void;
//   connect(config: unknown): void;
//   disconnect(): void;
// }
// class TelegramProvider implements IProvider {
//   sendMassege(massege: string): void {
//     console.log(massege);
//   }
//   connect(config: string): void {
//     console.log(config);
//   }
//   disconnect(): void {
//     console.log('Disconected TG');
//   }
// }
// class WatsUpProvider implements IProvider {
//   sendMassege(massege: string): void {
//     console.log(massege);
//   }
//   connect(config: string): void {
//     console.log(config);
//   }
//   disconnect(): void {
//     console.log('Disconected Wats');
//   }
// }
// class NotificationSender {
//   constructor(private provider: IProvider) {}
//   send() {
//     this.provider.connect('connect');
//     this.provider.sendMassege('message');
//     this.provider.disconnect();
//   }
// }
// class DelayNotificationSendere extends NotificationSender {
//   constructor(provider: IProvider) {
//     super(provider);
//   }
//   sendDelayed() {}
// }
// const sender = new NotificationSender(new TelegramProvider());
// sender.send();
// const sender2 = new NotificationSender(new WatsUpProvider());
// sender2.send();
//////////////////////////
//Фасад
//////////////////////////
// class Notify {
//   send(template: string, to: string) {
//     console.log(`Отправлю ${template}: ${to}`);
//   }
// }
// class Log {
//   log(massege: string) {
//     console.log(massege);
//   }
// }
// class Template {
//   private temletes = [{ name: 'other', temlete: '<h1>Шаблон</h1>' }];
//   getByName(name: string) {
//     return this.temletes.find((t) => t.name === name);
//   }
// }
// class NotificationFacade {
//   private notify: Notify;
//   private logger: Log;
//   private template: Template;
//   constructor() {
//     this.notify = new Notify();
//     this.logger = new Log();
//     this.template = new Template();
//   }
//   send(to: string, temleteName: string) {
//     const data = this.template.getByName(temleteName);
//     if (!data) {
//       this.logger.log('Не найден шаблон');
//       return;
//     }
//     this.notify.send(data.temlete, to);
//     this.logger.log('Шаблон отправлен');
//   }
// }
// const s = new NotificationFacade();
// s.send('a@a.ru', 'other');
//////////////////////////
//Адаптер
//////////////////////////
// class KVDatabase {
//   private db: Map<string, string> = new Map();
//   save(key: string, value: string) {
//     this.db.set(key, value);
//   }
// }
// class PersistentDB {
//   savePersistent(data: Object) {
//     console.log(data);
//   }
// }
// class PersistentDBAdapter extends KVDatabase {
//   constructor(public database: PersistentDB) {
//     super();
//   }
//   override save(key: string, value: string): void {
//     this.database.savePersistent({ key, value });
//   }
// }
// function run(base: KVDatabase) {
//   base.save('key', 'myMap');
// }
// run(new PersistentDBAdapter(new PersistentDB()));
//////////////////////////
//Proxy
//////////////////////////
// interface IPaymentAPI {
//   getPaymentDitail(id: number): IPaymentDitail | undefined;
// }
// interface IPaymentDitail {
//   id: number;
//   sum: number;
// }
// class PaymentAPI implements IPaymentAPI {
//   private db = [{ id: 1, sum: 1000000 }];
//   getPaymentDitail(id: number): IPaymentDitail | undefined {
//     return this.db.find((d) => d.id == id);
//   }
// }
// class PaymentAccessProxy implements IPaymentAPI {
//   constructor(
//     private api: IPaymentAPI,
//     private userId: number,
//   ) {}
//   getPaymentDitail(id: number): IPaymentDitail | undefined {
//     if (this.userId === 1) {
//       return this.api.getPaymentDitail(id);
//     }
//     console.log('Попытка получить данные платежа!');
//     return undefined;
//   }
// }
// let proxy1 = new PaymentAccessProxy(new PaymentAPI(), 1);
// console.log(proxy1.getPaymentDitail(1));
// let proxy2 = new PaymentAccessProxy(new PaymentAPI(), 3);
// console.log(proxy2.getPaymentDitail(3));
//////////////////////////
//Composite
//////////////////////////
// abstract class DeliveryItem {
//   items: DeliveryItem[] = [];
//   addItem(item: DeliveryItem) {
//     this.items.push(item);
//   }
//   getItemPrices(): number {
//     return this.items.reduce((acc: number, i: DeliveryItem) => (acc += i.getPrice()), 0);
//   }
//   abstract getPrice(): number;
// }
// class DeliveryShop extends DeliveryItem {
//   constructor(private deliveryFee: number) {
//     super();
//   }
//   getPrice(): number {
//     return this.getItemPrices() + this.deliveryFee;
//   }
// }
// class Package extends DeliveryItem {
//   getPrice(): number {
//     return this.getItemPrices();
//   }
// }
// class Product extends DeliveryItem {
//   constructor(public price: number) {
//     super();
//   }
//   getPrice(): number {
//     return this.price;
//   }
// }
// const shop = new DeliveryShop(100);
// shop.addItem(new Product(1000));
// const pack1 = new Package();
// pack1.addItem(new Product(200));
// pack1.addItem(new Product(300));
// shop.addItem(pack1);
// const pack2 = new Package();
// pack2.addItem(new Product(3300));
// pack2.addItem(new Product(3040));
// shop.addItem(pack2);
// console.log(shop.getPrice());
//////////////////////////////////////
//////////////////////////////////////
//Поведенческие паттерны
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//Цепочка вызоыов
//////////////////////////////////////
// interface IMiddleware {
//   next(mid: IMiddleware): IMiddleware;
//   handle(request: any): any;
// }
// abstract class AbstractMiddleware implements IMiddleware {
//   private nextMiddleWare: IMiddleware;
//   next(mid: IMiddleware): IMiddleware {
//     this.nextMiddleWare = mid;
//     return mid;
//   }
//   handle(request: any) {
//     if (this.nextMiddleWare) {
//       return this.nextMiddleWare.handle(request);
//     }
//     return;
//   }
// }
// class AuthMiddleWare extends AbstractMiddleware {
//   override handle(request: any) {
//     console.log('AuthMiddleWare');
//     if (request.userId === 1) {
//       return super.handle(request);
//     }
//     return { error: 'Вы не авторизованы' };
//   }
// }
// class ValidateMiddleWare extends AbstractMiddleware {
//   override handle(request: any) {
//     console.log('ValidateMiddleWare');
//     if (request.body) {
//       return super.handle(request);
//     }
//     return { error: 'Нет body' };
//   }
// }
// class Controller extends AbstractMiddleware {
//   override handle(request: any) {
//     console.log('Controller');
//     return { succes: request };
//   }
// }
// const controller = new Controller();
// const validate = new ValidateMiddleWare();
// const auth = new AuthMiddleWare();
// auth.next(validate).next(controller);
// console.log(
//   auth.handle({
//     userId: 1,
//     body: 'I am Ok',
//   }),
// );
//////////////////////////////////////
//Посредник
//////////////////////////////////////
// interface Mediator {
//   notify(sender: string, event: string): void;
// }
// abstract class Midiated {
//   mediator: Mediator;
//   setMediator(mediator: Mediator) {
//     this.mediator = mediator;
//   }
// }
// class Notifications {
//   send() {
//     console.log('отправляю уведомление');
//   }
// }
// class Log {
//   log(massege: string) {
//     console.log(massege);
//   }
// }
// class EventHendler extends Midiated {
//   myEvent() {
//     this.mediator.notify('EventHendler', 'myEvent');
//   }
// }
// class NotificationMediator implements Mediator {
//   constructor(
//     public notification: Notifications,
//     public logger: Log,
//     public eventHendler: EventHendler,
//   ) {}
//   notify(_: string, event: string): void {
//     switch (event) {
//       case 'myEvent':
//         this.notification.send();
//         this.logger.log('Отправленно!');
//         break;
//     }
//   }
// }
// const heandler = new EventHendler();
// const logger = new Log();
// const notification = new Notifications();
// const m = new NotificationMediator(notification, logger, heandler);
// heandler.setMediator(m);
// heandler.myEvent();
//////////////////////////////////////
//Команда
//////////////////////////////////////
// class User {
//   constructor(public userId: number) {}
// }
// class CommandHistory {
//   public commands: Command[] = [];
//   push(command: Command) {
//     this.commands.push(command);
//   }
//   remove(command: Command) {
//     this.commands = this.commands.filter((c) => c.commandID !== command.commandID);
//   }
// }
// abstract class Command {
//   public commandID: number;
//   abstract execute(): void;
//   constructor(public history: CommandHistory) {
//     this.commandID = Math.random();
//   }
// }
// class AddUserCommand extends Command {
//   constructor(
//     private user: User,
//     private reciver: UserService,
//     history: CommandHistory,
//   ) {
//     super(history);
//   }
//   execute(): void {
//     this.reciver.saveUser(this.user);
//     this.history.push(this);
//   }
//   //откат
//   undo() {
//     this.reciver.deleteUser(this.user.userId);
//     this.history.remove(this);
//   }
// }
// class UserService {
//   saveUser(user: User) {
//     console.log(`Сохраняю пользоватекля с id: ${user.userId} `);
//   }
//   deleteUser(userId: number) {
//     console.log(`Удаляем пользователя с id: ${userId}`);
//   }
// }
// class Controller {
//   reciver: UserService;
//   history: CommandHistory = new CommandHistory();
//   addReciver(reciver: UserService) {
//     this.reciver = reciver;
//   }
//   run() {
//     const addUserCommand = new AddUserCommand(new User(1), this.reciver, this.history);
//     addUserCommand.execute();
//     console.log(addUserCommand.history);
//     addUserCommand.undo();
//     console.log(addUserCommand.history);
//   }
// }
// const controller = new Controller();
// controller.addReciver(new UserService());
// controller.run();
//////////////////////////////////////
//Состояние
//////////////////////////////////////
// class DocumentItem {
//   public text: string;
//   private state: DocumentItemState;
//   constructor() {
//     this.setState(new DraftDocItemState());
//   }
//   getState() {
//     return this.state;
//   }
//   setState(state: DocumentItemState) {
//     this.state = state;
//     this.state.setContext(this);
//   }
//   publishDoc() {
//     this.state.publish();
//   }
//   deleteDoc() {
//     this.state.delete();
//   }
// }
// abstract class DocumentItemState {
//   public name: string;
//   public item: DocumentItem;
//   public setContext(item: DocumentItem) {
//     this.item = item;
//   }
//   public abstract publish(): void;
//   public abstract delete(): void;
// }
// class DraftDocItemState extends DocumentItemState {
//   constructor() {
//     super();
//     this.name = 'DraftDoc';
//   }
//   public publish(): void {
//     console.log(`На сайт отправлен текст ${this.item.text}`);
//     this.item.setState(new PublishDocItemState());
//   }
//   public delete(): void {
//     console.log('Документ удалён!');
//   }
// }
// class PublishDocItemState extends DocumentItemState {
//   constructor() {
//     super();
//     this.name = 'PublishDoc';
//   }
//   public publish(): void {
//     console.log('Нельзя публиковать опубликованный документ');
//   }
//   public delete(): void {
//     console.log('Снято с публикации');
//     this.item.setState(new DraftDocItemState());
//   }
// }
// const item = new DocumentItem();
// item.text = 'Мой пост.';
// console.log(item.getState());
// item.publishDoc();
// console.log(item.getState());
// item.publishDoc();
// item.deleteDoc();
// console.log(item.getState());
//////////////////////////////////////
//Стратегия
//////////////////////////////////////
// class User {
//   githubToken: string;
//   jwtToken: string;
// }
// interface AuthStrategy {
//   auth(user: User): boolean;
// }
// class Auth {
//   constructor(private srategy: AuthStrategy) {}
//   public setStrategy(srategy: AuthStrategy) {
//     this.srategy = srategy;
//   }
//   public authUser(user: User): boolean {
//     return this.srategy.auth(user);
//   }
// }
// class JWTStrategy implements AuthStrategy {
//   auth(user: User): boolean {
//     if (user.jwtToken) {
//       return true;
//     }
//     return false;
//   }
// }
// class GithubStrategy implements AuthStrategy {
//   auth(user: User): boolean {
//     if (user.githubToken) {
//       //идём в API
//       return true;
//     }
//     return false;
//   }
// }
// const user = new User();
// user.jwtToken = 'token';
// const auth = new Auth(new JWTStrategy());
// console.log(auth.authUser(user));
// auth.setStrategy(new GithubStrategy());
// console.log(auth.authUser(user));
//////////////////////////////////////
//Iterator
/////////////////////////////////////
// class Task {
//   constructor(public priority: number) {}
// }
// class TasksList {
//   private tasks: Task[] = [];
//   public sortByPriority() {
//     this.tasks = this.tasks.sort((a, b) => {
//       if (a.priority > b.priority) {
//         return 1;
//         // a.priority - b.priority
//       } else if (a.priority < b.priority) {
//         return -1;
//         // b.priority - a.priority;
//       } else {
//         return 0;
//       }
//     });
//   }
//   public addTask(task: Task) {
//     this.tasks.push(task);
//   }
//   public getTask() {
//     return this.tasks;
//   }
//   public count() {
//     return this.tasks.length;
//   }
//   public getIterator() {
//     return new PriorityTaskIterator(this);
//   }
// }
// interface IIterator<T> {
//   current(): T | undefined;
//   next(): T | undefined;
//   prev(): T | undefined;
//   index(): number;
// }
// class PriorityTaskIterator implements IIterator<Task> {
//   private position: number = 0;
//   private taskList: TasksList;
//   constructor(taskList: TasksList) {
//     taskList.sortByPriority();
//     this.taskList = taskList;
//   }
//   current(): Task | undefined {
//     return this.taskList.getTask()[this.position];
//   }
//   next(): Task | undefined {
//     this.position += 1;
//     return this.taskList.getTask()[this.position];
//   }
//   prev(): Task | undefined {
//     this.position -= 1;
//     return this.taskList.getTask()[this.position];
//   }
//   index(): number {
//     return this.position;
//   }
// }
// const taskList = new TasksList();
// taskList.addTask(new Task(8));
// taskList.addTask(new Task(7));
// taskList.addTask(new Task(6));
// const iterator = taskList.getIterator();
// console.log(iterator.current());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.prev());
// console.log(iterator.index());
//////////////////////////////////////
//Шаблонный метод
/////////////////////////////////////
class Form {
    name;
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }
    log(data) {
        this.log(data);
    }
}
class FirstAPI extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log(`Отправляю ${data}!`);
    }
}
class SecondAPI extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log(`Отправляю ${data}!`);
    }
}
const form1 = new FirstAPI();
form1.save(new Form('Vasa'));
const form2 = new SecondAPI();
form2.save(new Form('ew qwg'));
