import {getID} from './client.js';
import {renderCkeditor} from './editor.js';
import {burgerMenu} from './burger-menu.js';
import {tabs} from './tabs.js';
import {form} from './form.js';
// import {appendOptions} from './select.js';
import {renderLoginForm} from './loginForm.js';
import {renderTable} from './table.js';
import './tableComponent.js';



getID();
renderCkeditor();
renderLoginForm();
renderTable();
burgerMenu();
tabs();
form();
// appendOptions();
