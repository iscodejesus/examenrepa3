function agregarCarrito(nombre, precio, imagen){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre,
        precio,
        imagen
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado");
}

function mostrarCarrito(){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    let contenedor =
    document.getElementById("carrito-contenedor");

    let total = 0;

    contenedor.innerHTML = "";

    carrito.forEach((producto,index)=>{

        total += Number(producto.precio);

        contenedor.innerHTML += `
        <div class="producto-carrito">

            <img src="${producto.imagen}"
            width="100">

            <h2>${producto.nombre}</h2>

            <p>Q${producto.precio}</p>

            <button onclick="eliminarProducto(${index})">
            Eliminar
            </button>

        </div>
        `;
    });

    document.getElementById("total").innerHTML =
    "Total: Q" + total;
}

function eliminarProducto(index){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index,1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();
}

function vaciarCarrito(){

    localStorage.removeItem("carrito");

    mostrarCarrito();
}

function mostrarFormulario(){

    document.getElementById("formulario")
    .style.display = "block";
}

function confirmarCompra(){

    let nombre =
    document.getElementById("nombre").value;

    if(nombre==""){
        alert("Ingrese su nombre");
        return;
    }

    alert("Pedido confirmado. Gracias por comprar en AC Coffee ☕");

    localStorage.removeItem("carrito");

    location.reload();
}
