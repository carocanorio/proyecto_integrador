window.addEventListener("load", function(){

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;









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




    //<h4 class="halsey">Artista: <a class="hal" href="detail_artist.html"></a></h4>
    //<h4 class="halsey">Album: <a class="hal" href="detail_album.html"></a></h4>
    //<h4 class="halsey"><a class="hal" href="https://www.youtube.com/watch?v=9LhN6E01Mkc"> <i class="far fa-play-circle"></i> Escuchar "Eyes Closed"</a></h4>
    //<h4 class="agregarafavortios"><i class="far fa-heart"></i><a class="hal" href="playlist.html"> Agregar a favoritos</a></h4>
    //<h4 class="halsey"> <a class="si2" href="playlist.html">Ver playlist</a></h4>
})
