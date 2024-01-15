import { LitElement, html, css } from 'lit';
import { icons } from '../libs/icons.js';
import './eit-todo-search.js';

export class EitTodoList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                padding: 1rem;
                --eit-switch-on-state-color: #cccccc;
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
                margin-right: 0.5rem;
            }

            eit-switch {
                scale:0.5;
            }
        `
    ];

    static properties = {
        completed: { type: Boolean },
        todoItems: {
            type: Array,
        },
    }

    constructor() {
        super();
        this.completed = false;
        this.todoItems = [
            {
                title: 'Agregar tareas',
                completed: false
            },
            {
                title: 'Aplicar botón "Completar" a todos los elementos',
                completed: true
            },
            {
                title: 'Implementar búsqueda de elementos',
                completed: false
            },
            {
                title: 'Empezar el curso de Lit',
                completed: true
            },
        ];
    }
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
        <ul>
            ${this.todoItems.map((todoItem) => html`
                <li>
                ${todoItem.completed
                ? icons.checked
                : icons.unchecked
            }
                <span>${todoItem.title} </span>
                <eit-switch @eit-switch-changed=${this.changeItemCompleted(todoItem)} ?checked=${todoItem.completed}>${icons.done}</eit-switch>
                </li>
            `)}
        </ul>        
        <div>
        ${this.completed
                ? icons.checked
                : icons.unchecked
            } Nueva tarea
        <p><eit-switch @eit-switch-changed=${this.changeCompleted}>${icons.done}</eit-switch></p>
        </div>
    `;
    }

    changeCompleted(e) {
        this.completed = e.detail.checked;
    }

    changeItemCompleted(item) {
        return () => {
            item.completed = !item.completed;
            // this.requestUpdate(); //Para evitar actualizar la referencia al array
            this.todoItems = [...this.todoItems];
        }
    }
}

customElements.define('eit-todo-list', EitTodoList)