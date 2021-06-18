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
        let musicContainer = document.querySelector('.music-container');//destino de los datos en el html
        let resultados = ''
        musicContainer.innerHTML +=
        `<article class="track_home_conteiner">

        <article class="track_home">

        <article class="music-img">
            <a href="detail_track.html?id=${data.id}"><img src="${data.album.cover_big}" width="200px" alt="Album Cover"></a>
        </article>

       <article class="music-name">
            <h6>${data.title}</h6>
            <p>${data.artist.name}</p>
       </article>
    
        </article>   

        </article> `
    })
    .catch( function(error){
        console.log(error);
    })


}
//que hay que hacer  para saber si hay datos?-> mostarlos.
//como le muesero al usuario u gif si tengo cuatro id's -> necesitamos recorrer el array de favoritos


//este for deveria busar y mostarr los favritos ->la info del gif esta en gifhy, no esta aca -> hay que pedrile a gifhy los datos 

//la matemos adenro del fecth y cn este la vamosa a procesar.


//Opcional avisar al usuario que no hay gifs en su lista.

//Necesitamos recorrer el array de facoritos







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
