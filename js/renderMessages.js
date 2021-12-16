export let dataSentMessage = () => 
{

    const advice = document.querySelector(".data-sent-advice");

    document.addEventListener("sentFormAdvice", (event) => {

        advice.classList.add("active");

        const myTimeout = setTimeout(myGreeting, 5000);

        function myGreeting() {
            advice.style.cssText="display: none;";
            }
        
    });
}