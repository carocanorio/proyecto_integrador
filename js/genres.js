
window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)





    let urlGeneros = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
        
 

         fetch( urlGeneros ) //Permite consultar la url de forma asincrónica, es una promesa
             .then( function(response){ //procesa
               return response.json(); //es otra promesa, necesita otro then para contenerla
         })


          .then( function(data){ //Aca muestro código
    
            let arrayInfo = data.data;
             //capturamos los destinos
            let generos = document.querySelector('.contenedor_generos');
            let contenido =""; //contenido a mostrar dentro de la sección
            console.log(data)


            for(let i=1; i<arrayInfo.length; i++){ //bucle  que recorre array de generos
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

