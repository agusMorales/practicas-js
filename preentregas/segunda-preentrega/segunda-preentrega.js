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

const categoriaElegida = ["electronics", "jewelery"];
const mensajeBienvenida = "¡Bienvenido a nuestro ecommerce!";
const saludo = "¡Gracias por visitarnos!";

function filtrarProd(products, categories) {
  return products.filter((product) => categories.includes(product.category));
}

function ordenarProductosPorTitulo(products) {
  return products.sort((a, b) => a.title.localeCompare(b.title));
}
function mostrarProductos(productosOrdenados) {
  return productosOrdenados
    .map((producto, indice) => `${indice + 1}) ${producto.title}`)
    .join("\n");
}

function fechaEntrega(diasHabiles) {
  let diaEntrega = new Date();
  while (diasHabiles > 0) {
    diaEntrega.setDate(diaEntrega.getDate() + 1);
    if (diaEntrega.getDay() !== 0 && diaEntrega.getDay() !== 6) {
      diasHabiles--;
    }
  }
  return diaEntrega;
}

// Se le pide al usuario elegir un producto de la lista, si el nro no es valido le pide que iontente nuevamente hasta que ingrese uno valido o cancele.

function productos_listado_(mensajeProductos, productosOrdenados) {
  let estaProducto = false;
  let productoElegido = parseInt(
    prompt(
      `Estos son los productos disponibles, con entrega a domicilio en 5 días hábiles:\nELIJA EL NÚMERO DEL PRODUCTO\n${mensajeProductos}`
    )
  );
  let productoSeleccionado;

  while (!estaProducto) {
    if (productoElegido > 0 && productoElegido <= productosOrdenados.length) {
      productoSeleccionado = productosOrdenados[productoElegido - 1];
      estaProducto = true;
    } else {
      estaProducto = manejarSelecciónNoVálida(mensajeProductos);
    }
  }

  return productoSeleccionado;
}

function manejarSelecciónNoVálida(mensajeProductos) {
  const respuestaUsuario = confirm(
    "El número de producto seleccionado no es válido. ¿Desea intentarlo nuevamente?"
  );
  if (respuestaUsuario) {
    const nuevoProductoElegido = prompt(
      `Estos son los productos disponibles:\n${mensajeProductos}\n¿Qué producto desea comprar?`
    );
    if (nuevoProductoElegido === null) {
      alert(saludo);
      return true; // Mostrar mensaje de salida
    } else {
      return false; // Intentar nuevamente
    }
  } else {
    alert(saludo);
    return true; // Mostrar mensaje de salida
  }
}

// Creo la funcion para mostrarle al usuario los detalles del producto elegido y pregunto si desea realizar la compra. En caso de cancelar le muestro el alert. Si el usuario acepta se muestra el mensaje proporcionandole una fecha estimada de entrega.
function confirmarCompra(productoSeleccionado) {
  const confirmacionCompra = confirm(
    `Nombre: ${productoSeleccionado.title}\nDescripción: ${productoSeleccionado.description}\nPrecio: $${productoSeleccionado.price}\n¿Desea completar la compra?`
  );
  if (confirmacionCompra) {
    const fechaAEntregar = fechaEntrega(15);
    alert(
      `¡Gracias por su compra! La fecha estimada de entrega es ${fechaAEntregar.toLocaleDateString()}.`
    );
  } else {
    alert(saludo);
  }
}

// Uso del código
const productosFiltrados = filtrarProd(products, categoriaElegida);
alert(mensajeBienvenida);
alert(`Aca encontraras:electrodomestico y Joyas`);
const productosOrdenados = ordenarProductosPorTitulo(productosFiltrados);
const mostrarProductosAlert = mostrarProductos(productosOrdenados);
const productoSeleccionado = productos_listado_(
  mostrarProductosAlert,
  productosOrdenados
);
if (productoSeleccionado) {
  confirmarCompra(productoSeleccionado);
}
