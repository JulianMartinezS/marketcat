


function solicitarServicio() {

    let servicioSolicitado = prompt("Buen dia, ¿Que tipo de servicio estas buscando; vender, comprar o alquilar?")

        if (servicioSolicitado == "comprar") {
        alert ("Continúa por nuestro catalogo.")
        }
        else if (servicioSolicitado == "vender") {
        var cantidadPosibleVenta = parseInt(prompt("¿Cuántas prendas nos quieres vender?"))
        }
        else if (servicioSolicitado == "alquilar") {
        var posibleAlquiler = parseInt(prompt ("Coloca aqui el codigo de la prenda que quieres alquilar"))
    }

    console.log(servicioSolicitado)
    console.log(cantidadPosibleVenta)
    console.log(posibleAlquiler)

    for(let i = 1; i <= cantidadPosibleVenta; i++){
        console.log(i);
    }
    
}

solicitarServicio()











//var valorPosibleVenta = 0 ;

//while (valorPosibleVenta => 100 ) {

    //console.log("Ha ingresado una venta carisima a nuestra tienda")

   // valorPosibleVenta++;
//}





//for (var t = )while (valor1.toUpperCase() != "peñarol") {
    
  //  alert("Me gusta ese quipo, arriba " + valor1 + "!!")