import { count } from 'console';
import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    handle() {
        obj.count++;
    },

    subscribe() {
        EventEmitter.on('click', this.handle);
    },
    unsubscribe() {
        EventEmitter.off('click', this.handle);
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};
