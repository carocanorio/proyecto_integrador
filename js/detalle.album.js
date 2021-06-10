window.addEventListener("load", function(){

    let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127";

    fetch (url)
        .then(function (response){
            return response.json();
        })
        .then (function(data){

            let nombreAlbum = document.querySelector(".dom");
            let imagen = document.querySelector(".detalle");
            let generoFechaArtistaLista = document.querySelector(".info");
            let lista = document.querySelector(".lista1");
            let arrayInfo = data.data;
            let contenidoLista = "";

            nombreAlbum.innerText += `${data.data.title}`;
            imagen.src = data.data.album.cover;
            generoFechaArtista.innerHTML = `
                    <h4 class="halsey">Artista:<a class="hal" href="detail_artist.html">${data.data.artist.name}</a></h4>
                    <h4 class="halsey">Género:<a class="hal" href="detail-genres.html">${data.data.genres.type}</a></h4>
                    <h4 class="halsey">Fecha de publicación: ${data.data.release_date} </h4>
            `
            for(let i=0; i<arrayInfo.length; i++){//bucle  que recorre array de tracks
                contenidoLista += `
                        <li> 
                            <a href="detail_album.html?id=${arrayInfo[i].id}"> 
                                     ${arrayInfo[i].tracks.data.title}
                            </a>
                        </li>` //INVESTIGAR ACÁ QUE HACE CADA COSA MEJOR
    
            lista.innerHTML += contenidoLista;
            }

})



})


