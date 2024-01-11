import { LitElement, html, css } from 'lit';
import { WiredButton } from 'wired-elements/lib/wired-button.js';
//import { WiredCard } from 'wired-elements/lib/wired-card.js';
import { WiredCard } from 'wired-elements';
import { WiredSlider } from 'wired-elements/lib/wired-slider.js';
import '@dile/dile-input/dile-input.js';


export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }
            h2 {
                color: red;
            }
            .contador {
                color: blue;
                font-size: 1.5em;
            }
            dile-input {
                width: 55px;
                font-size: 1em;
                padding: 0.5em;
                --dile-input-label-color: #910;
            }
            wired-button {
                background-color: #8cf;
            }
            wired-button.decrement {
                background-color: #910;
            }
            wired-card {
                margin: 1em;
                padding: 1em;
                text-align: center;
            }
            @media(min-width: 500px) {
                .contador {
                    font-size: 3em;
                }
            }
        `
    ];

    static properties = {
        counter: {
            type: Number,
            reflect: true,
        },
        quantity: {
            type: Number,
        },
        active: {
            type: Boolean,
        }
    };

    constructor() {
        super();
        this.counter = 0;
        this.quantity = 1;
        this.active = true;
    }

    render() {
        return html`
            <wired-card elevation="3">
                <p><eit-switch ?checked=${this.active}></eit-switch>
                <wired-button @click=${this.changeActive}>Activar/ Desactivar</wired-button></p>
                <slot></slot>
                <p class="contador">${this.counter}</p>
                <p>
                <dile-input id="quantity" type="number" value="${this.quantity}" label="Cantidad"></dile-input>
                </p>
                <p>
                    <wired-slider 
                        value="1" 
                        min="1" 
                        max="100" 
                        @change=${this.doChangeQuantity}
                        class= "wired-rendered"
                    ></wired-slider>
                </p>
                <wired-button @click=${this.increment} ?disabled=${!this.active}>Incrementar</wired-button>
                <wired-button @click=${this.decrement} class="decrement" ?disabled=${!this.active}>Decrementar</wired-button>
            </wired-card>
        `;
    }

    doChangeQuantity(e) {
        this.quantity = e.detail.value;
    }

    increment() {
        if (this.active) {
            this.counter += parseInt(this.quantity);
        }
    }

    decrement() {
        if (this.active) {
            this.counter -= parseInt(this.quantity);
        }
    }

    changeActive() {
        this.active = !this.active;
    }
}
customElements.define('eit-counter', EitCounter);