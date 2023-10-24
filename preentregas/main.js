// ESTOS PUNTOS DE TAREA COMPRENDEN TODO LO VISTO DURANTE LAS CLASE 1, 2, 3, 4
// EL PRIMER DESAFÍO COMPRENDE: VARIABLES, CONDICIONALES, BUCLES, FUNCIONES
// ESO SIGNIFICA QUE TODO EJERCICIO QUE CONTENGA MÉTODOS O DATOS QUE NO FUERON EN CLASES, NO SERÁN EVALUADOS
// RECUERDEN QUE EL PRIMER DESAFÍO INVOLUCRA QUE INTEGREN TODO LO VISTO
// ACLARACIÓN: ESTE DESAFÍO NO NECESARIAMENTE PODRÁ ESTAR RELACIONADO CON EL DESAFÍO FINAL

// CADA PUNTO EN REALIDAD ES UN EJERCICO ÚNICO QUE CONTIENE TODO LO NECESARIO PARA APROBAR
// LOS TEXTOS DE LOS MENSAJES SON A CRITERIO PERSONAL, PERO DEBEN SEGUIR LA LÓGICA PLANTEADA

// 1) PRIMER CASO:
// - Pregunte al usuario su nombre a través de un prompt. 
// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a nuestro ecommerce Javier." -----------------preguntar en caso de que no ingrese un nombre 
// - Pregúntele al usuario, con un nuevo prompt, qué categoría de producto le interesaría comprar, ej: "¿Qué desea comprar? Elija la opción 1 si son remeras, opción 2 si son pantalones". La frase y la forma de introducir los datos queda a criterio de ustedes. Lo necesario es que a partir del valor ingresado, se valide qué mostrar luego.
// - Valide el valor ingresado. En el caso de que sea, por ejemplo, 1, muestre por confirm el artículo remera, con un mensaje de este estilo: "Usted eligió remera. Su precio es de $x. Desea comprar este artículo?"
// - En el caso de cancelar, terminar el algoritmo con un nuevo alert: "Muchas gracias por su visita"
// - Si el usuario decide aceptar la compra, se deberá mediante un bucle, reproducir tres mensajes distintos: El primero será: "Ingrese su dirección para poder realizar el envío del pedido", el segundo: "Su artículo será enviado a: - dirección-" y el tercero: "Muchas gracias por su compra".
// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN ALERT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.

function procesoCompraDelUsuario() {
    bienvenida_(nombreUsuario , "Bienvenido a nuestro ecommerce");
    seleccionarCategoria()
}



function pedirNombre() {
    let nombre;
  
    do {
      nombre = prompt("Por favor, ingresa tu nombre:");
    } while (nombre === null || nombre.trim() === "");
  
    return nombre;
  }
  
  const nombreUsuario = pedirNombre();

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function bienvenida_(usuario,mensajeBienvenida) {
    if (usuario!==null && usuario!=="") { //hice esto en el caso de que ingrese un null o un string vacio
        mostrarMensaje(`${mensajeBienvenida} ${usuario}`);
    } else {
        mostrarMensaje("No ingresaste un nombre válido.");
    }
}

function seleccionarCategoria() {
    let precio= 0;
    let producto=""
    const opcion = parseFloat(prompt("¿Qué desea comprar? Elija la opción: 1 Remeras o 2 Pantalones"));
    if (opcion === 1) {
        precio=12000;
        producto="Remera"
        confirmarProducto_Precio(producto,precio);
    } else if (opcion === 2) {
        precio=22000;
        producto="Pantalon"
        confirmarProducto_Precio(producto,precio);;
    } else {
        mostrarMensaje("Opción no válida. Por favor, elija una opción válida.");
    }//agrege un caso en el que el usuario no ingrese uno de esos valores 
}


function confirmarProducto_Precio(articuloVenta,precioArticulo) {
    const confirmacion = confirm(`Usted eligió ${articuloVenta}. Su precio es de $${precioArticulo}. Desea comprar este artículo?`);
    return definirCompra(confirmacion);
}

function definirCompra(bool) {
    if (bool) {
        const direccion = prompt("Ingrese su dirección para poder realizar el envío del pedido:");
        mostrarMensaje(`Su artículo será enviado a: ${direccion}`);
        mostrarMensaje("Muchas gracias por su compra.");
    } else {
        mostrarMensaje("Muchas gracias por su visita");
    }
}

procesoCompraDelUsuario()

// 2) SEGUNDO CASO:
// - Pregunte al usuario su nombre a través de un prompt. 
// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a la red Javier"
// - A través de un bucle, enviar 5 prompts con mensajes diferentes. Imaginen que cada prompt envía un "tweet" y que, el usuario a través del input, tiene que calificarlo. Puede calificarlo con: "me gusta" y "no me gusta". 
// Si el valor ingresado es "me gusta", mediante una variable acumuladora, se validará la cantidad. Si el valor es "no me gusta", también se precisará de otra variable que acumule ese resultado.
// - Luego del bucle, se debe enviar un alert que visualice la cantidad de "me gusta" y "no me gusta". Ej: "Del siguiente contenido, te gustaron 3 y no te gustaron 2". Los números deben representar a los valores de las variables acumuladas.
// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN PROMPT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.

function general(){ //cambiar el nombre
    bienvenida_(nombreUsuario , "Bienvenido a la red");
    calificarTweets();
}

function calificarTweets() {
    let meGusta = 0;
    let noMeGusta = 0;
    for (let i = 1; i <= 5; i++) {
        while (!calificacionValida) {
            tweet = prompt(`Calificación para el tweet ${i}: Por favor, ingrese "me gusta" o "no me gusta":`);     // hacer una funcion para que quede mas mas entendible y legibles
            
            if (tweet === "me gusta" || tweet === "no me gusta") {
                calificacionValida = true;
            } else {
                mostrarMensaje("Por favor, ingresa una calificación válida (me gusta/no me gusta).");
            }
        }
        const resultado = calificacionDeTweets(tweet, meGusta, noMeGusta,i);
        meGusta = resultado.meGusta;
        noMeGusta = resultado.noMeGusta;
    }
    mostrarMensaje(`Del siguiente contenido, te gustaron ${meGusta} y no te gustaron ${noMeGusta}.`);
}


function calificacionDeTweets(tweet, meGusta, noMeGusta,i) {
    if (tweet === "me gusta") {
            meGusta++;
    } else if (tweet === "no me gusta") {
        noMeGusta++;
    } else {
        mostrarMensaje("Por favor, ingresa una calificación válida (me gusta/no me gusta).");
        i--;
    }
    return { meGusta, noMeGusta };
}


general()