import {ListProps} from "./List.props";
import {payments} from "./payments";

// import styles from './List.module.scss';

export class List implements ListProps{
    $element: string;
    constructor() {
        this.$element = this.createElement();
    }

    createElement(payment) {
        const wrapper = document.createElement('ul');
        wrapper.classList.add('list');

        const allPayments = payment ? [...payments, ...payment] : payments;

        allPayments.forEach((item:Object, index: number) => {
            if (!wrapper.querySelector(`[data-id='${index}']`)) {
                const element = document.createElement('li');
                element.classList.add('element');
                element.innerText = item.name;
                wrapper.append(element);
            }
        })

        console.log(wrapper);

        return wrapper;
    }
    render() {
        const wrapper = document.querySelector(className);

        wrapper.classList.innerHTML(this.$element);
    }
}