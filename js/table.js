export const renderTable = () => {

    const tables = document.querySelectorAll(".crud__table");

    if(tables){

        tables.forEach(table => {

            let url = table.dataset.url;
 
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

                    let data = json.data;

                    let tableElement = document.createElement("table");
                    let thead = document.createElement("thead");
                    let headers = document.createElement("tr");

                    tableElement.appendChild(thead);
                    thead.appendChild(headers);

                    Object.keys(data[0]).forEach((key) =>{
                        let header = document.createElement("th");

                        header.textContent = key;
                        headers.appendChild(header);
                        
                    });

                    data.forEach( row => {

                        let dataRow = document.createElement("tr");

                        dataRow.classList.add("crud__table-row");
                        tableElement.appendChild(dataRow);

                        Object.values(row).forEach((value) =>{
                            let column =  document.createElement("td");
                            
                            column.textContent = value;
                            dataRow.appendChild(column);
                            
                        });
                    })

                    table.appendChild(tableElement);
                });

            };
    
            sendGetRequest();
        });
    }
}

