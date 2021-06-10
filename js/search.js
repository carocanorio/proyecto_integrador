/*La página deberá mostrar:

La lista de resultados que coincidan con el término buscado.
Los resultados deberán ser hipervínculos a las páginas de detalle correspondientes.
Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
*/

window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    let loader = document.querySelector(".gif");
    loader.style.display = "none"; //esconderlo, si no le pongo comillas el lenguaje interpreta q estoy escribiendo una variable
    
    let queryString = location.search; //retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
    let queryStringObj = new URLSearchParams (queryString);  //la transformamos en Objeto literal
    let formulario = queryStringObj.get("search"); //name del campo input del formulario????????

    let datoBuscado= document.querySelector(".result-titulo"); //agarrando el h1
    datoBuscado.innerText = `Resultados para ${formulario}` //insertando en el h1 lo que el usuario buscó

    let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart";
    
    fetch ( url ) //consultando la API

        .then (function (response){
            return response.json();
        })
        .then (function (data){

            console.log(data);
            let informacion = data.data;
            let section = document.querySelector(".contenedor_artistas_home");
            let resultados = "";

            for (let i=0; i<informacion.length; i++){
                resultados += `<section class="artistas_home result-item">
                <h4>${informacion[i].title} </h4>
                <img src="${informacion[i].images.original.url}"> </a>
                `
            }

            section.innerHTML += resultados
        })
        .catch( function(error){
            console.log(error);
        })
})  



    