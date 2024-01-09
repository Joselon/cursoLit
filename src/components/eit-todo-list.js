import { LitElement, html, css } from "lit";
import { icons } from '../libs/icons.js';
import { EitTodoSearch } from "./eit-todo-search.js";

export class EitTodoList extends LitElement {

    static styles = [
        css`
            :host {
                display: block;
                padding: 1rem;
            }

            h1 {
                border-bottom: 1px solid #fff;
            }
            div {
                background-color:#eee;
                padding: 1rem
            }
        `
    ];

    render() {
        return html`
            ${this.headingTemplate}
            <eit-todo-search></eit-todo-search>
            ${this.bodyTemplate}
        `;
    }

    get headingTemplate() {
        return html`
            <h1>ToDo List</h1>
        `;
    }

    get bodyTemplate() {
        return html`
        <div>
        ${icons.done}
        </div>
    `;
    }
}

customElements.define('eit-todo-list', EitTodoList)