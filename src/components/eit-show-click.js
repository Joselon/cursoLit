import { LitElement, html, css } from 'lit';

export class EitShowClick extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color: #ccc;
            }
        `
    ];

    static get properties() {
        return {
            clickX: {
                type: Number,
                hasChanged: (newValue, oldValue) => {
                    return newValue % 5 === 0;
                },
            },
            clickY: {
                type: Number,
            },
        };
    }

    constructor() {
        super();
        this.clickX = 0;
        this.clickY = 0;
        this.clickHandler = this.updateClickPosition.bind(this);
        console.log(`(constructor):Click en coordenadas (x,y) = (${this.clickX},${this.clickY})`);
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback ejecutado...');
        console.log(`(connected):Click en coordenadas (x,y) = (${this.clickX},${this.clickY})`);
        document.addEventListener('click', this.clickHandler);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback ejecutado...');
        document.removeEventListener('click', this.clickHandler);
    }

    /* attributeChangedCallback() {
         super.attributeChangedCallback();
       //Tienen que incluirse los atributos en el setter
       // static get observedAttributes() { return ['verified', 'other'];}
     }*/

    firstUpdated() {
        //super.firstUpdated(); //NO HACE FALTA:no es un componente que extienda de otro componente
        console.log(`(firstUpdated):Click en coordenadas (x,y) = (${this.clickX},${this.clickY})`);
        console.log(this.shadowRoot.getElementById('test'));
    }

    updated(changedProperties) {
        if (changedProperties.has('clickX')) {
            console.log(`Ha cambiado x: ${changedProperties.get('clickX')} -> ${this.clickX} (multiplo de 5)`);
        }
    }

    render() {
        return html`
            <p id='test'> Click en coordenadas (x,y) = (${this.clickX},${this.clickY}) </p>
        `;
    }

    updateClickPosition(e) {
        this.clickX = e.clientX;
        this.clickY = e.clientY;
    }
}
customElements.define('eit-show-click', EitShowClick);
