/*La página deberá mostrar:
El término buscado. Ejemplo: “Resultados de búsqueda para: término ingresado en el input.”
La lista de resultados que coincidan con el término buscado.
Los resultados deberán ser hipervínculos a las páginas de detalle correspondientes.
Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
Si la búsqueda tarda en cargar deberá aparecer un spinner, gif animado o mensaje que dé al usuario referencia de que el procesos se está ejecutando. El elemento debe ocultarse una vez que el contenido de la página haya cargado por completo.
*/

window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)
    
    let queryString = location.search; //retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
    let queryStringObj = new URLSearchParams (queryString);  //la transformamos en Objeto literal
    let formulario = queryStringObj.get("search"); //name del campo input del formulario????????

    let datoBuscado= document.querySelector(".result-titulo"); //agarrando el h1
    datoBuscado.innerText = `Resultados para ${formulario}` //insertando en el h1 lo que el usuario buscó

    let url = `https://api.deezer.com/version/service/id/method/?parameters`;

   
    fetch ( url ) //consultando la API

        .then (function (response){
            return response.JSON();
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



    