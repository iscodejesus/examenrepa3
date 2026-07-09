<a href="index.html" class="back">
← Volver
</a>

</header>

<section class="container">

<h1 class="title">
🛒 Tu Carrito
</h1>

<div id="carrito"></div>

<div class="total-box">

<h2>Total</h2>

<div class="total" id="total">
Q 0
</div>

<div class="buttons">

<button class="vaciar" onclick="vaciarCarrito()">
Vaciar carrito
</button>

<a href="checkout.html">

<button
class="comprar"
id="btnComprar">

Finalizar Compra 💳

</button>

</a>
</div>

<div
class="mensaje"
id="mensajeCompra">

✅ Tu compra está lista.
Gracias por confiar en BLACKPISTONS.

</div>

</div>

</section>

<script>

let carrito =
JSON.parse(localStorage.getItem("carrito"))
|| [];

function renderCarrito(){

const contenedor =
document.getElementById("carrito");

const totalElemento =
document.getElementById("total");

const btnComprar =
document.getElementById("btnComprar");

contenedor.innerHTML = "";

let total = 0;

if(carrito.length === 0){

contenedor.innerHTML = `
<h2 style="text-align:center;color:#888;">
Tu carrito está vacío 🏍️
</h2>
`;

btnComprar.style.display = "none";

}

carrito.forEach((producto,index)=>{

total += producto.precio;

contenedor.innerHTML += `

<div class="producto">

<img src="${producto.imagen}">

<div class="info">
<h3>${producto.nombre}</h3>
<p class="price">
Q ${producto.precio.toLocaleString()}
</p>
</div>

<button
class="delete"
onclick="eliminar(${index})">

Eliminar

</button>

</div>
`;

});

totalElemento.innerText =
"Q " + total.toLocaleString();

if(carrito.length > 0){
btnComprar.style.display = "inline-block";
}

}

function eliminar(index){

carrito.splice(index,1);

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

renderCarrito();

}

function vaciarCarrito(){

localStorage.removeItem("carrito");

carrito = [];

document.getElementById(
"mensajeCompra"
).style.display = "none";

renderCarrito();

}

function compraLista(){

document.getElementById(
"mensajeCompra"
).style.display = "block";

}

renderCarrito();

</script>

</body>
</html>
