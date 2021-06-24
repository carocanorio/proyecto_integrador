
window.addEventListener("load", function(){

    let queryString = location.search 
    let queryStringToObject = new URLSearchParams(queryString); 
    let id = queryStringToObject.get('id');

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

    fetch( url ) 
    .then( function(response){ 
            return response.json(); 
    })
    .then( function(data){ 
    
        let section = document.querySelector('.she'); 
        section.innerText += `${data.title}`;     
    
        let img= document.querySelector(".img");
        img.innerHTML += `<img width="400px"  class="detalle"   src="${data.album.cover_big}" alt="Album Cover">`
            
        let artista = document.querySelector(".nombre");
        artista.innerHTML += `<a href="detail_artist.html?id=${data.artist.id}">${data.artist.name}</a>`    
            
        let album = document.querySelector(".genero");
        album.innerHTML += `<a href="detail_album.html?id=${data.album.id}">${data.album.title}</a>` 
            
        let player = document.querySelector(".player");
         player.src =`https://widget.deezer.com/widget/light/track/${id}`

        let tituloPlayer = document.querySelector(".halsey");
        tituloPlayer.innerText += ` ${data.title}`
    })
    .catch( function(error){
        console.log(error);
    })


    //TOP SONGS
    let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks`;
    
    fetch( urlArtistas ) 
        .then( function(response){ 
                return response.json(); 
        })
        .then( function(data){ 

            let arrayRelated = data.data;
            let topSongs= document.querySelector(".contenedor_artistas_home");
            let contenedor =""; 
            console.log(data)

            for(let i=0; i<5; i++){
                contenedor += `
                <article class="artistas_home">    
                    <a href="detail_track.html?id=${arrayRelated[i].id}"><img src="${arrayRelated[i].album.cover_big}" alt="album imagen"></a>
                    <h4><a href="detail_track.html?id=${arrayRelated[i].id}">${arrayRelated[i].title}</a></h4>
                    <h4><a class="nombreDelArtista" href="detail_artist.html?id=${arrayRelated[i].artist.id}">${arrayRelated[i].artist.name}</a></h4>
                </article>`
        
            
            } 
             topSongs.innerHTML += contenedor;  

        })
        .catch( function(error){
            console.log(error);
        })


    let favoritos = [];

    
    let recuperoStorage = localStorage.getItem('favoritos');
    
    if(recuperoStorage != null){
        favoritos = JSON.parse(recuperoStorage);
    }       
    
    if(favoritos.includes(id)){
        document.querySelector('.si2').innerHTML = `<i class="fas fa-heart"></i> Quitar de mí playlist`;
    }
    
    let fav = document.querySelector('.si2');
        console.log(fav);
    
    fav.addEventListener("click", function(e){
        e.preventDefault();
    
        if(favoritos.includes(id)){
            let idASacar = favoritos.indexOf(id);
            favoritos.splice(idASacar, 1);
            document.querySelector('.si2').innerHTML = `<i class="far fa-heart"></i> Añadir a mi playlist`;
        } else {
            favoritos.push(id);
            console.log(favoritos);
            document.querySelector('.si2').innerHTML = `<i class="fas fa-heart"></i> Quitar de mí playlist`;
        }

        let favParaStorage = JSON.stringify(favoritos);
        
        localStorage.setItem('favoritos', favParaStorage);
        console.log(localStorage);  
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
