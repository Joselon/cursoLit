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
                display: flex;
                align-items: center;
            }
            h2 {
                color: red;
            }
            .contador {
                color: blue;
                background-color: white;
                border-radius: 25px;
                font-size: 2.5em;
                margin-inline-start: 1em;
                margin-inline-end: 1em;
            }
            dile-input {
                width: 55px;
                font-size: 1em;
                padding: 0.5em;
                --dile-input-text-align: center;
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
            }

            wired-card p {
                display:flex;
                justify-content: space-around;
                align-items: center;
            }

            wired-slider {
                margin-left: 10%;
                margin-right: 10%;
            }
            
            @media(max-width: 500px) {
                .contador {
                    font-size: 3em;
                    margin-inline-start: 1em;
                    margin-inline-end: 1em
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
                <p><eit-switch ?checked=${this.active} @click=${this.changeActive}></eit-switch>
                <wired-button @click=${this.changeActive}>Activar/ Desactivar</wired-button></p>
                <p><slot></slot></p>
                <p class="contador">${this.counter}</p>
                <p>
                    <wired-button @click=${this.increment} ?disabled=${!this.active}>Incrementar</wired-button>
                    <wired-button @click=${this.decrement} class="decrement" ?disabled=${!this.active}>Decrementar</wired-button>
                </p>
                <p>
                    <dile-input id="quantity" type="number" value="${this.quantity}" label="Cantidad" disabled></dile-input>
                </p>
                <p>
                    <wired-slider 
                        value="1" 
                        min="1" 
                        max="100" 
                        @change=${this.doChangeQuantity}
                        ?disabled=${!this.active}
                    ></wired-slider>
                </p>
                
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