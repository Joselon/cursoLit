import { LitElement, html, css } from 'lit';
import { icons } from '../libs/icons.js';
import './eit-todo-search.js';

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
            ul {
                margin: 1rem 0;
                padding: 0;
            }
            li {
                display: flex;
                align-items: center;
                list-style-type:none;
                margin-bottom: 0.8rem;
            }

            li span {
                margin-left: 0.5rem;
            }
        `
    ];

    static properties = {
        completed: { type: Boolean },
        todoItems: { type: Array },
    }

    constructor() {
        super();
        this.completed = false;
        this.todoItems = [
            {
                title: 'Comprita',
                completed: false
            },
            {
                title: 'Llamar a mamá',
                completed: false
            },
            {
                title: 'Descongelar carne',
                completed: true
            },
        ];
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
        <ul>
            ${this.todoItems.map((todoItem) => html`
                <li>
                ${todoItem.completed
                ? icons.checked
                : icons.unchecked
                }
                <span>${todoItem.title}</span>
                </li>
            `)}
        </ul>        
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