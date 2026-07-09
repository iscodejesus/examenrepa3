let calificacion = 0;

const estrellas = document.querySelectorAll(".estrella");

estrellas.forEach((estrella, indice)=>{

    estrella.addEventListener("click", ()=>{

        calificacion = indice + 1;

        pintarEstrellas();

    });

});

function pintarEstrellas(){

    estrellas.forEach((estrella, indice)=>{

        if(indice < calificacion){

            estrella.classList.add("activa");

        }else{

            estrella.classList.remove("activa");

        }

    });

}

function guardarReseña(){

    const comentario = document.getElementById("comentario").value;

    if(comentario == "" || calificacion == 0){

        alert("Debes escribir un comentario y seleccionar una calificación.");

        return;

    }

    let reseñas = JSON.parse(localStorage.getItem("reseñasFrappe")) || [];

    reseñas.push({

        estrellas: calificacion,

        comentario: comentario

    });

    localStorage.setItem("reseñasFrappe", JSON.stringify(reseñas));

    document.getElementById("comentario").value="";

    calificacion = 0;

    pintarEstrellas();

    mostrarReseñas();

}

function mostrarReseñas(){

    const lista = document.getElementById("lista-reseñas");

    lista.innerHTML="";

    let reseñas = JSON.parse(localStorage.getItem("reseñasFrappe")) || [];

    reseñas.forEach(r=>{

        lista.innerHTML += `

        <div class="comentario">

            <div class="estrellas-mostrar">

                ${"⭐".repeat(r.estrellas)}

            </div>

            <p>${r.comentario}</p>

        </div>

        `;

    });

}

mostrarReseñas();
