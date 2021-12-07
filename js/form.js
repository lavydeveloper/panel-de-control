export const form = () => {

    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", (event) => {

        event.preventDefault();

        let formElement = document.getElementById("form");
        let data = new FormData(formElement);

        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
    });
}
