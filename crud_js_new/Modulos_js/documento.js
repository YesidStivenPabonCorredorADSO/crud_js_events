const documento = (event, elemento) => {
    let expresion_numero = /[^0-9]/;
    if (elemento.value === "") {
        elemento.classList.add("input_rojo")
        elemento.classList.remove("input")
    } else {
        if (expresion_numero.test(event.key)) {
            event.preventDefault();
        }
        const numero_maximo = elemento.value.length <= 9;
        if (!numero_maximo == true) {
            event.preventDefault();
            elemento.classList.add("input")
            elemento.classList.remove("input_rojo")
        }
        else {
            elemento.classList.remove("input")
            elemento.classList.add("input_rojo")
        }
    }
}
export default documento;