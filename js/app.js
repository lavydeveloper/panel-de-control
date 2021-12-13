import {getID} from './client.js';
import {renderCkeditor} from './editor.js';
import {burgerMenu} from './burger-menu.js';
import {tabs} from './tabs.js';
import {form} from './form.js';
// import {appendOptions} from './select.js';
import {renderLoginForm} from './loginForm.js';


getID();
renderCkeditor();
renderLoginForm();
burgerMenu();
tabs();
form();
// appendOptions();
