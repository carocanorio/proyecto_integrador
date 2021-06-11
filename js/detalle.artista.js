window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)

    let queryString = location.search //Caputramos qs
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
    let id = queryStringToObject.get('id');
    
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}` //
    
    fetch( url ) //Permite consultar la url de forma asincrónica, es una promesa
        .then( function(response){ //procesa
            return response.json(); //es otra promesa, necesita otro then para contenerla
        })
        .then( function(data){ //Aca muestro código
    
            let section = document.querySelector('.artisthalsey'); //selecciono la seccion
            section.innerHTML += `<h1 class="she">${data.name}</h1>`;     //meto titulo
    
            let img= document.querySelector(".detalle"); //si no es entre comillas lo toma como variable
            img.innerHTML += `<img src="${data.picture}">`            //agrego a y mantengp lo q estaba en img
    
        })
        .catch( function(error){
            console.log(error);
        })
    
    
    
    
    let link = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`
    
    fetch( link ) //Permite consultar la url de forma asincrónica, es una promesa
        .then( function(response){ //procesa
            return response.json(); //es otra promesa, necesita otro then para contenerla
        })
        .then( function(data){ //Aca muestro código
            let arrayInfo = data.data; //es un OL, variable.propiedad
            let topAlbums = document.querySelector(".toptracks");
            let contenidoLista =""; //contenido dentro de la lista, a llenar
        
            for(let i=0; i<arrayInfo.length; i++){//bucle  que recorre array de albumes
                contenidoLista += `
                        <li> 
                            <a href="detail_album.html?id=${arrayInfo[i].id}"> 
                                     ${arrayInfo[i].title}
                            </a>
                        </li>` //INVESTIGAR ACÁ QUE HACE CADA COSA MEJOR
    
            topAlbums.innerHTML += contenidoLista; //a top albums le agrego lo que puse en contenido lista
            } 
        })
        .catch(function (error){
            console.log(error)
        });
    
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
        closeIcon.style.display = "display"
    })

})