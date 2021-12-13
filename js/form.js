import {getID} from './client.js';

export const form = () => {

    /*ENFOCAR INPUT AL CARGAR LA PÁGINA*/
    const submitButton = document.getElementById("submit-button");
    const adminForm = document.getElementById("admin-form");

    window.masterInput = document.querySelector(".focus");
    
    window.addEventListener("load", () => {
        masterInput.focus();
    });

    if(submitButton){

        submitButton.addEventListener("click", (event) => {

            event.preventDefault();
    
            let url = adminForm.action;
            let data = new FormData(adminForm);
            data.append("fingerprint", getID());
    
            let sendPostRequest = async () => {
        
                let request = await fetch(url, {
                    headers: {
                        'Authorization': 'Bearer' + localStorage.getItem('token'),
                    },
                    method: 'POST', 
                    body: data
                })
                .then(response => {
                    if (!response.ok) throw response;
    
                    console.log(response.data);
    
                    return response.json();
                })
                .then(json => {
                    localStorage.setItem('token', json.data);
                    console.log(json.data);
                })
                .catch(error => {
                    
                    if(error.status == '400'){
    
                        error.json().then(jsonError => {
    
                            let errors = jsonError.data;
                            
                            console.log(errors)
                            
                            Object.keys(errors).forEach( (key) => {

                                let errorMessage = document.createElement('li');
                                let errorBox = document.querySelector(".errorAdvice");

                                errorMessage.textContent = errors[key];

                                errorBox.classList.add("active");
                                errorBox.appendChild(errorMessage);
                            })
                        })   
                    }
    
                    if(error.status == '500'){
                        console.log(error);
                    }
                });
    
                // En caso de usar Axios
                
                // let request = await axios.post(url, json)
                // .then(response => {
                //     console.log(response);
                // })
                // .catch(error => {
                    
                //     if(error.response.status == '400'){
    
                //         let errors = error.response.data.data;      
                //         let errorMessage = '';
    
                //         Object.keys(errors).forEach( (key) => {
                //             let errorMessage = document.createElement('li');
                //             errorMessage.textContent = errors[key];
                //             console.log(errorMessage)
                //         })
    
                //         console.log(errorMessage);
                //     }
    
                //     if(error.response.status == '500'){
                //         console.log(error);
                //     }
                // });
            };
    
            sendPostRequest();
        });
    }
}

