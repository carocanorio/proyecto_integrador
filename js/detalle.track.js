
window.addEventListenerdEventListener("load", function(){

    let queryString = location.search //Caputramos qs
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
    let id = queryStringToObject.get('id');

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

    fetch( url ) //Permite consultar la url de forma asincrónica, es una promesa
    .then( function(response){ //procesa
            return response.json(); //es otra promesa, necesita otro then para contenerla
    })
    .then( function(data){ //Aca muestro código
    
        let section = document.querySelector('.she'); //selecciono la seccion
        section.innerText += `${data.title}`;     //meto titulo
    
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
    
    fetch( urlArtistas ) //Permite consultar la url de forma asincrónica, es una promesa
        .then( function(response){ //procesa
                return response.json(); //es otra promesa, necesita otro then para contenerla
        })
        .then( function(data){ //Aca muestro código

            let arrayRelated = data.data;
            let topSongs= document.querySelector(".contenedor_artistas_home");
            let contenedor =""; //contenido dentro de la lista, a llenar
            console.log(data)

            for(let i=0; i<5; i++){//bucle  que recorre array de albumes
                contenedor += `
                <article class="artistas_home">    
                    <a href="detail_album.html?id=${arrayRelated[i].id}"><img src="${arrayRelated[i].album.cover_big}" alt="album imagen"></a>
                    <h4><a href="detail_album.html?id=${arrayRelated[i].id}">${arrayRelated[i].title}</a></h4>
                    <h4><a class="nombreDelArtista" href="detail_artist.html?id=${arrayRelated[i].artist.id}">${arrayRelated[i].artist.name}</a></h4>
                </article>`
        
            topSongs.innerHTML += contenedor; 
            }                   
        })
        .catch( function(error){
            console.log(error);
        })


    let favoritos = [];//Agregar a playlist

    //Recuperar datos del storage
    let recuperoStorage = localStorage.getItem('favoritos');
    
    //Chequear y agregar la información de local storage en el array
    if(recuperoStorage != null){
        favoritos = JSON.parse(recuperoStorage);
    }       
    
    //Chequear que el id esté en el array para cambiar el texto al usuario.
    if(favoritos.includes(id)){
        document.querySelector('.si2').innerHTML = `<i class="fas fa-heart"></i> Quitar de favoritos`;
    }
    
    //Cuando el usuario haga click en "agregar a favoritos _> Agregar id dentro del array.
    let fav = document.querySelector('.si2');
        console.log(fav);
    
    fav.addEventListener("click", function(e){
        e.preventDefault();
    
        //Chequear si el id está en el array
        if(favoritos.includes(id)){
            let idASacar = favoritos.indexOf(id);
            favoritos.splice(idASacar, 1);
            document.querySelector('.si2').innerHTML = `<i class="far fa-heart"></i> Añadir a mi playlist`;
        } else {
            //Guardamos el id en el array
            favoritos.push(id);
            console.log(favoritos);
            document.querySelector('.si2').innerHTML = `<i class="fas fa-heart"></i> Quitar de favoritos`;
        }

        //Armamos un string
        let favParaStorage = JSON.stringify(favoritos);
        //Lo guardamos dentro de localStorage
        localStorage.setItem('favoritos', favParaStorage);
        console.log(localStorage);

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
    })

    //Limpiar el mensaje de error cuando el usuario modifique el contenido del campo input, ya que antes seguía el error

    alert.addEventListener("input" , function(){
        alert.innerText = "";
        closeIcon.style.display = "none"
    })

})
