window.addEventListener("load", function(){

    //INFORMACION DEL ALBUM
    let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127";

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
    let urlTrack = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127/tracks";

    fetch (urlTrack)
    .then(function (response){
        return response.json();
    })
    .then (function(data){
            console.log(data);
            
        let arrayInfo = data.data;
        let tracklist = document.querySelector(".lista1");
        let contenidoLista =""; //contenido dentro de la lista, a llenar
        console.log(data)

        for(let i=0; i<arrayInfo.length; i++){//bucle  que recorre array de track
            contenidoLista += `
                    <li class="top"> 
                        <a href="detail_track.html?id=${arrayInfo[i].id}">${arrayInfo[i].title}</a> 
                    </li>` //INVESTIGAR ACÁ QUE HACE CADA COSA MEJOR
        
        tracklist.innerHTML += contenidoLista; //a top albums le agrego lo que puse en contenido lista
        }
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


