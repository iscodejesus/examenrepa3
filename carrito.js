function mostrarCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let contenedor = document.getElementById("carrito-contenedor");
    let totalElemento = document.getElementById("total");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {

        total += producto.precio;

        contenedor.innerHTML += `
        <div class="producto-carrito">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Q${producto.precio}</p>

            <button onclick="eliminarProducto(${index})">
                Eliminar
            </button>
        </div>
        `;
    });

    totalElemento.innerHTML = "Total: Q" + total;
}

function eliminarProducto(index) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}

function vaciarCarrito() {

    localStorage.removeItem("carrito");

    mostrarCarrito();
}
