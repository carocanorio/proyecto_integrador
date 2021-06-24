window.addEventListener("load", function(){ 

    let queryString = location.search //Caputramos qs, pero retorna esta info en cadena de texto
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL a la QS, pone cada atributo como propiedad del OL
    let id = queryStringToObject.get('id'); //le pido un dato de la QS y lo capturo, en este caso el id. GET te pide q le pases en forma de cadena de texto el atributo de la URL del cual queres obtener la info
    
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}` 
    
    fetch( url ) //Hace un pedido a una API
        .then( function(response){ //en este primer response viene la respuesta HTML, viene con un monton de cosas que la API devuelve al fetch
            return response.json(); //json me trae SOLO la info que esta en formato json
        })
        .then( function(data){ //Aca muestro código, como traigo info puntual no hago un for
    
            let section = document.querySelector('.artisthalsey'); //selecciono la seccion
            section.innerHTML += `<h1 class="she">${data.name}</h1>`;     //meto titulo
    
            let img= document.querySelector(".imgartist"); //si no es entre comillas lo toma como variable
            img.innerHTML += `<img width="400px" class="detalle"  src="${data.picture_big}" alt="Artista">` //agrego a y mantengp lo q estaba en img

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
            
            let arrayInfo = data.data; //Nos quedamos solo con el array de data, es optativa pero facilita el 
            let topAlbums = document.querySelector(".toptracks");
            let contenidoLista =""; //definimos variable para poner el contenido
            console.log(data)

            for(let i=0; i<5; i++){//bucle  que recorre array de albumes. Lo que está abajo es lo que quiero repetir, que cambien sus datos todo el tiempo
                contenidoLista += ` 
                        <li class="top"> 
                            <a href="detail_album.html?id=${arrayInfo[i].id}">
                            <img width="100px" src="${arrayInfo[i].cover_medium}" alt="Album Small"> ${arrayInfo[i].title}</a> 
                        </li>` 
                    //le paso a traves de detail artist los datos del id, armo una QS 
            
            } 
            topAlbums.innerHTML += contenidoLista; //a top albums le agrego lo que puse en contenido lista. De esta forma tengo todo el contenedor por un lado y el contenido por el otro, y después los uno
                
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