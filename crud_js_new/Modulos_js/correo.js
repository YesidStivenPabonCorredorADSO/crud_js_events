const email = (event, elemento) => {
  let expresion_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (elemento.value === "") {
    elemento.classList.add("input_rojo")
    elemento.classList.remove("input")
  } else {
    if (expresion_correo.test(elemento.value)) {
      event.preventDefault();
      elemento.classList.add("input");
      elemento.classList.remove("input_rojo");
    } else {
      elemento.classList.remove("input");
      elemento.classList.add("input_rojo");
    }
  }

};
export default email;