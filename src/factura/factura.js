let precio = localStorage.getItem("precio");
let cantidad = localStorage.getItem("cantidad");

console.log(precio, cantidad)


document.getElementById('cantidad').innerHTML = cantidad;
document.getElementById('precio').innerHTML = precio;

document.getElementById('totalA').innerHTML = (cantidad * precio);
document.getElementById('totalB').innerHTML = (cantidad * precio);




// Cargar ventana para imprimir 

window.onload = function() { window.print(); }

// Fecha y Hora
let hoy = new Date();
let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
let ho = hoy.getHours();
let m = hoy.getMinutes();
m = checkTime(m);

function checkTime(i) {
if (i < 10) {i = "0" + i}; 
return i;
}

let hora = ho + ":" + m;
let fechaYHora = fecha + ' ' + hora;
document.getElementById('fecha').innerHTML = fechaYHora;


function cerrar(){
  
    window.close("factura.html");
  
  }
setInterval("cerrar()",6000);
