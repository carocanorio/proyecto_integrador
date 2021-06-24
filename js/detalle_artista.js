window.addEventListener("load", function(){ 

    let queryString = location.search 
    let queryStringToObject = new URLSearchParams(queryString); 
    let id = queryStringToObject.get('id'); 
    
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}` 
    
    fetch( url ) 
        .then( function(response){ 
            return response.json(); 
        })
        .then( function(data){
    
            let section = document.querySelector('.artisthalsey'); 
            section.innerHTML += `<h1 class="she">${data.name}</h1>`;     
    
            let img= document.querySelector(".imgartist"); 
            img.innerHTML += `<img width="400px" class="detalle"  src="${data.picture_big}" alt="Artista">` 

        })
        .catch( function(error){
            console.log(error);
        })


    //TOP ALBUMS
    let urlTop = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`;
    
    fetch( urlTop ) 
        .then( function(response){ 
                return response.json(); 
        })
        .then( function(data){
            
            let arrayInfo = data.data; 
            let topAlbums = document.querySelector(".toptracks");
            let contenidoLista =""; 
            console.log(data)

            for(let i=0; i<5; i++){
                contenidoLista += ` 
                        <li class="top"> 
                            <a href="detail_album.html?id=${arrayInfo[i].id}">
                            <img width="100px" src="${arrayInfo[i].cover_medium}" alt="Album Small"> ${arrayInfo[i].title}</a> 
                        </li>` 
                    
            
            } 
            topAlbums.innerHTML += contenidoLista; 
                
        })
    
    //ARTISTAS RELACIONADOS
    let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/related`;
    
    fetch( urlArtistas ) 
        .then( function(response){ 
                return response.json(); 
        })
        .then( function(data){ 

            let arrayRelated = data.data;
            let relatedArtists = document.querySelector(".contenedor_artistas_home");
            let contenedor =""; 
            console.log(data)

            for(let i=0; i<5; i++){
                contenedor += `
                <article class="artistas_home">    
                    <a href="detail_artist.html?id=${arrayRelated[i].id}"><img src="${arrayRelated[i].picture_big}" alt="artista imagen"></a>
                    <h4><a href="detail_artist.html?id=${arrayRelated[i].id}">${arrayRelated[i].name}</a></h4>
                </article>`
        
            
            }
             relatedArtists.innerHTML += contenedor; 
                       
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