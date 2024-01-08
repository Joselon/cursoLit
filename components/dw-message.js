import { LitElement, html, css } from 'lit';

class DwMessage extends LitElement {
    static styles = css`
        :host {
            display:block;
            border:1px solid red;
            padding: 10px;
        }
        div {
            background-color:red;
        }
    `

    static properties = {
        msg : {type: String},
    }

    constructor(){
        super();
        this.msg = "Nuevo componente Lit";
    }
    render(){
        return html`<div>${this.msg}</div>
        <button @click=${this.changeMessage}>Click!!</button>
        `;
    }

    changeMessage(){
        this.msg = "Mensaje cambiado con el botón";
    }
}

customElements.define('dw-message', DwMessage);