
window.addEventListener("load", function(){ 





    let urlGeneros = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
        
 

         fetch( urlGeneros ) 
             .then( function(response){ 
               return response.json(); 
         })


          .then( function(data){ 
    
            let arrayInfo = data.data;
            let generos = document.querySelector('.contenedor_generos');
            let contenido =""; 
            console.log(data)


            for(let i=1; i<arrayInfo.length; i++){ 
                contenido += ` <article class="genres">   

                                     <a href="detail-genres.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}"><img class="genero-img" src="${arrayInfo[i].picture_big}" alt="genre imagen"></a>
                                     <h4><a class="genero" href="detail-genres.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}">${arrayInfo[i].name}</a></h4>
              
                                </article> `
                                      
                                }
                                generos.innerHTML += contenido; 

            
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

