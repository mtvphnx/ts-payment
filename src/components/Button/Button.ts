import {DOM} from "../DOM/DOM";
import {ButtonProps} from "./Button.props";

import styles from './Button.module.scss';

export class Button extends DOM implements ButtonProps {
    constructor(
        public text: string,
        public className: string,
        public id: string,
        public handler: () => void
    ) {
        super(text, 'button', [styles.button, styles[className]], id, handler);
    }
}