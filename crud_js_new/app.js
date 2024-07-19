const $input_name=document.getElementById("name");
const $input_telefono=document.getElementById("numero");
const $input_direccion=document.getElementById("Direccion");
const $input_documento=document.getElementById("documento");
const $input_email=document.getElementById("email");
const $input_apellido=document.getElementById("apellido");

// Evento del nombre 
const letra=(event,elemento)=>{
    console.log(event);
    let expresion=/^[a-zA-Z]*$/;
    if (!expresion.test(elemento.value)) {
        event.preventDefault()
        elemento.classList.add("input_rojo")
        elemento.classList.remove("input")
    }
    else{
        elemento.classList.add("input")
        elemento.classList.remove("input_rojo")
    }
}
$input_name.addEventListener("keypress",(event)=>{
    letra(event,$input_name);
})

// El eveneto del Apellido
const Apellido=(event,elemento)=>{
    console.log(event);
    let expresion=/^[a-zA-Z]*$/;
    if (!expresion.test(elemento.value)) {
        event.preventDefault()
        elemento.classList.add("input")
        elemento.classList.remove("input_rojo")
    }
    else{
        elemento.classList.remove("input")
        elemento.classList.add("input_rojo")
    }
}
$input_apellido.addEventListener("keypress",(event)=>{
    letra(event,$input_apellido);
})

// El evento del Telefono 

const numero=(event,elemento)=>{
    console.log(event);
    let expresion_numero=/[^0-9]/;
    if (expresion_numero.test(event.key)) {
        event.preventDefault();
    }
    const numero_maximo=elemento.value.length <=9;
    if (!numero_maximo==true) {
        event.preventDefault();
        elemento.classList.add("input")
        elemento.classList.remove("input_rojo")
    }
    else{
        elemento.classList.remove("input")
        elemento.classList.add("input_rojo")
    }

}
$input_telefono.addEventListener("keypress",(event)=>{
    numero(event,$input_telefono);
})

// El evento del Correo
const email=(event,elemento)=>{
    console.log(event);
    let expresion_correo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (expresion_correo.test(elemento.value)) {
        event.preventDefault()
        $input_email.classList.add("input")
        $input_email.classList.remove("input_rojo")
    }
    else{
        $input_email.classList.remove("input")
        $input_email.classList.add("input_rojo")
    }
}
$input_email.addEventListener("blur",event=>{
    email(event,$input_email);
})
//  El evento del chebox

const chebox=(event)=>{

}




// const $input_name = document.getElementById("name");
// const $input_telefono = document.getElementById("numero");
// const $input_direccion = document.getElementById("Direccion");
// const $input_documento = document.getElementById("documento");
// const $input_email = document.getElementById("email");
// const $input_apellido = document.getElementById("apellido"); // Corrección: usar getElementById en lugar de querySelector

// // Evento del nombre
// const letra = (event, elemento) => {
//   console.log(event);
//   let expresion = /^[a-zA-Z]*$/;
//   if (!expresion.test(elemento.value)) {
//     event.preventDefault();
//     elemento.classList.add("input_rojo");
//     elemento.classList.remove("input");
//   } else {
//     elemento.classList.add("input");
//     elemento.classList.remove("input_rojo");
//   }
// };
// $input_name.addEventListener("keypress", (event) => {
//   letra(event, $input_name);
// });

// // El evento del Apellido
// const Apellido = (event, elemento) => {
//   console.log(event);
//   let expresion = /^[a-zA-Z]*$/;
//   if (!expresion.test(elemento.value)) {
//     event.preventDefault();
//     elemento.classList.add("input_rojo");
//     elemento.classList.remove("input");
//   } else {
//     elemento.classList.add("input");
//     elemento.classList.remove("input_rojo");
//   }
// };
// $input_apellido.addEventListener("keypress", (event) => {
//   Apellido(event, $input_apellido);
// });

// // El evento del Telefono
// const numero = (event, elemento) => {
//   console.log(event);
//   let expresion_numero = /[^0-9]/;
//   if (expresion_numero.test(event.key)) {
//     event.preventDefault();
//   }
//   const numero_maximo = elemento.value.length <= 9;
//   if (!numero_maximo == true) {
//     event.preventDefault();
//     elemento.classList.add("input_rojo");
//     elemento.classList.remove("input");
//   } else {
//     elemento.classList.add("input");
//     elemento.classList.remove("input_rojo");
//   }
// };
// $input_telefono.addEventListener("keypress", (event) => {
//   numero(event, $input_telefono);
// });

// // El evento del Correo
// const email = (event, elemento) => {
//   console.log(event);
//   let expresion_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//   if (expresion_correo.test(elemento.value)) {
//     event.preventDefault();
//     elemento.classList.add("input");
//     elemento.classList.remove("input_rojo");
//   } else {
//     elemento.classList.remove("input");
//     elemento.classList.add("input_rojo");
//   }
// };
// $input_email.addEventListener("blur", (event) => {
//   email(event, $input_email);
// });


// $input_direccion.addEventListener("keypress", (event) => {

//   console.log("Evento de dirección desencadenado");
// });

// $input_documento.addEventListener("keypress", (event) => {

//   console.log("Evento de documento desencadenado");
// });