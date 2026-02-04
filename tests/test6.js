"use strict";
// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(massage) {
        console.log(massage);
    }
    logWithDate(massage) {
        this.printDate(new Date());
        this.log(massage);
    }
}
let logger = new MyLogger();
logger.logWithDate('Моё сообщение!');
//# sourceMappingURL=test6.js.map