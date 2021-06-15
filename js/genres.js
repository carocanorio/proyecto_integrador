
window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)





    let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
        
    fetch ( url ) //consultando la API
        .then (function (response){
            return response.json();
        })
        .then (function (data){
            //aca muestro código
            console.log(data);
            let info = data.data;
            //capturamos los destinos
            let generos = document.querySelector('.conenedor_generos');
            let contenidoGeneros = ''; //poner el contenido a mostrar dentro de la sección

            for(let i=0; i<info.length; i++){
                contenidoGeneros += ` <article class="genres">   

                                            <a href="detail-genres.html?id=${info[i].id}"><img src="${info.picture_medium}" alt="genre imagen"></a>
                                            <h4><a href="detail-genres.html">${info.name}</a></h4>

                                        </article> ` //las comillas invertidas son muy importates!
            }

            generos.innerHTML += contenidoGeneros

            
            
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

