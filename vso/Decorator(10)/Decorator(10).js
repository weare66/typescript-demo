"use strict";
///////////////////////////////
///////////////////////////////
//Декораторы
///////////////////////////////
///////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
//Паттерн декоратора
///////////////////////////////
// interface IUserService {
//   users: number;
//   getUserServise(): number;
// }
// class UserService implements IUserService {
//   users: number = 1000;
//   getUserServise(): number {
//     return this.users;
//   }
// }
// function isNullUser(obj: IUserService) {
//   obj.users = 0;
//   return obj;
// }
// function logsUser(obj: IUserService) {
//   console.log('User: ' + obj.users);
//   return obj;
// }
// console.log(new UserService().getUserServise());
// console.log(isNullUser(new UserService()).getUserServise());
// console.log(logsUser(isNullUser(new UserService())).getUserServise());
///////////////////////////////
//Декоратор класса
///////////////////////////////
// interface IUserService {
//   users: number;
//   getUserServise(): number;
// }
// @isNullUser
// @treeUserAdvanced
// class UserService implements IUserService {
//   users: number;
//   getUserServise(): number {
//     return this.users;
//   }
// }
// function isNullUser(target: Function) {
//   target.prototype.users = 0;
// }
// function treeUserAdvanced<T extends { new (...args: any[]): {} }>(constractor: T) {
//   return class extends constractor {
//     users = 3;
//   };
// }
// console.log(new UserService().getUserServise());
///////////////////////////////
//Фабрика декораторов
/**
 * Фабрика- фун-я, которая возвращает новый декоратор
 */
///////////////////////////////
// interface IUserService {
//   users: number;
//   getUserServise(): number;
// }
// //@isNullUser
// @setUsers(4)
// @log()
// //@treeUserAdvanced
// //@setUserAdvanced(11)
// class UserService implements IUserService {
//   users: number;
//   getUserServise(): number {
//     return this.users;
//   }
// }
// function isNullUser(target: Function) {
//   target.prototype.users = 0;
// }
// function setUsers(users: number) {
//   console.log('setUsers init');
//   return (target: Function) => {
//     console.log('setUsers run');
//     target.prototype.users = users;
//   };
// }
// function log() {
//   console.log('log init');
//   return (target: Function) => {
//     console.log('log run');
//     console.log(target);
//   };
// }
// function setUserAdvanced(users: number) {
//   return <T extends { new (...args: any[]): {} }>(constractor: T) => {
//     return class extends constractor {
//       users = users;
//     };
//   };
// }
// function treeUserAdvanced<T extends { new (...args: any[]): {} }>(constractor: T) {
//   return class extends constractor {
//     users = 3;
//   };
// }
// console.log(new UserService().getUserServise());
////////////////////////////////////
//Декоратор CreateAt(задание)
////////////////////////////////////
/**
 * Декоратор, который добавляет свойство
 * createdAt в класс, фиксируя дату создания
 *
 *
 */
// interface IUserService {
//   users: number;
//   getUsersInDatabase(): number;
// }
// @CreatedAt
// class UserService implements IUserService {
//   users: number = 1000;
//   getUsersInDatabase(): number {
//     return this.users;
//   }
// }
// function CreatedAt<T extends { new (...args: any[]): {} }>(constractor: T) {
//   return class extends constractor {
//     createdAt = new Date();
//   };
// }
// type CreateAt = {
//   createdAt: Date;
// };
// console.log((new UserService() as UserService & CreateAt));
////////////////////////////////////
//Декоратор метода
////////////////////////////////////
// interface IUserService {
//   users: number;
//   getUsersInDatabse(): number;
// }
// class UserService implements IUserService {
//   users: number;
//   ///@Log
//     @Log()
//   getUsersInDatabse(): number {
//     throw new Error('Ошибка!');
//   }
// }
// function Log(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
// ) : TypedPropertyDescriptor<(...args: any[]) => any> | void {
//   console.log('target', target);
//   console.log('propertyKey', propertyKey);
//   console.log('descriptor', descriptor);
//   descriptor.value = () => {
//     console.log('no error');
//   };
// }
// function Log() {
//   return (
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//   ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//     console.log('target', target);
//     console.log('propertyKey', propertyKey);
//     console.log('descriptor', descriptor);
//     descriptor.value = () => {
//       console.log('no error');
//     };
//   };
// }
// console.log(new UserService().getUsersInDatabse());
////////////////////////////////////
//Задача. Декоратор перехвата ошибок
////////////////////////////////////
// interface IUserService {
//   users: number;
//   getUsersInDatabse(): number;
// }
// class UserService implements IUserService {
//   users: number = 1000;
//   @Catch({reThrow: true})
//   getUsersInDatabse(): number {
//     throw new Error('wefwef');
//   }
// }
// function Catch({reThrow}: {reThrow: boolean} = {reThrow: true}) {
//   return (
//     target: Object,
//     _: string | symbol,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//   ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//     const oldVal = descriptor.value;
//     descriptor.value = async (...args: any[]) => {
//       try {
//         const res = await oldVal?.apply(target, args);
//         return res;
//       } catch (e) {
//         if (e instanceof Error) {
//           console.log(e.message);
//           if (reThrow) {
//             throw e;
//           }
//         }
//       }
//     };
//   };
// }
// console.log(new UserService().getUsersInDatabse());
////////////////////////////////////
//Декоратор св-ва
////////////////////////////////////
// interface IUserService {
//   users: number;
//   getUsersInDatabase(): number;
// }
// class UserService implements IUserService {
//   @Max(100)
//   users: number;
//   getUsersInDatabase(): number {
//     throw new Error('Method not implemented.');
//   }
// }
// function Max(max: number) {
//   return (target: Object, propertyKey: string | symbol) => {
//     let value: number;
//     const setter = function (newValue: number) {
//       if (newValue > max) {
//         console.log(`Нельзя установить значение больше ${max}`);
//       } else {
//         value = newValue;
//       }
//     };
//     const getter = function () {
//       return value;
//     };
//     Object.defineProperty(target, propertyKey, {
//       set: setter,
//       get: getter,
//     });
//   };
// }
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);
// userService.users = 1000000;
// console.log(userService.users);
////////////////////////////////////
//Декоратор accessor
////////////////////////////////////
// interface IUserService {
//   getUsersInDatabase(): number;
// }
// class UserService implements IUserService {
//   private _users: number;
//   @Log()
//   set users(num: number) {
//     this._users = num;
//   }
//   get users() {
//     return this._users;
//   }
//   getUsersInDatabase(): number {
//     throw new Error('Method not implemented.');
//   }
// }
// function Log() {
//   return (target: Object, _: string | symbol, descriptor: PropertyDescriptor) => {
//     const set = descriptor.set;
//     descriptor.set = (...args: any) => {
//       console.log(args);
//       set?.apply(target, args);
//     };
//   };
// }
// const userService = new UserService();
// userService.users = 1;
// userService.users = 2;
// console.log(userService.users);
////////////////////////////////////
//Декоратор параметра
////////////////////////////////////
// interface IUserService {
//   getUsersInDatabase(): number;
// }
// class UserService implements IUserService {
//   private _users: number;
//   getUsersInDatabase(): number {
//     return this._users;
//   }
//   setUsersInDatabase(@Pozitive() nums: number, @Pozitive() _: number): void {
//     this._users = nums;
//   }
// }
// function Pozitive() {
//   return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
//     console.log(target);
//     console.log(propertyKey);
//     console.log(parameterIndex);
//   };
// }
// const userService = new UserService();
////////////////////////////////////
//Методанные
////////////////////////////////////
//////////////////////////////////
//Методанные
//////////////////////////////////
// const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
// import 'reflect-metadata';
// interface IUserService {
//   getUsersInDatabase(): number;
// }
// class UserService implements IUserService {
//   private _users: number;
//   getUsersInDatabase(): number {
//     return this._users;
//   }
//   @Validate()
//   setUsersInDatabase(@Pozitive() nums: number): void {
//     this._users = nums;
//   }
// }
// function Pozitive() {
//   return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
//     //Reflect.getOwnMetadata() // метод лдля получения методанных
//     console.log(Reflect.getOwnMetadata('design: type', target, propertyKey));
//     console.log(Reflect.getOwnMetadata('design: paramtypes', target, propertyKey));
//     console.log(Reflect.getOwnMetadata('design: returntypes', target, propertyKey));
//     let existParams: number[] =
//       Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
//     existParams.push(parameterIndex);
//     Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
//   };
// }
// function Validate() {
//   return (
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//   ) => {
//     let method = descriptor.value;
//     descriptor.value = function (...args: any) {
//       let positiveParams: number[] =
//         Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
//       if (positiveParams) {
//         for (let index of positiveParams) {
//           if (args[index] < 0) {
//             throw new Error('Число должно быть больше 0!');
//           }
//         }
//       }
//       return method?.apply(this, args);
//     };
//   };
// }
// const userService = new UserService();
// console.log(userService.setUsersInDatabase(10));
// console.log(userService.setUsersInDatabase(-1));
//# sourceMappingURL=Decorator(10).js.map