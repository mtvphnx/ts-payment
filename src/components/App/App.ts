import {AppProps} from "./App.props";
import 'animate.css';

export class App implements AppProps {
    showModal = (show: boolean | null) => {
        const element: HTMLElement | null = document.getElementById('modal');
        element?.classList.add(show ? 'animate__backInUp' : 'animate__zoomOutDown');

        element?.addEventListener('animationend', () => {
            element?.classList.remove(show ? 'animate__zoomOutDown' : 'animate__backInUp');
            if (!show) element?.classList.remove('animate__zoomOutDown');
        }, {once: true});
    }

    addPayHandler = () => {
        this.showModal(true);
    };

    submitPayHandler = () => {
        console.log('Подтверждение выбора оплаты');
    };

    cancelCardHandler = () => {
        this.showModal(false);
    };

    submitCardHandler = () => {
        console.log('Подтверждение добавления карты');
    };
}