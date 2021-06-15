
window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    console.log ('holaaa');


//validar formulario de búsqueda  
let formulario = document.querySelector("form");
let campoBuscar = document.querySelector("[name = search]");
let alert = document.querySelector(".alerta");
let closeIcon = document.querySelector(".closeIcon");

    let queryString = location.search //Caputramso qs
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
    let id = queryStringToObject.get('id');

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;
        

    fetch( url )
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            //Aca muestro código
            // console.log(data);
            let sectionAlbum = document.querySelector('.album_track_home_conteiner')
            let contenidoSection = '';

            contenidoSection.innerHTML += ` <article class="album_track_home">				    
                                            <a href="detail_album.html"><img class="foto-album" src="${data.data.picture}" alt="album imagen"></a>
                                            <h5><a class="artista-album" href="./detail_artist.html">artist:</a></h5>
                                            <h3><a class="nombre-album" href="detail_album.html">${data.data.name}</a></h3>    
                                            </article> 

                                           `        
        })
        .catch( function(error){
            console.log(error);

        })


})