
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

        




























}) 

