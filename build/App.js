"use strict";
// let a: number = 500;
// let b: number = 87;
// let res: number = a + b;
// console.log(res);
Object.defineProperty(exports, "__esModule", { value: true });
///
// type FullName = {
//     firstName: string,
//     lastName: string,
// }
// // function getFullName(EntityUsr: {firstName: string,
// //     lastName: string})  {
// //     return `${EntityUsr.firstName} ${EntityUsr.lastName}`
// // }
// function getFullName(EntityUsr: FullName)  {
//     return `${EntityUsr.firstName} ${EntityUsr.lastName}`
// }
// let user = {
//     firstName: 'Vlad',
//     lastName: 'Asafev',
//     city: 'Moscow',
//     age: 24
// };
// console.log(getFullName(user));
//import us1 from './tests/013 test1.json'
//let users:any = [];
// let user = fetch('./tests/013 test1.json').then((res) => res.json())
// .then(json => console.log(json)).catch(error => console.error('Ошибка при чтении файла:', error));
// console.log(user);
///////////////////////
//test1
/////////////////////
// type user = {
//     officeId: number,
//     isOpened: boolean,
//     contacts: {
//         phone: string,
//         email: string,
//         address: {
//             city: string
//         }
//     },
// }
//////////////
////////Array
///////////////
// let arr: string[] = ['edfw', 'weffw', 'Dub'];
// for (let key of arr) {
//     console.log(key);
// }
// let arr1 = arr
// .filter(s => s !== 'weffw')
// .map((s) => s + '! ')
// .reduce((a, b) => a+b);
// console.log(arr1);
//Tuples
// let arr: [number, string, ...boolean[]] = [1, 'Dev', true, false, true, true];
//Readonly
// let arr:readonly [number, string] = [1, 'Dev'];
// let arr2: ReadonlyArray<string> = ['ewfew', 'ewdef', 'wefweqfd'];
// let arr1: Array<string> = ['ewfew', 'ewdef', 'wefweqfd'];
//Enum
// enum EtoChislo {
//     SUCCSESS,
//     INPROCESS,
//     FAILD
// }
// const res = {
//     id: 1,
//     statusCode: EtoChislo.SUCCSESS
// }
// if (res.statusCode === EtoChislo.SUCCSESS) {
// }
//Типизация функции (задание из теста 2)
// enum StatFaqs {
//     PUBLISHED ="published" ,
//     DRAFT = "draft",
//     DELETED = "deleted",
// }
// type ReqUser = {
//     topicId: number,
//     status: StatFaqs
// }
// type serverResponse = {
// 	question: string,
// 	answer: string,
//     tags: string[],
//     likes: number,
//     status: StatFaqs
//  }
// async function getFaqs(req: ReqUser): Promise<serverResponse[]> {
//     const res = await fetch('./faqs', {
//         method: 'POST',
//         body: JSON.stringify(req)
//     })
//     const data = await res.json();
//     return data;
// }
// // /* Ответ */
// //  type serverResponse = {
// // 	question: string,
// // 	answer: string
// //  }
// // [
// // 	{
// // 		"question": "Как осуществляется доставка?",
// // 		"answer": "быстро!",
// // 		"tags": [
// // 			"popular",
// // 			"new"
// // 		],
// // 		"likes": 3,
// // 		"status": "published"
// // 	}
// // ]
////////////Union
// function logId(id: string | number | boolean) {
//     if (typeof id === 'string') {
//         console.log(id);
//     } else if (typeof id === 'number') {
//         console.log(id);
//     } else {
//         console.log(id);
//     }
// }
// function logError(err: string | string[]) {
//     if (Array.isArray(err)) {
//         console.log(err);
//     } else {
//         console.log(err);
//     }
// }
// function logObj(obj: {a: number} | {b: number}) {
//     if ('a' in obj) {
//         console.log(obj.a);
//     } else {
//         console.log(obj.b);
//     }
// }
////////
////////literal types
////////
// enum ReqestTypes {
//     GET = "get",
//     POST = "post"
// }
// function fetchWithAuth(url: string, method: ReqestTypes ) {
// }
// function fetchWithAuth(url: string, method: 'get' | 'post' ) {
// }
// fetchWithAuth('s', 'get');
// let method = 'post';
// const mett = 'get';
// fetchWithAuth('e', mett);
// fetchWithAuth('d', method as "post")
///////////////
//////Type Aliases
////////////////////
// type httpMethod = 'get' | 'post';
// function fetchWithAuth(url: string, method: httpMethod  ) {
// }
// type UserType = {
//     name: string,
//     age: number,
//     skills: number[]
// }
// type Role = {
//     id: number
// }
// // type UserWithRole = {
// //     user: UserType,
// //     role: Role
// // }
// type UserWithRole = UserType & Role;
// let user: UserWithRole = {
//     name: 'Abu',
//     age: 12,
//     skills: [1, 2],
//     id: 1
// };
//////////
//////Interfaces
/////////////
// interface User {
//     name: string,
//     age: number,
//     skills: number[],
//     log: (id: number) => number
// }
// interface Role {
//     roleId: number,
// }
// interface UserWithRole extends User, Role {
// }
// type User2 ={
//     name: string,
//     age: number,
//     skills: number[],
//     log: (id: number) => number
// }
// let user: UserWithRole = {
//     name: 'Abu',
//     age: 12,
//     skills: [1, 2],
//     roleId: 1,
//     log(id) {
//         return 3;
//     }
// };
// interface UserDic {
//     [index: number]: number,
// }
// type UserDic1 = {
//   [index: number]: number,
// }
// type ud = Record<number, User>
//////
/////////Interface and Types
/////////
// interface User {
//     name : string
// }
// interface User {
//     age : number
// }
// let user : User = {
//     name: 'ewd',
//     age: 3
// }
// //с типами так нельзя соединять или дополнять
// type ID = string | number;
// interface IDI {
//     ID: string | number,
// }
//////////////
////Optional
////////////////
// interface User {
//     login: string,
//     password?: string
// }
// const user: User = {
//     login: 'ewdqed'
// }
// // function multiply(first: number, second?: number): number {
// //     if (!second) {
// //         return first * first;
// //     }
// //     return first * second;
// // }
// function multiply(first: number, second: number = 5): number {
//     if (!second) {
//         return first * first;
//     }
//     return first * second;
// }
// interface UserPro {
//     login: string,
//     password?: {
//         types: 'primary' | 'secondary',
//     },
// }
// function testPass(user: UserPro) {
//     const t = user.password?.types
// }
// function test(param?: string) {
//     const t = param ?? multiply(5);
// }
///////////////////////////
/////////test3////////////
///////////////////////////
// type ReqUser = {
//     sum: number,
// 	from: number,
// 	to: number,
// }
// interface responseUser {
//     status: 'success' | 'failed',
//     data: {
//         databaseId: number,
//         errorMessage?: string,
// 		errorCode?: number
//     }
// }
// function User(obj: ReqUser): responseUser  {
//     if (status === 'failed') {
//         return
//     }
// }
// interface ReqServ {
//  sum: number,
// 	from: number,
// 	to: number,
// }
// enum StatusCode {
//   SUCCESS = 'success',
//   FAILED = 'failed'
// }
// interface IReqServ extends ReqServ {
// }
// interface DataSucRes extends IReqServ {
//     databaseId: number;
// }
// interface DataFailedRes {
//  errorMessage: string;
// 	errorCode: number;
// }
// // interface ResServ {
// //     status: StatusCode,
// //     data: DataSucRes | DataFailedRes,
// // }
// interface ResSucc {
//     status: StatusCode.SUCCESS,
//     data: DataSucRes,
// }
// interface ResFailed {
//     status: StatusCode.FAILED,
//     data: DataFailedRes,
// }
///////////////
//Void
////////////////
// function logId(obj: number | string): void {
//     console.log(obj);
// }
// const a = logId(1);
// function multiply(a: number, b?: number ) {
//     if (!b ) {
//         return a * a;
//     }
// }
// type voidFunc = () => void;
// const f1: voidFunc = () => {
// }
// const f2: voidFunc = () => {
//     return true;
// }
// const c = f2();
// const skills = ['DevOps', 'Prog'];
// const user = {
//     s: ['s'],
// }
// skills.forEach((skill) =>user.s.push(skill));
///////////////////
//Unknown
//////////////////////
// let input: unknown;
// input = 3;
// input = ['efw', 'wfe'];
// //let res: any = input;
// function run(i: unknown) {
//     if (typeof i === 'number') {
//         i++;
//     } else {
//         i
//     }
// }
// run(input);
// //этот вар лучше, чем следующий
// (async function getData() {
//     try {
//     await fetch('')
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.message);
//     }
// }
// })()
// async function getData() {
//     try {
//     await fetch('')
// } catch (error) {
//    const e = error as Error;
//    console.log(e.message);
// }
// }
// type U1 = unknown | null;//unknown всегда
// type I1 = unknown & string;//будет тип не unknown
////////////////
//Never
///////////////
// function generateError(message: string): never {
//     throw new Error(message);
// }
// function dumpErr(): never {
//     while(true) { }
// }
// function rec(): never {
//     return rec();
// }
// type paymentActin = 'refund'|'checkout'|'reject';
// function processAction(action: paymentActin) {
//     switch(action) {
//         case 'refund': {
//             ///....
//         }
//         break;
//         case 'checkout': {
//             ///....
//         }
//         break;
//          case 'reject': {
//             ///....
//         }
//         break;
//         default: {
//             const _: never = action;
//             throw new Error('Нет такого action');
//         }
//     }
// }
// function isString(x: number | string): boolean {
//     if (typeof x === 'string') {
//         return true;
//     } else if (typeof x === 'number') {
//         return false;
//     }
//     generateError('efdewfew');
// }
////////////////////
//30. null
/////////////////////
// const n: null = null;
// const n1: any = null;
// const n2: number = null;
// const n3: string = null;
// const n4: boolean = null;
// const n5: undefined = null;
// interface User {
//     name: string;
// }
// function getUser() {
//     if (Math.random() > 0.5) {
//         return null;
//     } else {
//         return {
//           name: 'Вася'
//         } as User
//     }
// }
// const user = getUser();
// if (user) {
// const n55 = user.name;
// }
//////////////////////////
//31. Приведение типов
/////////////////////////
// let a = 5;
// let b: string = a.toString();
// let e:string = new String().valueOf();
// let f: boolean = new Boolean().valueOf();
// let c= 'fewf';
// let d: number = parseInt(c);
// //let d: number = +c;
// interface User {
//     name: string,
//     email: string,
//     login: string,
// }
// let user: User = {
//     name: 'Vasa',
//     email: 'vasiliy@mail.ru',
//     login: 'vassa'
// }
// interface Admin {
//     name:string,
//     role: number
// }
// //1 вар
// let admin: Admin = {
//     ...user,
//     role: 1
// }
// // 2 вар(предпочтительнее)
// function userToAdmin(user: User): Admin {
//     return {
//         name: user.name,
//         role: 1,
//     }
// }
///////////////////
// Type Guard
////////////////////
// interface User {
//     name: string,
//     email: string,
//     login: string,
// }
// let user: User = {
//     name: 'Vasa',
//     email: 'vasiliy@mail.ru',
//     login: 'vassa'
// }
// interface Admin {
//     name:string,
//     role: number
// }
// function logId(id: string | number) {
//     if (typeof id === 'string') {
//         console.log(id);
//     } else  {
//         console.log(id);
//     }
// }
// function isString(x: string | number): x is string {
//     return typeof x === 'string';
// }
// function logIdd(id: string | number) {
//     if (isString(id)) {
//         console.log(id);
//     } else  {
//         console.log(id);
//     }
// }
// function isAdmin(user: User | Admin): user is Admin {
//     return 'role' in user;
// }
// function isAdminAlternative(user: User | Admin) user is Admin {
//     return (user as Admin).role !== undefined;
// }
// function setRoleZero(user: User | Admin) {
//     if( isAdmin(user))  {
//         user.role = 0;
//     } else {
//         throw new Error('Пользователь не админ!');
//     }
// }
//# sourceMappingURL=App.js.map