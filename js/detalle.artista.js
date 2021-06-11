window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/` //

fetch( url ) //Permite consultar la url de forma asincrónica, es una promesa
    .then( function(response){ //procesa
        return response.json(); //es otra promesa, necesita otro then para contenerla
    })
    .then( function(data){ //Aca muestro código, el segundo then recibe la info del primer then y trabajo con info que recibí
        let section = document.querySelector('.artisthalsey'); //selecciono la seccion
        section.innerHTML += `<h1 class="she">${data.data.name}</h1>`;     //meto titulo

        let infoArtista = document.querySelector(".artist"); //si no es entre comillas lo toma como variable
        infoArtista.innerHTML += `<div class="imgartist"> 
                                    <img width="400px" class="detalle"  src="${data.data.picture.url}" alt="Artista">
                                 </div>` //agrego a y mantengp lo q estaba en infoartista
    })
    .catch( function(error){
        console.log(error);
    })

let link = "https://cors-anywhere.herokuapp.com/"

fetch( link ) //Permite consultar la url de forma asincrónica, es una promesa
    .then( function(response){ //procesa
        return response.json(); //es otra promesa, necesita otro then para contenerla
    })
    .then( function(data){ //Aca muestro código
        let arrayInfo = data.data; //es un OL, variable.propiedad
        let topAlbums = document.querySelector(".contenido");
        let contenidoLista =""; //contenido dentro de la lista, a llenar
    
        for(let i=0; i<arrayInfo.length; i++){//bucle  que recorre array de albumes
            contenidoLista += `
            <h4 class="she2">Top albumes:
                <ol class="toptracks">
                    <li> 
                        <a href="detail_album.html?id=${arrayInfo[i].id}"> 
                                 ${arrayInfo[i].title}
                        </a>
                    </li>
                </ol>
            </h4>` //INVESTIGAR ACÁ QUE HACE CADA COSA MEJOR

        topAlbums.innerHTML += contenidoLista; //a top albums le agrego lo que puse en contenido lista
        } 
    })
    .catch(function (error){
        console.log(error)
    });

})