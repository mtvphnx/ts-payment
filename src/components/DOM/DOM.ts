import {DOMProps} from "./DOM.props";

export class DOM implements DOMProps {
    $element: string;

    constructor(
        public text: string,
        public type: string,
        public className: string | string[],
        public id: string,
        public handler: () => void
    ) {
        this.$element = this.createElement();
    }

    createElement() {
        const element = document.createElement(this.type);
        element.classList.add(...this.className);
        element.innerText = this.text;
        element.id = this.id;

        return element.outerHTML;
    }

    init() {
        const element = document.getElementById(this.id);
        element?.addEventListener('click', this.handler);
    }
}