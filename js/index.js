window.addEventListener("load", function(){
    
    //TOPSONGS
    let urlSongs = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks`;
    
    fetch( urlSongs ) //Permite consultar la url de forma asincrónica, es una promesa
    .then( function(response){ //procesa
        return response.json(); //es otra promesa, necesita otro then para contenerla
    })
    .then( function(data){ //Aca muestro código

        let arraySongs = data.data;
        let topSongs= document.querySelector(".track_home_conteiner");
        let conten =""; //contenido dentro de la lista, a llenar
        console.log(data)

        for(let i=0; i<5; i++){//bucle  que recorre array de albumes
        conten += `
            <article class="track_home">
                <a href="detail_track.html?id=${arraySongs[i].id}"><img width="225px" src="${arraySongs[i].album.cover_big}" alt="Canción"></a>
                <h5><a class="nombreDelArtista" href="detail_artist.html?id=${arraySongs[i].artist.id}">${arraySongs[i].artist.name}</a></h5>
                <h3><a href="detail_track.html?id=${arraySongs[i].id}">${arraySongs[i].title}</a></h3>
            </article>`
        
        } 
           topSongs.innerHTML += conten;         
    })
    .catch( function(error){
        console.log(error);
    })

    //TOP ALBUMS
    let urlAlbums = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums`;
    
    fetch( urlAlbums ) 
    .then( function(response){ 
            return response.json(); 
    })
    .then( function(data){ 

        let arrayAlbums = data.data;
        let topAlbums= document.querySelector(".album_track_home_conteiner");
        let contenedor =""; 
        console.log(data)

        for(let i=0; i<5; i++){
            contenedor += `<article class="album_track_home">
                <a href="detail_album.html?id=${arrayAlbums[i].id}"><img src="${arrayAlbums[i].cover_big}" alt="Album"></a>
                <h5><a class="nombreDelArtista" href="detail_artist.html?id=${arrayAlbums[i].artist.id}">${arrayAlbums[i].artist.name}</a></h5>
                <h3><a href="detail_album.html?id=${arrayAlbums[i].id}">${arrayAlbums[i].title}</a></h3>
            </article>`
        
        } 
           topAlbums.innerHTML += contenedor;         
    })
    .catch( function(error){
        console.log(error);
    })


    //ARTISTAS MÁS ESCUCHADOS
    let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists`;
    
    fetch( urlArtistas ) 
    .then( function(response){ 
        return response.json();
    })
    .then( function(data){ 

        let arrayRelated = data.data;
        let topArtists = document.querySelector(".contenedor_artistas_home");
        let contenedo =""; 
        console.log(data)

        for(let i=0; i<5; i++){
            contenedo += `
            <article class="artistas_home">    
                <a href="detail_artist.html?id=${arrayRelated[i].id}"><img src="${arrayRelated[i].picture_big}" alt="artista imagen"></a>
                <h4><a href="detail_artist.html?id=${arrayRelated[i].id}">${arrayRelated[i].name}</a></h4>
            </article>`
        
        } 
          topArtists.innerHTML += contenedo;          
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
    campoBuscar.addEventListener("input" , function(){
        alert.innerText = "";
        closeIcon.style.display = "none"
    })

    })

})





