import { LitElement, html, css } from 'lit';
import { WiredButton } from 'wired-elements/lib/wired-button.js';
import { WiredCard } from 'wired-elements/lib/wired-card.js';
import '@dile/dile-input/dile-input';
import { WiredSlider } from 'wired-elements/lib/wired-slider.js';

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
                width: 50px;
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
    }

    constructor() {
        super();
        this.counter = 10;
        this.quantity = 10;
    }

    render() {
        return html`
            <wired-card elevation="3">
                <slot></slot>
                <p class="contador">${this.counter}</p>
                <p>
                    <dile-input id="quantity" type="number" value="${this.quantity}" label="Cantidad"></dile-input>
                </p>
                <p>
                    <wired-slider 
                        value="10" 
                        min="1" 
                        max="20" 
                        @change=${this.doChangeQuantity}
                    ></wired-slider>
                </p>
                <wired-button @click=${this.increment}>Incrementar</wired-button>
                <wired-button @click=${this.decrement} class="decrement">Decrementar</wired-button>
            </wired-card>
        `;
    }

    doChangeQuantity(e) {
        this.quantity = e.detail.value;
    }

    increment() {
        this.counter += parseInt(this.quantity);
    }

    decrement() {
        this.counter -= parseInt(this.quantity);
    }
}
customElements.define('eit-counter', EitCounter);