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
        loggedIn: { type: Boolean},
        role: {type: String}
    }

    constructor(){
        super();
        this.loggedIn = false;
        this.role = 'premium';
    }
    render() {
        return html`
            <button @click=${this.changeLoggedIn}> Login/Logout </button>
            ${this.loggedIn 
                ? html`
                ${this.sayHello(this.role)}
                ${this.headingTemplate}
                <eit-todo-search></eit-todo-search>
                ${this.bodyTemplate}
                `
                : 'No está logueado'
            }
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

    changeLoggedIn() {
        this.loggedIn = !this.loggedIn;
    }

    sayHello(role) {
        switch(role) {
            case 'administrator':
                return html`Hola <b>Administrador</b>`;
            case 'premium':
                return html`Hola usuario <i>Premium</i>`;
            default:
                return 'Hola usuario';
        }
    }
}

customElements.define('eit-todo-list', EitTodoList)