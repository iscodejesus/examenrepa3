const producto = {
    nombre: "Frappé de Café",
    precio: 30,
    imagen: "frappe.jpg",
    pagina: "frappe.html"
};

actualizarBoton();

function favorito(){

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.find(p => p.nombre === producto.nombre);

    if(existe){

        favoritos = favoritos.filter(p => p.nombre !== producto.nombre);

        alert("Producto eliminado de favoritos.");

    }else{

        favoritos.push(producto);

        alert("Producto agregado a favoritos ❤️");

    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    actualizarBoton();

}

function actualizarBoton(){

    const btn = document.getElementById("btnFavorito");

    if(!btn) return;

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.find(p => p.nombre === producto.nombre);

    if(existe){

        btn.innerHTML = "💔 Quitar de favoritos";

    }else{

        btn.innerHTML = "❤️ Agregar a favoritos";

    }

}
