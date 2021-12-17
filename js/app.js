import {getID} from './client.js';
import {renderCkeditor} from './editor.js';
import {burgerMenu} from './burger-menu.js';
import {tabs} from './tabs.js';
import {form} from './form.js';
import {renderLoginForm} from './loginForm.js';
import {renderTable} from './table.js';
// import {inputFilter} from './filter.js';
import './tableComponent.js';
import './renderMessages.js';



getID();
renderCkeditor();
renderLoginForm();
renderTable();
burgerMenu();
tabs();
form();
// inputFilter();