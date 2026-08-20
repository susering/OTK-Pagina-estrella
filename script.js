const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        
        
        const inputActual = input, //esto guarda el input actual y lo guarda en la variable
            inputSiguiente = input.nextElementSibling, //esto toma al siguiente elemento hijo y lo guarda
            inputAnterior = input.previousElementSibling;// esto toma al anterior elemento hijo y lo guarda

        if(inputActual.value.length > 1) {
            inputActual.value = "";
            return;
        }

        if(inputSiguiente && inputSiguiente.hasAttribute("disabled") && inputActual.value !== "") {
            inputSiguiente.removeAttribute("disabled");
            inputSiguiente.focus();
        }

        if (e.key === "Backspace") {
            
            inputs.forEach((input, index2) => {
                
                if(index1 <= index2 && inputAnterior) {
                    input.setAttribute("disabled", true);
                    inputActual.value = "";
                    inputAnterior.focus();
        }
            })
        }


        if(!inputs[5].disabled && inputs[5].value !== "") {
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    }); 
});





window.addEventListener("load", () => inputs[0].focus());