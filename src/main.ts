import {App, Button} from "./components/";
import styles from './main.module.scss';

const payment = new App();

const buttonsValue: Array<[string, string, string, () => void]> = [
    ['Add payment method', 'element', 'add-pay-button', payment.addPayHandler],
    ['Submit', 'submit', 'submit-pay-button', payment.submitPayHandler],
    ['Submit', 'submit', 'add-card-button', payment.submitCardHandler],
    ['Cancel', 'cancel', 'cancel-card-button', payment.cancelCardHandler],
]

const addPayButton = new Button(...buttonsValue[0]);
const submitPayButton = new Button(...buttonsValue[1]);
const submitCardButton = new Button(...buttonsValue[2]);
const cancelCardButton = new Button(...buttonsValue[3]);

const buttonsList = [addPayButton, submitPayButton, submitCardButton, cancelCardButton];

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

const initApp = () => buttonsList.forEach(item => item?.init());
document.addEventListener('DOMContentLoaded', initApp);