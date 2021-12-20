export const inputFilter = () => {

    const searchInput = document.querySelector("#search");

    searchInput.addEventListener("keyup", () =>{
  
        let filter = searchInput.value.toLowerCase();
        let table = document.querySelector(".crud__table");
        let rows = table.querySelectorAll(".crud__table-row");

        rows.forEach(row =>
        {
            let txtValue = row.innerText;
            let message = document.querySelector(".notFoundAdvice");  
            
            if (txtValue.toLowerCase().indexOf(filter) > -1) 
            {
                row.style.display = "";
            } else 
            {
                row.style.display = "none";
                message.classList.remove("active");
            }
        });       
    });

    /*columns.forEach(column =>
        {  

            if(column)
            {
                let textValue = column.textContent || column.innerText;

                if(textValue.toUpperCase().indexOf(filter) > -1)
                {
                    row.style.display = "";
                }else
                {
                    row.style.display = "none";
                }
            }

        });*/
}

/*let data = [
    {
        "id":1,
        "name":"Juana",
        "lastname":"Gonzalez",
    },
    {
        "id":2,
        "name":"Jose",
        "lastname":"Perez",
    },
    {
        "id":3,
        "name":"Pedro",
        "lastname":"Gonzalez",
    },
    {
        "id":4,
        "name":"María",
        "lastname":"Suarez",
    },
];

data.forEach( user => {
    
    Object.values(user).forEach((value) =>{

        if(value == "3")
        {
            console.log(Object.values(user));
        }

    });
    
});*/


