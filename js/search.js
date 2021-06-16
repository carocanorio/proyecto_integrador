/*La página deberá mostrar:

La lista de resultados que coincidan con el término buscado.
Los resultados deberán ser hipervínculos a las páginas de detalle correspondientes.
Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
*/

window.addEventListener('load', function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    let loader = document.querySelector('.gif');
    loader.style.display = 'none'; //esconderlo, si no le pongo comillas el lenguaje interpreta q estoy escribiendo una variable
    
    let queryString = location.search; //retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
    let queryStringObj = new URLSearchParams (queryString);  //la transformamos en Objeto literal
    let formulario = queryStringObj.get("search"); //name del campo input del formulario????????

    let datoBuscado= document.querySelector(".result-titulo"); //agarrando el h1
    datoBuscado.innerText = `Resultados para ${formulario}` //insertando en el h1 lo que el usuario buscó

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${formulario}`;
    
    fetch ( url ) //consultando la API
        .then (function (response){
            return response.json();
        })
        .then (function (data){

            
            let artistasData = data.data;
            let artistas = document.querySelector(".contenedor_artistas_home");
            let contenido = '';

            for(let i=0; i<artistasData.length; i++){
                contenido += `
                                <article class="artistas_home">    
                                    <a href="detail_artist.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].artist.picture_big}" alt="artista imagen"></a>
                                    <h4><a href="detail_artist.html?id=${artistasData[i].formulario}">${artistasData[i].artist.name}</a></h4>
                                </article>

                                <article class="artistas_home">    
                                    <a href="detail_album.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].album.cover_big}" alt="artista imagen"></a>
                                    <h4><a href="detail_album.html?id=${artistasData[i].formulario}">${artistasData[i].album.title}</a></h4>
                                </article>                                 
                            `
            }          
              artistas.innerHTML += contenido;
            
            /* <article class="artistas_home">    
                                <a href="detail_album.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].album.track.picture_big}" alt="artista imagen"></a>
                                <h4><a href="detail_album.html?id=${artistasData[i].formulario}">${artistasData[i].album.track.title}</a></h4> */

           /* let album = document.querySelector(".album_track_home_conteiner");
            let contenidoAlbum = '';

            for(let i=0; i<artistasData.length; i++){
                contenidoAlbum +=  
                                    `<article class="album_track_home">
                                        <a href="detail_album.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].album.cover_big}" alt="Album"></a>
                                        <h5><a class="nombreDelArtista" href="detail_artist.html?id=${arrayData[i].artist.id}">${arrayData[i].artist.name}</a></h5>
                                        <h3><a href="detail_album.html?id=${artistasData[i].formulario}">${artistasData[i].album.title}</a></h3>
                                    </article>`
            }
            album.innerHTML += contenidoAlbum; */


        })
        .catch( function(error){
            console.log(error);
        })
        
    //validar formulario de búsqueda  
    let formularioValid = document.querySelector("form");
    let campoBuscar = document.querySelector("[name = search]");
    let alert = document.querySelector(".alerta");
    let closeIcon = document.querySelector(".closeIcon");

    formularioValid.addEventListener("submit" , function(e){
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





    