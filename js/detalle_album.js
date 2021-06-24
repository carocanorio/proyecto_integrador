window.addEventListener("load", function(){

    let queryString = location.search;
    let queryStringToObject = new URLSearchParams(queryString); 
    let id = queryStringToObject.get('id');

    //INFORMACION DEL ALBUM
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;

    fetch (url)
    .then(function (response){
            return response.json();
    })
    .then (function(data){
        console.log(data);

        let nombreAlbum = document.querySelector(".she");
        nombreAlbum.innerText += `${data.title}`;

        let imagenAlbum = document.querySelector(".imgartist");
        imagenAlbum.innerHTML += `<img width="400px"  class="detalle" src="${data.cover_big}" alt="Foto del Album">`

        let contenidoNombreArtista = document.querySelector(".nombre");
        contenidoNombreArtista.innerHTML += `<a href="detail_artist.html?id=${data.artist.id}">${data.artist.name}</a>`    
            
        let genero = document.querySelector(".genero");
        genero.innerHTML += `<a href="detail-genres.html?id=${data.genre_id}">${data.genres.data[0].name}</a>` 

        let fecha = document.querySelector(".fecha");
        fecha.innerHTML +=`${data.release_date}`
    })
    .catch( function(error){
        console.log(error);
    })


    //TRACKLIST
    let urlTrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`;

    fetch (urlTrack)
    .then(function (response){
        return response.json();
    })
    .then (function(data){
            console.log(data);
            
        let arrayInfo = data.data;
        let tracklist = document.querySelector(".lista1");
        let contenidoLista =""; 
        console.log(data)

        for(let i=0; i<arrayInfo.length; i++){
            contenidoLista += `
                    <li class="top"> 
                        <a href="detail_track.html?id=${arrayInfo[i].id}"><i class="far fa-play-circle"></i>${arrayInfo[i].title}</a> 
                    </li>` 
        
        
        }
            tracklist.innerHTML += contenidoLista; 

    })
    .catch( function(error){
        console.log(error);
    })
            
    //TOP ALBUMS
    let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums`;
    
    fetch( urlArtistas ) 
        .then( function(response){ 
                return response.json(); 
        })
        .then( function(data){ 

            let arrayRelated = data.data;
            let topAlbums= document.querySelector(".contenedor_artistas_home");
            let contenedor =""; 
            console.log(data)

            for(let i=0; i<5; i++){
                contenedor += `
                <article class="artistas_home">    
                    <a href="detail_album.html?id=${arrayRelated[i].id}"><img src="${arrayRelated[i].cover_big}" alt="album imagen"></a>
                    <h4><a href="detail_album.html?id=${arrayRelated[i].id}">${arrayRelated[i].title}</a></h4>
                    <h4><a class="nombreDelArtista" href="detail_artist.html?id=${arrayRelated[i].artist.id}">${arrayRelated[i].artist.name}</a></h4>
                </article>`
        
           
            } 
             topAlbums.innerHTML += contenedor; 
                       
        })
        .catch( function(error){
            console.log(error);
        })


    //validar formulario de búsqueda  
    let formulario = document.querySelector("form");
    let campoBuscar = document.querySelector("[name = search]");
    let alert = document.querySelector(".alerta");
    let closeIcon = document.querySelector(".closeIcon");

    formulario.addEventListener("submit" , function(e){
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


