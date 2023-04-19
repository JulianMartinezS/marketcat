{

// Array de catalogo
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

//primera entrada de prompt 

while (interaccion != "si" && interaccion != "no"){
    alert("Estas complicado hoy eh ! ¿Si o no?")
    interaccion = prompt("¿Te gustaria comprar en nuestra tienda?")
}

if(interaccion == "si"){
    alert("Estos son los productos que tenemos disponibles hasta que avance el curso de JS")

    let listaProductos = productosEnVenta.map((producto) => producto.nombre + " " + producto.valor + " USD ");

    alert(listaProductos.join(" - "))
    

}

// todavia al no tener un catalogo en el html que el usuario pueda ver, le pasamos alguno productos mediante alert

else if (interaccion == "no"){
    alert("Que bajón, vos te lo perdés")
}

while(interaccion != "no"){
    let producto = prompt("Elige un producto de nuestro catalogo")
    let valor = 0

    if(producto == "lentes" || 
    producto == "calza" || 
    producto == "remera" || 
    producto == "short" || 
    producto == "zapatillas" || 
    producto == "medias" || 
    producto == "musculosa" || 
    producto == "buzo"){

    // esta es la parte repetida del codigo pero me resulto mas facil escribirla nuevamente que acceder al array padre 

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
        default:
            break;
        
        }

    let cantidad = parseInt(prompt("¿Cuantos articulos de este le gustaria comprar?"))

    miCarrito.push({producto , cantidad, valor})
    console.log(miCarrito)
} else {
    alert("Ese producto no existe")
}


interaccion = prompt("¿Te gustaria seguir comprando?")

}



    while(interaccion === "no"){
        alert("Eso fue todo, gracias!")
        miCarrito.forEach((chequeoCarrito) => {
            alert("Tu compra esta en la consola, presiona F12 !")
            console.log(" Producto: " + chequeoCarrito.producto + " Cantidad: " + chequeoCarrito.cantidad + " Total a pagar: " + chequeoCarrito.cantidad*chequeoCarrito.valor)
    })
    break;
}
}


const valorFinal = miCarrito.reduce((ecc, el) => acc + el.valor * el.cantidad, 0)

console.log("El valor final de su compra es: " + valorFinal)


//console.log(chequeoCarrito)
//console.log(miCarrito)