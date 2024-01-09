import { LitElement, html, css } from 'lit';
import { icons } from '../libs/icons.js';
import  './eit-todo-search.js';

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
 
    static properties = {
        completed: { type: Boolean},
    }

    constructor(){
        super();
        this.completed = false;
    }
    render() {
        return html`
            <button @click=${this.changeCompleted}>  Completar ${icons.done}</button>
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
        ${this.completed
            ? icons.checked
            : icons.unchecked
        }
        </div>
    `;
    }

    changeCompleted() {
        this.completed = !this.completed;
    }


}

customElements.define('eit-todo-list', EitTodoList)