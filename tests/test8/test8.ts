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

interface IUser {
  group: number;
  name: string;
}

const user: IUser[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function groupingGroup<T extends Record<string, any>>(arr: T[], key: keyof T): IGroup<T> {
  return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];

    let currentEl = map[itemKey];
    if (Array.isArray(currentEl)) {
      currentEl.push(item);
    } else {
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
