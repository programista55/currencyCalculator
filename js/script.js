const hello = () => {
    console.log("welcome to my project");
}

const calculate = () => {

    const startElement = document.querySelector(".js-start");
    const stopElement = document.querySelector(".js-stop");
    const amountElement = document.querySelector(".js-amount");
    const eur = 4.49;
    const usd = 4.17
    const eurusd = 1.07

    switch(startElement.value){
        
        case "pln" : {
            if(stopElement.value === "eur"){
             let result = Number(amountElement.value) / eur;
             return result.toFixed(2);
            }
            if(stopElement.value === "usd"){
             let result = Number(amountElement.value) / usd;
             return result.toFixed(2);
            }
            break;
        }

        case "eur" : {
            if(stopElement.value === "pln"){
             let result = Number(amountElement.value) * eur;
             return result.toFixed(2);
            }
            if(stopElement.value === "usd"){
                let result = Number(amountElement.value) * eurusd;
                return result.toFixed(2);
            }
            break;
        }

        case "usd" : {
            if(stopElement.value === "pln"){
                let result = Number(amountElement.value) * usd;
                return result.toFixed(2);
            }
            if(stopElement.value === "eur"){
                let result = Number(amountElement.value) / eurusd;
                return result.toFixed(2);
            }
            break;
        }
    }
}

const onform = (event) => {
    event.preventDefault();

    const resultElement = document.querySelector(".js-result");

    resultElement.value = calculate();
}


const init = () => {

hello();

const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit" , onform);

}

init();

