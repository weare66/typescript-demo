"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const user = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function groupingGroup(arr, key) {
    return arr.reduce((map, item) => {
        const itemKey = item[key];
        let currentEl = map[itemKey];
        if (Array.isArray(currentEl)) {
            currentEl.push(item);
        }
        else {
            currentEl = [item];
        }
        map[itemKey] = currentEl;
        return map;
    }, {});
}
let res = groupingGroup(user, 'group');
console.log(res);
// function groupingGroup(arr: IUser[], key: number) {
// }
// type KeyOfUser = keyof IUser;
// const key: KeyOfUser = 'group';
// function groupingGroup<T, 	K extends keyof T>(arr: T[], key: K):  {
// 	arr.map((user) => {
// 		user.
// 	})
// }
//# sourceMappingURL=test8.js.map