"use strict";
////////////////////////////////////
//59. Пример встроенных generic
////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    items;
    constructor(items) {
        this.items = items;
    }
}
class Accardion {
    isOpened;
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordioList {
    items;
    isOpened;
    constructor(items) {
        this.items = items;
    }
}
const list = ExtendedList(AccordioList);
const res = new list(['first', 'second']);
console.log(res.first());
//# sourceMappingURL=Generics(07).js.map