"use strict";
//Типизация сторонней библиотеки, т.е. берём метод который мы используем, создаём файл с расширением ....d.ts и в нём через declare  описываем функцию, на основе действия самой функции описанной в node_modules
// import { toJson } from 'really-relaxed-json';
// const rjson = '[ one two three {foo:bar} ]';
// const json = toJson(rjson);
Object.defineProperty(exports, "__esModule", { value: true });
class Lead {
    name;
    phone;
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    observers = [];
    state;
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotifictionService {
    update(subject) {
        console.log(`NotifictionService получил уведомление`);
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log(`LeadService получил уведомление`);
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('Антон', '54247');
const s1 = new NotifictionService();
const s2 = new LeadService();
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
