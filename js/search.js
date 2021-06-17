window.addEventListener('load', function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    let loader = document.querySelector('.gif');
    loader.style.display = 'none'; //esconderlo, si no le pongo comillas el lenguaje interpreta q estoy escribiendo una variable
    
    let queryString = location.search; //retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
    let queryStringObj = new URLSearchParams (queryString);  //la transformamos en Objeto literal
    let formulario = queryStringObj.get("search"); //name del campo input del formulario

    let datoBuscado= document.querySelector(".result-titulo"); //agarrando el h1
    datoBuscado.innerText = `Resultados para ${formulario}` //insertando en el h1 lo que el usuario buscó

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${formulario}`;
    
    //TODOS
    fetch ( url ) //consultando la API
    .then (function (response){ 
        return response.json();
    })
    .then (function (data){

        let artistasData = data.data;
        let artistas = document.querySelector(".contenedor_artistas_home");
        let infoDeArtistas =""; 

        for (let i=0; i<artistasData.length; i++){
            infoDeArtistas += `
            <article class="artistas_home">    
                <a href="detail_artist.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].artist.picture_big}" alt="artista imagen"></a>
                <h4><a href="detail_artist.html?id=${artistasData[i].formulario}">Artista: ${artistasData[i].artist.name}</a></h4>
            </article>
            <article class="artistas_home">    
                <a href="detail_album.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].album.cover_big}" alt="Imagen del Album"></a>
                <h4><a href="detail_track.html?id=${artistasData[i].formulario}">Track: ${artistasData[i].title}</a></h4>
            </article>
            <article class="artistas_home">    
                <a href="detail_album.html?id=${artistasData[i].formulario}"><img src="${artistasData[i].album.cover_big}" alt="Imagen del Album"></a>
                <h4><a href="detail_album.html?id=${artistasData[i].formulario}">Album: ${artistasData[i].album.title}</a></h4>
            </article>
            `
        }

        artistas.innerHTML += infoDeArtistas

    })
    .catch( function(error){
        console.log(error);
    })

    //FILTRO: ARTISTAS
    if (formulario == "Artista"){
        
        fetch ( url ) //consultando la API
        .then (function (response){ 
            return response.json();
        })
        .then (function (data){
    
            let arrayDeArtistas = data.data;
            let selectorDeArtistas = document.querySelector(".contenedor_artistas_home");
            let filtroDeArtistas =""; 
    
            for (let i=0; i<arrayDeArtistas.length; i++){
                infoDeArtistas += `
                <article class="artistas_home">    
                    <a href="detail_artist.html?id=${arrayDeArtistas[i].formulario}"><img src="${arrayDeArtistas[i].artist.picture_big}" alt="artista imagen"></a>
                    <h4><a href="detail_artist.html?id=${arrayDeArtistas[i].formulario}">Artista: ${arrayDeArtistas[i].artist.name}</a></h4>
                </article>
                `
            }
    
            selectorDeArtistas.innerHTML += filtroDeArtistas
    
        })
        .catch( function(error){
            console.log(error);
        })
    }
    

        
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





    