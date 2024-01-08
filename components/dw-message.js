import { LitElement, html } from "lit";

class DwMessage extends LitElement {
    render(){
        return html`<div>Hola Lit</div>`;
    }
}

customElements.define('dw-message', DwMessage);