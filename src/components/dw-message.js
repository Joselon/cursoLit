import { LitElement, html, css } from 'lit';

class DwMessage extends LitElement {
    static styles = css`
        :host {
            display:block;
            border:1px solid #900;
            padding: 10px;
        }
        div {
            display: none;
            background-color:#900;
        }

        :host([show]) div {
            display:block;
        }
    `

    static properties = {
        msg: {
            type: String,
            attribute: 'message',
            state: false,
        },
        show: {
            type: Boolean,
            reflect: true
        }
    }

    constructor() {
        super();
        this.msg = "Nuevo componente Lit";
        this.show = false;

    }
    render() {
        return html`
        <div>${this.msg}</div>
        <button @click=${this.toogle}> ${this.show ? 'Ocultar' : 'Mostrar'}</button>
        `;
    }

    toogle() {
        this.show = !this.show;
    }
}

customElements.define('dw-message', DwMessage);