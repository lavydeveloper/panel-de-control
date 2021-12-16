let data = [
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
    
});


