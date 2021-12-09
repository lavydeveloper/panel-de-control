import {getID} from './client.js';

export const form = () => {

    /*ENFOCAR INPUT AL CARGAR LA PÁGINA*/
    
    window.masterInput = document.querySelector(".focus");
    
    window.addEventListener("load", () => {
        masterInput.focus();
    });

    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", (event) => {

        event.preventDefault();

        let formElement = document.getElementById("form");
        let data = new FormData(formElement);

        data.append("fingerprint",getID());

        if( ckeditors != 'null'){
    
            Object.entries(ckeditors).forEach(([key, value]) => {
                data.append(key, value.getData());
            });
        }
        

        for (let pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
    });
}
