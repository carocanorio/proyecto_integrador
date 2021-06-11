
window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    console.log ('holaaa');

    //fetch con un solo dato.
    /*let url = 'https://randomuser.me/api/';

    fetch(url) //consultando la API
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // Acá nuestro código
            let usuario = data.results[0];
            // console.log(data);
            //Capturamos los destinos
            let albumImg = document.querySelector('.foto-album');
            let albumArtist = document.querySelector('.artista-album');
            let albumName = document.querySelector('.nombre-album');

            albumImg.src = usuario.picture.medium;
            albumArtist.innerHTML = `${usuario.name.first}`
            albumName.innerHTML = usuario.email;
        })
        .catch( function(error){
        console.log(error);
    }) */

    let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
        
        fetch ( url ) //consultando la API
            .then (function (response){
                return response.json();
            })
            .then (function (data){
                //aca nuestro código
                let genero = data.data[0];
                //console.log(data);
                //capturamos los destinos
                let imgGenero = document.querySelector('.genero-img');
                let nombreGenero = document.querySelector('.genero');

                imgGenero.src = genero.picture_medium;
                nombreGenero.innerHTML = genero.name;
                
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

