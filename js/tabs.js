export const tabs = () =>
{
    const tabButtons = document.querySelectorAll(".tabs-buttons__element button");
    const tabContents = document.querySelectorAll(".tab-content");

    /*Seleccionar cada elemento del array*/
    if(tabButtons){
        tabButtons.forEach(tabButton => {

            /*Evento click a cada uno de los elementos*/
            tabButton.addEventListener("click", () =>{
    
                /*Seleccionar todos los elementos con la clase .tab-active*/
                let activeElements = document.querySelectorAll(".tab-active");
                /*Seleccionar cada elemento del array*/
                activeElements.forEach(activeElement =>{
                    /*A cada uno de los elementos con la clase .tab-active le quitamos la clase .tab-active*/
                    activeElement.classList.remove("tab-active");
                });
                /*A cada uno de los elementos del array le añadimos la clase .tab-active*/
                tabButton.classList.add("tab-active");
            
                /*Seleccionar cada elemento del array*/
                tabContents.forEach(tabContent => {
                    /*Si el dataset de tabContent es igual al dataset del tabButton...*/
                    if(tabContent.dataset.tab == tabButton.dataset.tab)
                    {
                        /*Le añadimos a cada elemento del array la clase .tab-active*/
                        tabContent.classList.add("tab-active");
                    }
                });
            });
        });
    }
}

