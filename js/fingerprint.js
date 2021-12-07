var formElement = document.getElementById("info");
formData = new FormData(formElement);

for (var value of formData.values()) {
    console.log(value); 
 }

request.send(formData);