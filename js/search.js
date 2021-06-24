window.addEventListener('load', function(){

    let loader = document.querySelector('.gif');
    loader.style.display = 'none'; //esconderlo, si no le pongo comillas el lenguaje interpreta q estoy escribiendo una variable
    
    let queryString = location.search; //retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
    let queryStringObj = new URLSearchParams (queryString);  //la transformamos en Objeto literal
    let formulario = queryStringObj.get("search"); //name del campo input del formulario

    let datoBuscado= document.querySelector(".result-titulo"); 
    datoBuscado.innerText = `Resultados para ${formulario}` 

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${formulario}`;
    
    //TODOS
    fetch ( url ) 
    .then (function (response){ 
        return response.json();
    })
    .then (function (data){

        let leyenda = document.querySelector(".leyenda");
        if(data.data.length == 0){
            leyenda.style.display = "block";
        }

        let artistasData = data.data;
        let artistas = document.querySelector(".contenedor_artistas_home");
        let infoDeArtistas =""; 
        console.log(data)

        for (let i=0; i<artistasData.length; i++){
            infoDeArtistas +=
            `<article class="artistas_home">    
                <a href="detail_artist.html?id=${artistasData[i].artist.id}"><img src="${artistasData[i].artist.picture_big}" alt="artista imagen"></a>
                <h4><a href="detail_artist.html?id=${artistasData[i].artist.id}">Artista: ${artistasData[i].artist.name}</a></h4>
            </article>
            <article class="artistas_home">    
                <a href="detail_track.html?id=${artistasData[i].id}"><img src="${artistasData[i].album.cover_big}" alt="Imagen del Album"></a>
                <h4><a href="detail_track.html?id=${artistasData[i].id}">Track: ${artistasData[i].title}</a></h4>
            </article>
            <article class="artistas_home">    
                <a href="detail_album.html?id=${artistasData[i].album.id}"><img src="${artistasData[i].album.cover_big}" alt="Imagen del Album"></a>
                <h4><a href="detail_album.html?id=${artistasData[i].album.id}">Album: ${artistasData[i].album.title}</a></h4>
            </article>`
        }
     
        artistas.innerHTML += infoDeArtistas

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


        if(campoBuscar.value == ""){
            alert.innerText = "El campo no puede estar vacío";
            closeIcon.style.display = "inline" 
        }else if( campoBuscar.value.length < 3){
            alert.innerText = "Por favor ingrese más de 3 carácteres";
            closeIcon.style.display = "inline" 
        }else{
            this.submit(); 
        }
    })

    campoBuscar.addEventListener("input" , function(){
        alert.innerText = "";
        closeIcon.style.display = "none"
    })

})  





    