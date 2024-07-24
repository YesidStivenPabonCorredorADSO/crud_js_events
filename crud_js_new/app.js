import letra from "./Modulos_js/Letra.js";
import  Apellido from "./Modulos_js/Apellido.js";
import  numero from "./Modulos_js/telefono.js";
import  email from "./Modulos_js/correo.js";
import  documento from "./Modulos_js/documento.js";
import  direccion from "./Modulos_js/direccion.js";
// import checkbox from "./Modulos_js/checbox.js";
const $input_name=document.getElementById("name");
const $input_telefono=document.getElementById("numero");
const $input_direccion=document.getElementById("Direccion");
const $input_documento=document.getElementById("documento");
const $input_email=document.getElementById("email");
const $input_apellido=document.getElementById("apellido");
const $inputchechbox=document.getElementById("checkbox")

// Evento del nombre 
$input_name.addEventListener("keypress",(event)=>{
    letra(event,$input_name);
})
$input_name.addEventListener("blur",(event)=>{
    letra(event,$input_name);
})
// El eveneto del Apellido

$input_apellido.addEventListener("keypress",(event)=>{
    letra(event,$input_apellido);
})
$input_apellido.addEventListener("blur",(event)=>{
    letra(event,$input_apellido);
})
// El evento del Telefono 

$input_telefono.addEventListener("keypress",(event)=>{
    numero(event,$input_telefono);
})

$input_telefono.addEventListener("blur",(event)=>{
    numero(event,$input_telefono);
})
//  El evento de documento
$input_documento.addEventListener("keypress",(event)=>{
    documento(event,$input_documento);
})
$input_documento.addEventListener("blur",(event)=>{
    documento(event,$input_documento);
})

// El evento del Correo

$input_email.addEventListener("blur",event=>{
    email(event,$input_email);
})

// El evento del documento
$input_direccion.addEventListener("keypress",(event)=>{
    direccion(event,$input_direccion);
})
$input_direccion.addEventListener("blur",(event)=>{
    direccion(event,$input_direccion);
})
// El evento del checkbox
$inputchechbox.addEventListener("keypress",(event)=>{
    checkbox();
})