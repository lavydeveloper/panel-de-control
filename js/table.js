export const renderTable = () => {

    const tables = document.querySelectorAll(".crud__table-element");

    if(tables){

        tables.forEach(table => {

            let url = table.dataset.url;
            let headers = JSON.parse(table.dataset.headers);
 
            let sendGetRequest = async () => {
        
                let request = await fetch(url, {
                    headers: {
                        'Authorization':'Bearer ' + localStorage.getItem('token'),
                    },
                    method: 'GET' 
                })
                .then(response => {
                    if (!response.ok) throw response;
        
                    return response.json();
                })
                .then(json => {

                    let master = document.createElement("tr");

                    headers.forEach(header => {

                        let masterTitle = document.createElement("th");
                        
                        table.appendChild(master);
                        master.appendChild(masterTitle);
                        masterTitle.textContent = header;
                        
                        console.log(header);
                    })

                    let data = json.data;

                    console.log(data);
                })

            };
    
            sendGetRequest();
        });
    }
}

