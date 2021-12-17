import {getID} from './client.js';

export const form = () => {

    const submitButton = document.getElementById("submit-button");
    const adminForm = document.getElementById("admin-form");
    const closeAdviceButton = document.querySelector(".close-advice");

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
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },
                    method: 'POST', 
                    body: data
                })
                .then(response => {
                    if (!response.ok) throw response;
        
                    return response.json();
                })
                .then(json => {
                    
                    document.dispatchEvent(new CustomEvent('message',{
                        detail:
                        {
                            message: json.message,
                            type: 'success'
                        }
                    }));

                })
                .catch(error => {
            
                    if(error.status == '400'){
    
                        error.json().then(jsonError => {
    
                            let errors = jsonError.data;
                            let errorBox = document.querySelector(".errorAdviceContainer");
                            errorBox.classList.add("active");
                            errorBox.classList.add("show");
                            
                            let errorBoxMessage = document.querySelector(".errorAdvice");
                            errorBoxMessage.innerHTML="";
                            
                            
                            Object.keys(errors).forEach( (key) => {

                                let errorMessage = document.createElement('li');

                                errorMessage.textContent = errors[key];

                                errorBoxMessage.appendChild(errorMessage);

                                document.querySelector(`[name=${key}]`).classList.add("error");
                            })

                            closeAdviceButton.addEventListener("click", () =>{

                                errorBox.classList.remove("active");

                                Object.keys(errors).forEach( (key) => {
    
                                    document.querySelector(`[name=${key}]`).classList.remove("error");

                                })

                            });
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

