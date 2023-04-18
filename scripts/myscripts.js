
/*

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

*/

const productosEnVenta = [ 
    { nombre: "lentes", valor: 220},
    { nombre: "calza", valor: 80},
    { nombre: "remera", valor: 45},
    { nombre: "short", valor: 55},
    { nombre: "zapatillas", valor: 280},
    { nombre: "medias", valor: 25},
    { nombre: "musculosa", valor: 70},
    { nombre: "buzo", valor: 90}
];

let miCarrito = []

let interaccion = prompt("¿Te gustaria comprar en nuestra tienda?")

while (interaccion != "si" && interaccion != "no"){
    alert("Estas complicado hoy eh ! ¿Si o no?")
    interaccion = prompt("¿Te gustaria comprar en nuestra tienda?")
}

if(interaccion == "si"){
    alert("Estos son los productos que tenemos disponibles hasta que avance el curso de JS")

    let listaProductos = productosEnVenta.map((producto) => producto.nombre + " " + producto.valor + " USD ");

    alert(listaProductos.join(" - "))
    

}

else if (interaccion == "no"){
    alert("Que bajón, vos te lo perdés")
}

while(seleccion != "no"){
    let producto = prompt("Elige un producto de nuestro catalogo")
    let valor = 0

    if(producto == "lentes" || 
    producto == "calza" || 
    producto == "remera" || 
    producto == "short" || 
    producto == "zapatillas" || 
    producto == "medias" || 
    producto == "musculosa" || 
    producto == "buzo")

    switch(producto) {

        case "lentes":
            valor = 220;
            break;
        
        case "calza":
                valor = 80;
                break;

                
        case "remera":
            valor = 45;
            break;

            
        case "short":
            valor = 55;
            break;

            
        case "zapatillas":
            valor = 280;
            break;

            
        case "medias":
            valor = 25;
            break;

            
        case "musculosa":
            valor = 70;
            break;

            
        case "buzo":
            valor = 90;
            break;

        
    }

}
