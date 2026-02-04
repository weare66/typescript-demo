////////////////////////////////////
//59. Пример встроенных generic
////////////////////////////////////

// const arr: Array<number> = [1, 2, 3];

// async function name() {
//   const a = await new Promise<number>((resolve, reject) => {
//     resolve(1);
//   });
// }

// //Record<key, value>// типизирует обЪект с одинаковыми типами значений
// const record: Record<string, boolean> = {
//   drive: true,
//   kpp: false,
// };

////////////////////////////////////
//60. Пишем функцию с generic
////////////////////////////////////

// function Midleware<T>(date: T): T {
//   console.log(date);
//   return date;
// }

// let res = Midleware<string>('10');

// function getsplitedHalf<T>(data: Array<T>): Array<T> {
//     const l = data.length / 2;
//     return data.splice(0, 1);
// }

// getsplitedHalf<number>([1, 3, 4]);

/////////////////////////////////////////
//61. Функция преобразования в строку
////////////////////////////////////////

/**
 *
 * необходимо написать функцию toString, которая принимает любой тип
 * и возвращает его строковое представление. Если не может, то
 * возвращает undefined
 *
 */

//type Strin = () => number | undefined;

// function toString<T>(data: any): string | undefined {
//   if (typeof data == 'object' || typeof data == 'number' || typeof data == 'string') {
//     return data.toString();
//   } else {
//     return undefined;
//   }
// }

// function toString<T>(data: T): string | undefined {
//   if (Array.isArray(data)) {
//     return data.toString();
//   }
//   switch (typeof data) {
//     case 'string':
//       return data;
//     case 'number':
//     case 'bigint':
//     case 'boolean':
//     case 'function':
//     case 'symbol':
//       return data.toString();

//     case 'object':
//       return JSON.stringify(data);
//     default:
//       return undefined;
//   }
// }

// console.log(toString(3));
// console.log(toString(true));
// console.log(toString(['a', 'b']));
// console.log(toString({ a: 1 }));

///////////////////////////////
//Использование в типах
//////////////////////////////

// function logMiddleware<T>(data: T): T {
//   console.log(data);
//   return data;
// }

// function getSplitHalf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2;
//   return data.splice(0, 1);
// }

// console.log(getSplitHalf<number>([1, 2, 3]));

// const split: <T>(data: Array<T>) => Array<T> = getSplitHalf;
// const split1: <Y>(data: Array<Y>) => Array<Y> = getSplitHalf;

// interface ILogLine<T> {
//   timeStamp: Date;
//   data: T;
// }

// type logLine<T> = {
//   timeStamp: Date;
//   data: T;
// };

// const logLine: ILogLine<{ a: number }> = {
//   timeStamp: new Date(),
//   data: {
//     a: 1,
//   },
// };

////////////////////////
//Ограничение generic
////////////////////////

// class Veicle {
//     run: number;

// }

// function kmToMile<T extends Veicle>(veicle: T): T {
//     veicle.run = veicle.run / 0.62;
//     return veicle;
// }

// class LCV extends Veicle {
//     capacity: number;
// }

// let res = kmToMile(new Veicle());
// let res1 = kmToMile(new LCV());

// interface Veicle {
//   run: number;
// }

// function kmToMile<T extends Veicle>(veicle: T): T {
//   veicle.run = veicle.run / 0.62;
//   return veicle;
// }

// interface LCV extends Veicle {
//   capacity: number;
// }
// kmToMile({ run: 1 });
// //
// function logId<T extends string | number , Y>(id: T, additionData: Y): {id: T, data: Y} {
//     console.log(id);
//     console.log(additionData);

//     return {id, data: additionData}

// }

///////////
//test 9
///////////

// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

// ``` js
// const data = [
// 	{ id: 2, name: 'Петя' },
// 	{ id: 1, name: 'Вася' },
// 	{ id: 3, name: 'Надя' },
// ];
// ```

// const data = [
//   { id: 2, name: 'Петя' },
//   { id: 1, name: 'Вася' },
//   { id: 3, name: 'Надя' },
// ];

// interface ID {
//   id: number;
// }

// function sortObj<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
//   return data.sort((a, b) => {
//     switch (type) {
//       case 'asc':
//         return a.id - b.id;

//       case 'desc':
//         return b.id - a.id;
//     }
//   });
// }

// console.log(sortObj(data, 'desc'));
// console.log(sortObj(data));

/////////////////////////////////
//Generic классы
/////////////////////////////////

// class Resp<D, E> {
//   data?: D;
//   error?: E;

//   constructor(data?: D, error?: E) {
//     if (data) {
//       this.data = data;
//     }
//     if (error) {
//       this.error = error;
//     }
//   }
// }

// const res = new Resp<string, number>('dfew', 32);

// class HttpRes<F> extends Resp<string, number> {
//   code: F;

//   setCode(code: F) {
//     this.code = code;
//   }
// }

// const res2 = new HttpRes<number>();

/////////////////////////////////
//Mixins
/////////////////////////////////

type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accardion {
  isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccardionType = GConstructor<Accardion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

function ExtendedList<TBase extends ListType & AccardionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AccordioList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordioList);
const res = new list(['first', 'second']);
console.log(res.first());
