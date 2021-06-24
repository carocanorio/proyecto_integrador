let recuperoStorage = localStorage.getItem("favoritos");

let favoritos = JSON.parse(recuperoStorage);//obtengo el array

for (i=0; i<favoritos.length; i++){
    mostrarFavs (favoritos[i]); //recorro array de favoritos
}

function mostrarFavs (id){
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;
    fetch(url)

	.then(function(response) {
        return response.json();
    })

    .then(function(data){
        let musicContainer = document.querySelector('.track_home_conteiner');//destino de los datos en el html
        let resultados = ''
        musicContainer.innerHTML +=
        `

        <article class="track_home">

        
            <a href="detail_track.html?id=${data.id}"><img src="${data.album.cover_big}" width="200px" alt="Album Cover"></a>
             <h3><a href="detail_track.html?id=${data.id}">${data.title}</a></h3>
            <h5 class="nombreDelArtista"><a href="detail_artist.html?id=${data.artist.id}">${data.artist.name}</a></h5>
           

        </article> `
    })
    .catch( function(error){
        console.log(error);
    })

}

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
