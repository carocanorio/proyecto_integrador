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

            nombreAlbum.innerText += `${data.title}`;
            imagen.src = data.data.album.cover;
            generoFechaArtista.innerHTML = `
                    <h4 class="halsey">Artista:<a class="hal" href="detail_artist.html">${data.artist.name}</a></h4>
                    <h4 class="halsey">Género:<a class="hal" href="detail-genres.html">${data.genres.data[0].name}</a></h4>
                    <h4 class="halsey">Fecha de publicación: ${data.release_date} </h4>
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

//validar formulario de búsqueda  
let formulario = document.querySelector("form");
let campoBuscar = document.querySelector("[name = search]");
let alert = document.querySelector(".alerta");
let closeIcon = document.querySelector(".closeIcon");

formulario.addEventListener("submit" , function(e){
    e.preventDefault();

    //Chequear si hay datos. que no este vacio

    if(campoBuscar.value == ""){
        alert.innerText = "El campo no puede estar vacío";
        closeIcon.style.display = "inline" 
    }else if( campoBuscar.value.length < 3){
        alert.innerText = "Por favor ingrese más de 3 carácteres";
        closeIcon.style.display = "inline" 
    }else{
        this.submit(); //el this hace referencia al formulario
    }
})

//Limpiar el mensaje de error cuando el usuario modifique el contenido del campo input, ya que antes seguía el error

campoBuscar.addEventListener("input" , function(){
    alert.innerText = "";
    closeIcon.style.display = "none"
})

})


