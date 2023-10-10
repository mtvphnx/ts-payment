import {App, Button, List} from "./components/";
import styles from './main.module.scss';

const add = new App();
const list = new List();

let elements = list.data;

elements = new Proxy(elements, { // (*)
    set(target, prop, val) { // для перехвата записи свойства
        if (val !== 'length') {
            target[prop] = val;

            return true;
        } else {
            return false;
        }
    }
});


const buttonsValue: Array<[string, string, string, () => void]> = [
    ['Add payment method', 'element', 'add-pay-button', () => {elements.push({name:"Четвертая"})}],
    ['Submit', 'submit', 'submit-pay-button', add.submitPayHandler],
    ['Submit', 'submit', 'add-card-button', add.submitCardHandler],
    ['Cancel', 'cancel', 'cancel-card-button', add.cancelCardHandler],
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
                    <div class="${styles.list}"></div>
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