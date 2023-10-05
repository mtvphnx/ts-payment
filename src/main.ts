import {App, Button} from "./components/";
import {AppProps, ButtonProps} from "./components/props";
import styles from './main.module.scss';

const payment: AppProps = new App();

const buttonsValue: Array<[string, string, string, () => void]> = [
    ['Add payment method', 'element', 'add-pay-button', payment.addPayHandler],
    ['Submit', 'submit', 'submit-pay-button', payment.submitPayHandler],
    ['Submit', 'submit', 'add-card-button', payment.submitCardHandler],
    ['Cancel', 'cancel', 'cancel-card-button', payment.cancelCardHandler],
]

const addPayButton: ButtonProps = new Button(...buttonsValue[0]);
const submitPayButton: ButtonProps = new Button(...buttonsValue[1]);
const submitCardButton: ButtonProps = new Button(...buttonsValue[2]);
const cancelCardButton: ButtonProps = new Button(...buttonsValue[3]);

const buttonsList: ButtonProps[] = [addPayButton, submitPayButton, submitCardButton, cancelCardButton];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="${styles.bg}">
        <div class="${styles.wrapper}">
            <div class="${styles.content}">
                <div class="${styles.info}">
                    ${addPayButton.$element}
                </div>
            </div>
            <div class="${styles.modal} animate__animated" id="modal">
                <div class="${styles.info}">
                    ${cancelCardButton.$element}
                </div>
            </div>
        </div>
    </div>
`;

const initApp = (): void => buttonsList.forEach(item => item && item.init());
document.addEventListener('DOMContentLoaded', initApp);