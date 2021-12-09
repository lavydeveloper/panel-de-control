export const appendOptions = () =>
{
    const selectOptions = document.querySelectorAll("select[name='comunidad'] > option");
    const selectPanels = document.querySelectorAll(".form__element-select-panel");

    /*Seleccionar cada elemento del array*/
    selectOptions.forEach(selectOption => {

        /*Evento click a cada uno de los elementos*/
        selectOption.addEventListener("click", () =>{

            /*Seleccionar todos los elementos con la clase .tab-active*/
            let activeElements = document.querySelectorAll(".panel-active");
            /*Seleccionar cada elemento del array*/
            activeElements.forEach(activeElement =>{
                /*A cada uno de los elementos con la clase .tab-active le quitamos la clase .tab-active*/
                activeElement.classList.remove("panel-active");
            });
            /*A cada uno de los elementos del array le añadimos la clase .tab-active*/
            selectOption.classList.add("panel-active");
        
            /*Seleccionar cada elemento del array*/
            selectPanels.forEach(selectPanel => {
                /*Si el dataset de tabContent es igual al dataset del tabButton...*/
                if(selectPanel.dataset.option == selectOption.dataset.option)
                {
                    /*Le añadimos a cada elemento del array la clase .tab-active*/
                    selectPanel.classList.add("panel-active");
                }
            });
        });
    });
}