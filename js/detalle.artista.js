window.addEventListener("load", function(){ //Evento que controla que todo el html esté cargado en el navegador (window se carga antes que document)
    // detalle gif
let queryString = location.search //Caputramso qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let url = ``

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        //Aca muestro código
        // console.log(data);
        let section = document.querySelector('.detalle')

        section.innerHTML += `<article>
                                <h2>${data.data.title}</h2>
                                <img src="${data.data.images.original.url}">
                            </article>`        
    })
    .catch( function(error){
        console.log(error);
    })


//Agregar gif a lista de favoritos.
let favoritos = [];

//Recuperar datos del Storage
let recuperoStorage = localStorage.getItem("favoritos"); //que storage me de lo q hay en favoritos

//Chequar  y agregar la información de local storage en el array
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage); //si me devolvió algo lo parseo y meto en variable favoritos
}

//Chequear que el id esté en favoritos para cambiar el texto al usuario
if(favoritos.includes(id)){
    document.querySelector("fav").innerText = "Quitar de favoritos";
}

//Cuando el usuario haga click en "agregar a favoritos _> Agregar id del gif dentro del array.
let fav = document.querySelector('.fav');
console.log(fav);

fav.addEventListener("click", function(e){ 
    console.log(e);
    e.preventDefault();

    //Chequear si el id esta en el array
    if(favoritos.includes(id)){
        let idSacar = favoritos.indexOf(id) //para sacarlo tengo q ver la posicion
        favoritos.splice(idSacar , 1);
        document.querySelector(".fav").innerText = "Agregar a favoritos"
    }else{
        //Guardamos el id en el array
        favoritos.push(id);
        console.log(favoritos);
        document.querySelector("fav").innerText = "Quitar de favoritos";
    }
   

    //Armamos un string
    let favParaStorage = JSON.stringify(favoritos); 
    //Lo guardamos dentro de localStorage
    localStorage.setItem('favoritos', favParaStorage); 
    console.log(localStorage);

})

   
})  