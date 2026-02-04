"use strict";
//////////////////
//Keyof
//////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// interface IUser {
//   name: string;
//   age: number;
// }
// type KeysOfUser = keyof IUser;
// const key: KeysOfUser = 'age';
// function getValue<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// const user: IUser = {
//   name: 'Vasa',
//   age: 12,
// };
// const userName = getValue(user, 'name');
// console.log(userName);
//////////////////
//test8
//////////////////
// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
// ``` js
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// ```
// При группироке по 'group' ---->
// ``` js
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }
// ```
// interface IUser {
//   group: number;
//   name: string;
// }
// const user: IUser[] = [
//   { group: 1, name: 'a' },
//   { group: 1, name: 'b' },
//   { group: 2, name: 'c' },
// ];
// interface IGroup<T> {
//   [key: string]: T[];
// }
// type key = string | number | symbol;
// function groupingGroup<T extends Record<string, any>>(arr: T[], key: keyof T): IGroup<T> {
//   return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
//     const itemKey = item[key];
//     let currentEl = map[itemKey];
//     if (Array.isArray(currentEl)) {
//       currentEl.push(item);
//     } else {
//       currentEl = [item];
//     }
//     map[itemKey] = currentEl;
//     return map;
//   }, {});
// }
// let res = groupingGroup(user, 'group');
// console.log(res);
//////////////////
//Typeof
//////////////////
// let strOrNum: string | number;
// if (Math.random() > 0.5) {
//     strOrNum = 5;
// } else {
//     strOrNum = 'str';
// }
// if (typeof strOrNum == 'string') {
//     console.log(strOrNum);
// } else {
//     console.log(strOrNum);
// }
// let strOrNum2: typeof strOrNum;
// let user = {
//     name: 'Vaasa',
//     age: 12
// }
// type keyUser = keyof typeof user;
// enum Derection {
//     Up,
//     Down,
// }
// type d = keyof typeof Derection;
////////////////////////
//Indexed Access Types
///////////////////////
// interface Role {
//   name: string;
// }
// interface Permission {
//     endDate: Date;
// }
// interface User {
//   name: string;
//   role: Role[];
//   permission: Permission;
// }
// let user: User = {
//   name: 'Vasa111',
//   role: [],
//   permission: {
//     endDate: new Date()
//   }
// };
// //const nameUser = user.name;
// //или
// const nameUser = user['name'];
// const roleName: 'role' = 'role'
// type rolesType = User['role'];
// type rolesType2 = User[typeof roleName];
// type roleType = User['role'][number];
// type dateType = User['permission']['endDate']
// const roles  = ['admin', 'user', 'super-user'] as const;
// type roleTypes = typeof roles[number];
/////////////////////
//Conditional Types
/////////////////////
//const a: number = Math.random() > 0.5 ? 1 : 0;
// interface HTTPResponce<T extends 'success' | 'faild'> {
//     code: number;
//     data: string | Error;
//     additionalData: string | number;
// }
//next
// interface HTTPResponce<T extends 'success' | 'faild'> {
//     code: number;
//     data: T extends 'success' ? string : Error;
//     //additionalData: T extends 'success' ? string : number;
// }
// const succ: HTTPResponce<'success'> = {
//     code: 200,
//     data: 'done'
// }
// const err: HTTPResponce<'faild'> = {
//     code: 404,
//     data: new Error('ewfewfewf'),
// }
////////////////////
// class User {
//     id: number;
//     name: string;
//     // constructor(id:number, name: string) {
//     //     this.id = id;
//     //     this.name = name;
//     // }
// }
// class UserPersistent extends User {
//     dbId: string;
//     // constructor(dbId: string) {
//     //     this.dbId = dbId;
//     // }
// }
// function getUser(id: number): User;
// function getUser(dbId: string): UserPersistent;
// function getUser(dbIdOrId: string | number): User | UserPersistent  {
//     if (typeof dbIdOrId == "number") {
//         return new User();
//     } else {
//         return new UserPersistent();
//     }
// }
// type UserOrUserPersistend<T extends string | number> = T extends number ? User : UserPersistent;
// function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> /T extends string ? User : UserPersistent */ {
//     if (typeof id == 'number') {
//         return new User() as UserOrUserPersistend<T>;
//     } else {
//         return new UserPersistent() as UserOrUserPersistend<T>;
//     }
// }
// const res = getUser2(1);
// const res1 = getUser2('fe');
/////////////////////
//Inter
/////////////////////
// function runTransaction(transaction: {
//     fromTo: [string, string]
// }) {
//     console.log(transaction);
// }
// const transaction = {
//     fromTo: ['1', '1'] /**as [string, string] */
// }
// runTransaction(transaction);
// type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
/////////////////////
//Mapped Types
/////////////////////
// type Modifier = 'read' | 'create' | 'appdate';
// type UserRoles = {
//     customers?: Modifier,
//     projects?: Modifier,
//     adminPanel?: Modifier,
// }
// type ModifierToAccess<Type> = {
//     [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessprojects'>]: boolean;
// }
// //Exclude -- удалялет св-во
// /
//  //все поля становятся не обязательными
//  type ModifierToAccess<Type> = {
//   +readonly  [Property in keyof Type]+?: boolean;
// }
// ///////
// ////все поля становятся обязательными
// type ModifierToAccess<Type> = {
//     [Property in keyof Type]-?: boolean;
// }
//  */
// type UserAccess2 = ModifierToAccess<UserRoles>;
// type UserAccess1 = {
//     customers?: boolean,
//     projects?: boolean,
//     adminPanel?: boolean,
// }
/////////////////////
//Валидация форм
/////////////////////
/**
 Необходимо сделать тип для валидации
 формы, основываясь на типе формы
 */
// interface IForm {
//   name: string;
//   password: string;
// }
// const form: IForm = {
//   name: 'Вася',
//   password: '123',
// };
// interface IVal {
//   isValid: boolean;
//   errorMessage?: string;
// }
// interface IValidAccess {
//   name: IVal;
//   password: IVal;
// }
// type Modificate<Type> = {
//     [Property in keyof Type]: IValidAccess;
// }
// type UserAccess2 = Modificate<IForm>;
// const formValidation: UserAccess2 = {
//   name: { isValid: true },
//   password: { isValid: false, errorMessage: 'Должен быть длинее 5 см.' },
// };
//////////
// interface IForm {
//   name: string;
//   password: string;
// }
// const form: IForm = {
//   name: 'Вася',
//   password: '123',
// };
// const formValidation: Validation<IForm> = {
//   name: { isValid: true },
//   password: { isValid: false, errorMessage: 'Должен быть длинее 5 см.' },
// };
// type Validation<T> = {
//     [K in keyof T]: {
//         isValid: true;
//     } | {
//         isValid: false;
//         errorMessage: string;
//     }
// }
/////////////////////////////
//Template Literal Types
////////////////////////////
// type ReadOrWrite = 'read' | 'write';
// type Bulk = 'bulk' | '';
// //type Access = `can${Uppercase<ReadOrWrite>}`;
// type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;
// type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
// type T = ReadOrWriteBulk<Access>;
// type ErrorOrSuccess = 'error' | 'success';
// type ResponseT = {
//     result: `http://${Capitalize<ErrorOrSuccess>}`
// }
// const a: ResponseT = {
//     result: 'http://Success',
// }
