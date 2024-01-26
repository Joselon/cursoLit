import { LitElement, html, css } from 'lit';

export class EitTimer extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color: white;
            }
        `
    ];
// Mejorar con Flip Clock & Countdown: https://codepen.io/shshaw/pen/vKzoLL
    static get properties() {
        return {
            initDate: { type: Number },
            timerDate: { type: Number }
        };
    }

    constructor() {
        super();
        this.initDate = new Date();
    }

    firstUpdated() {
        this.interval = setInterval(() => {
            this.requestUpdate();
            console.log("timer actualizado")
            }, 3000);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.interval);
    }

    render() {
        return html`
        <div class="timer">${this.getTimer()}</div>
        `;
    }

    getTimer() {
        let date = new Date()
        date = new Date(date - this.initDate);
        return `${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}:${date.getSeconds().toString().padStart(2, 0)}`;
    }
}
customElements.define('eit-timer', EitTimer);
