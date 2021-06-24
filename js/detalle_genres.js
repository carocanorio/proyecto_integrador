
window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    let queryString = location.search //Caputramso qs
    let queryStringToObject = new URLSearchParams(queryString); 
    let id = queryStringToObject.get('id');
    

    console.log(id);

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`
        

    fetch( url ) // hace el pedido
        .then( function(response){ // fetch lo mete adentro de response (pero a mi solo me importan los datos)
            return response.json(); // esto retorna lo que yo quiero ->
        })
        .then( function(data){ // por eso aca sólo veo los datos que estoy buscando
             console.log(data);//Aca muestro el array
            let arrayInfo = data.data;

            let nombre = queryStringToObject.get('genre');
    
            nombreGenero= document.querySelector(".genres-detail-titulo");//agarrando el titulo principal de la página
            nombreGenero.innerText = `Lo mejor del ${nombre}` //insertando en el h1 lo que el nombre del género que el usuario clicleó 
            
            let sectionAlbum = document.querySelector('.contenedor_artistas_home')
            let contenidoSection = '';

            for(let i=0; i<arrayInfo.length; i++){ //bucle  que recorre el array 
                contenidoSection +=  ` <article class="artistas_home">  
                                            <a href="detail_artist.html?id=${arrayInfo[i].id}"><img src="${arrayInfo[i].picture_big}" alt="artista imagen"></a>
                                            <h4><a href="detail_artist.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>                   
                                        </article>   `                                    
                                }

                        sectionAlbum.innerHTML += contenidoSection;                                               
              
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