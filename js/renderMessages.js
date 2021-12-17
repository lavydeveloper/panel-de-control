class dataSentMessage extends HTMLElement {

    constructor() {

        super();
        
        this.shadow = this.attachShadow({ mode: 'open' });
        this.message = '';
        this.type = '';
        
        document.addEventListener("message", ( event =>{
            this.setAttribute("message", event.detail.message);
            this.setAttribute("type", event.detail.type);
        }));
        
    }

    static get observedAttributes() { return ['message', 'type']; }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){

        if(name == "message"){
            this.shadow.querySelector("span").textContent = this.getAttribute('message');

            let advice = this.shadow.querySelector(".data-sent-advice");
    
            advice.classList.add("active");
    
            const myTimeout = setTimeout(hiding, 3000);
    
            function hiding() {
                advice.classList.remove("active");
            }    
        }

        /*if(name == "type"){
            console.log(this.getAttribute('type'));
            this.shadow.querySelector(".data-sent-advice").classList.add(this.getAttribute('type'));
        }*/

    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .data-sent-advice
        {
            font-family: 'Arial';
            color: hsl(219, 14%, 25%);
            padding: 2em;
            display: none;
        }
        .data-sent-advice.active
        {
            display: block;
        }
        .data-sent-advice.success
        {
            background-color: green;
        }
        .data-sent-advice.error
        {
            background-color: red;
        }
        .data-sent-advice .data-sent-advice__icon img
        {
            width: 2em;
            height: 2em;
        }
        .data-sent-advice .data-sent-advice__icon, .data-sent-advice__text
        {
            margin: 0 0.5em;
        }
        </style>
        <div class="data-sent-advice">
            <span class="data-sent-advice__text"></span><span class="data-sent-advice__icon"><img src="icons/check.webp" alt="Icono marca de correcto"></span>
        </div>
        `;            
    }
}
customElements.define('advice-component', dataSentMessage);