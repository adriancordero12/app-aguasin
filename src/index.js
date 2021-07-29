//Refrescar página cada 50 segundos 

function actualizar(){
  
  location.reload(true);

}
setInterval("actualizar()",50000);

// Variables globales
var cantidad;
var precio;
var boton = document.getElementById('enter');

setTimeout(() => {
    noNull();
}, 1);

//Fecha y Hora
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let hoy = new Date();
let fecha = hoy.getDate() + '-' + meses[hoy.getMonth()] + '-' + hoy.getFullYear();
let ho = hoy.getHours();
let m = hoy.getMinutes();
m = checkTime(m);

console.log(ho, "1");

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

let hora = ho + ":" + m;
let fechaYHora = fecha + ' ' + hora;
document.getElementById('fecha').innerHTML = fechaYHora;

console.log(ho, "2");

boton.addEventListener("click", e => {
    e.preventDefault();
    enviar();

});

const noNull = () => {

    cantidad = document.getElementById("cantidad").value;
    precio = document.getElementById("precio").value;

    if (cantidad == "" || precio == "") {
        boton.disabled = true;
    } else {
        boton.disabled = false;

    }
};

const enviar = () => {

    localStorage.setItem("precio", precio);
    localStorage.setItem("cantidad", cantidad);

    document.getElementById("cantidad").value = "";

    noNull()
    //let url = "file:///Users/adriancordero/Documents/Proyectos/app-agua/cambio/factura/factura.html"
    let url = "factura/factura.html";
    window.open(url, "Multiplataforma", "width=300, height=335");
}


