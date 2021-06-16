let urlAlbums = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums`;

let recuperoStorage = localstorage.getItems("favoritos");

//obtengo el array
let favoritos = JSON.parse(recuperoStorage);

//destno de los datos en el html
let lista = document.querySelector('.lista');


//opcional avusar al usuario que no hay gifs en su lista.


//que hay que hacer  para saber si hay datos?-> mostarlos.
//como le muesero al usuario u gif si tengo cuatro id's -> necesitamos recorrer el array de favoritos

for (let i=0; i<favoritos.length; i++){
//este for deveria busar y mostarr los favritos ->la info del gif esta en gifhy, no esta aca -> hay que pedrile a gifhy los datos 
	buscarYMostrarFavoritos(favoritos[i]);
}

function buscarYMostrarFavoritos(id){

let url = 'https: ${favoritos[i]}

//la matemos adenro del fecth y cn este la vamosa a procesar.
fetch(url)
	.then(funcion[response]{
return response.json[];
})
.then(function
//para mejorarlo podems hacer una funcion ques eejecute cada vez qye el codigo corre
//tengo os datos capturaldos?-> si, en lsita!3) 


}

//no hay diferencia entre el for y la fucnion, pero de esta manera organizamos mejor el código

//esto es lo q  ale le decia octa de hahacer en la practica de los simpsons

//escribis el código una vez, la funcion es m+ás autonoma y se ejeciuta sola


//que es el fetch? es una promesa!-> 
// entonces no me vienen en el imismo orden del array porque el for esta ejecutadno 3 fech, 3 promesas, -> 
//entonces las promesas se rsuelven en distinta velociadad. 
//no impota lo q pase la info siempre va a venir

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
