// ESTOS PUNTOS DE TAREA COMPRENDEN TODO LO VISTO DURANTE LAS CLASE 1, 2, 3, 4, 5, 6 ,7, 8
// EL SEGUNDO DESAFÍO COMPRENDE: VARIABLES, CONDICIONALES, BUCLES, FUNCIONES, OBJETOS, ARRAYS Y FUNCIONES DE ORDEN SUPERIOR
// ESO SIGNIFICA QUE TODO EJERCICIO QUE CONTENGA MÉTODOS O DATOS QUE NO FUERON VISTOS EN CLASES, NO SERÁN EVALUADOS
// ESO SIGNIFICA QUE DEBEN INCLUIR TODO LO VISTO HASTA LA CLASE 8

// CASO ECOMMERCE
// DENTRO DE LA CARPETA DATA, HAY UN ARCHIVO products.js QUE PODEMOS UTILIZAR PARA EL DESARROLLO DE NUESTRA PREENTREGA
// 1) Tomar dos categorías de productos que deseen incorporar en su tienda y filtrar de entre todos los productos aquellos que cumplan con la categoría.
// 2) Mediante un alert, saludar al usuario y darles la bienvenida a su ecommerce.
// 3) Mediante un alert, visualizar las categorías de productos disponibles.
// 4) Mediante un prompt, mostrar la lista de productos disponibles ordenados de manera A-Z y preguntar qué producto quiere comprar.
// 5) Con el valor obtenido del punto 4, se deberá buscar el producto deseado y mediante un confirm, mostrar el nombre, descripción y precio del producto. Se deberá preguntar al usuario si se desea completar la compra. En caso de que no se encuentre el producto, se deberá dar la chance de ingresarlo nuevamente.
// 6) Con el valor obtenido del punto 5), se deberá visualizar un alert que agradezca la compra con una supuesta fecha de entrega -usando date-, en el caso de que la acepte, si la cancela, se agradecerá la interacción.

  
  function filtrarProductosPorCategorias(categoria1, categoria2) {
    return products.filter((producto) => producto.category === categoria1 || producto.category === categoria2);
  }
  
  const cat1 = "jewelery";
  const cat2 = "electronics";
  
  function mostrarProductosConAlert(array) {
    const productosOrdenados = array.slice().sort((a, b) => a.title.localeCompare(b.title));
  
    let mensaje = "Productos disponibles (ordenados por título):\n";
  
    for (const producto of productosOrdenados) {
      mensaje += `\nProducto: ${producto.title}\nDescripción: ${producto.description}\nPrecio: $${producto.price}\n`;
    }
  
    alert(mensaje);
  }
  
  const categoríasDisponibles = filtrarProductosPorCategorias(cat1, cat2).map((producto) => producto.category);
  const categoríasTexto = categoríasDisponibles.join(', ');

  console.log(filtrarProductosPorCategorias(cat1, cat2).sort((a, b) => a.title.localeCompare(b.title)))
  function mostrarProductosEnConsola(array) {
    const productosOrdenados = array.slice().sort((a, b) => a.title.localeCompare(b.title));
    
    console.log("Productos disponibles (ordenados por título):");
    
    for (const producto of productosOrdenados) {
      console.log(`\nProducto: ${producto.title}\nDescripción: ${producto.description}\nPrecio: $${producto.price}`);
    }
  }
  
  alert("¡Bienvenido a nuestra tienda en línea! Esperamos que encuentres lo que estás buscando.");
  alert("Categorías de productos disponibles: " + categoríasTexto);
  
  mostrarProductosConAlert(filtrarProductosPorCategorias(cat1, cat2));
  
  const productoElegido = prompt("Ingrese el nombre del producto que desea comprar:");
  
  const productoSeleccionado = products.find((producto) => producto.title === productoElegido);
  
  if (productoSeleccionado) {
    alert(`Ha seleccionado: ${productoSeleccionado.title}\nDescripción: ${productoSeleccionado.description}\nPrecio: $${productoSeleccionado.price}`);
    
    const fechaEntrega = new Date();
    fechaEntrega.setDate(fechaEntrega.getDate() + 7); // Supongamos que la entrega se realizará en 7 días.
  
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    alert(`Gracias por su compra. Su producto llegará el ${fechaEntrega.toLocaleDateString(undefined, options)}`);
  } else {
    alert("El producto seleccionado no se encuentra en la lista. Por favor, inténtelo de nuevo.");
  }
  
  
// const ropaDeHombre = products.filter(( products ) => {
//     return products.category === "men's clothing"
// })

// const joyas = products.filter(( products ) => {
//     return products.category === "jewelery"
// })


// const electronica = products.filter(( products ) => {
//     return products.category === "electronics"
// })


// const ropaDeMujer = products.filter(( products ) => {
//     return products.category === "women's clothing"
// })


// function mostrarProductosEnPagina(array) {
//     document.write("<h2>Productos disponibles:</h2>");

//     array.forEach(producto => {
//         document.write('<div class="card">');
//         document.write('<h3>' + validarPropiedad(producto, "title") + '</h3>');
//         document.write('<div class="container-img">');
//         document.write('<img src="' + validarPropiedad(producto, "image") + '" alt="' + validarPropiedad(producto, "title") + '">');
//         document.write('</div>');
//         document.write('<button class="boton-compra">' + validarPropiedad(producto, "price").toString() + '</button>');
//         document.write('</div>');
//     });
// }

// const categoriaNumero = parseInt(prompt("Ingresa un número para seleccionar la categoría:\n1 - Ropa de Hombre\n2 - Joyas\n3 - Electrónica\n4 - Ropa de Mujer"));

// let arraySeleccionado;

// if (categoriaNumero === 1) {
//   arraySeleccionado = ropaDeHombre;
// } else if (categoriaNumero === 2) {
//   arraySeleccionado = joyas;
// } else if (categoriaNumero === 3) {
//   arraySeleccionado = electronica;
// } else if (categoriaNumero === 4) {
//   arraySeleccionado = ropaDeMujer;
// } else {
//   console.log("Número de categoría no válido");
// }



// mostrarProductosEnPagina(arraySeleccionado.sort((a, b) => a.title.localeCompare(b.title)));