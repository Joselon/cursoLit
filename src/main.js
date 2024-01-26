import '@dile/dile-nav/dile-nav.js';
import '@dile/dile-tabs/dile-tabs.js';
import '@dile/dile-pages/dile-pages.js';
import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';
import '@dile/dile-selector/dile-selector.js';
import '@dile/dile-selector/dile-selector-item.js';
import './components/dw-message.js';
import './components/eit-todo-list.js';
import './components/eit-counter.js';
import './components/eit-switch.js';
import './components/eit-overlay.js';
import './components/eit-show-click.js';
import './components/eit-timer.js';
import './components/eit-users-list.js'
import './styles.css';

document.getElementById("selector").addEventListener('dile-selected-changed', function () {
    document.querySelector('dile-menu-hamburger').close();
    document.querySelector('dile-tabs').selected = document.getElementById("selector").selected;
});

