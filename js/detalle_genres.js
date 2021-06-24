
window.addEventListener("load", function(){ 

    let queryString = location.search 
    let queryStringToObject = new URLSearchParams(queryString); 
    let id = queryStringToObject.get('id');
    

    console.log(id);

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`
        

    fetch( url ) 
        .then( function(response){ 
            return response.json(); 
        })
        .then( function(data){ 
             console.log(data);
            let arrayInfo = data.data;

            let nombre = queryStringToObject.get('genre');
    
            nombreGenero= document.querySelector(".genres-detail-titulo");
            nombreGenero.innerText = `Lo mejor del ${nombre}` 
            
            let sectionAlbum = document.querySelector('.contenedor_artistas_home')
            let contenidoSection = '';

            for(let i=0; i<arrayInfo.length; i++){ 
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