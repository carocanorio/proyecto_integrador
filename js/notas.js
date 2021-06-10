/* en html */<script src=''></script>

setItem[]
localStorage.setItem('userName', 'Franco');

getItem[]

localStorage.getItem('userName');

removeItem[]
localStorage.removeItem('username');

clear[]
localStorage.clear()

/*ejemplo*/
let alumnos[
    'Caro', 'Quillen','Franco','Ale','Maca'
];
let alumnosToString = JSON.stringify(alumnos);
localStorage.setItem('alumnos', alumnosToString);
let recuperarStorage = localStorage.getItem('alumno');
let alumnoRecuperados = JSON.parse(recuperarStorage);

indexOf()
let alumno[
    'Caro', 'Quillen','Franco','Ale','Maca'
]
alumno.indexOf('Caro');
alumno.indexOf('Franco');
alumno.indexOf('Maca');
alumno.indexOf('Jose'); /*este sale como returno -1 porque no existe*/ 

.splice()
let alumno[
    'Caro', 'Quillen','Franco','Ale','Maca'
]
alumno.splice(2,1);
/*borra a 'Franco' poque dije que empieze de el nombre dos y que borre el siguiente al 2*/

.include()/*Determina si el elemento esta o no en el array*/
let alumno[
    'Caro', 'Quillen','Franco','Ale','Maca'
]
alumno.include('Maca')/*true*/
alumno.include('Juan')/*Juan no estaba incluido */


//poner a favoritos
let favoritos = [];
//copiar id adentro del array
let fav = document.querySelector('.fav');
fav.addEventListener('click', function{e}{
    e.preventDefault{};
    
    favoritos.push{/*id de la cancion*/}

    //armamos un string
    let favParaStorgae = JSON.stringify(favoritos);
    //lo guardamos dentro de un localstorage
    localStorage.setItem('favorito', favParaStorgae)
})