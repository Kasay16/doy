
const BtnReg = document.querySelector('#BtnRegistro');
const BtnIng  = document.querySelector('#BtnIngreso');
const salida = document.querySelector('.msjSalida');

const insertarDatosPrueba = ()=>{
let usuarios = ["marcelabula","jesusropero","hernandiaz","jefryguevara","fabianvalencia","franciscomartinez","andrescasallas"];
let claves=["123","123","123","123","123","123","123"];
localStorage.setItem('datoUsuarios', JSON.stringify(usuarios));
localStorage.setItem('datoPassword',JSON.stringify(claves));
}


insertarDatosPrueba();

const registrarUser = ()=>{


const nomUsu = document.querySelector('.nomUsu');
const passUsu = document.querySelector('.passUsu');

usuarios.push(nomUsu.value);
claves.push(passUsu.value);

localStorage.setItem('datoUsuarios', JSON.stringify(usuarios));
localStorage.setItem('datoPassword',JSON.stringify(claves));



}


salida.innertext = ""

const IngresarUser = ()=>{

    let exite = false
    let indice = -1
    let value = 0

    console.clear();
    console.log ( " **********************    ENTRAN DATOS  ************************** ")

    const usuario = document.querySelector('.inUsu');
    const contresena = document.querySelector('.inPass');

    console.log ( " usuario  digitado " + usuario.value)
    console.log ( " contresena   digitado " + contresena.value)

    console.log ( " --------------------------------    RECUPERA DATOS LOCAL STOREGE  -------------------------------- ")

    let listaUsuarios = JSON.parse(localStorage.getItem('datoUsuarios'));
    let listaClaves = JSON.parse(localStorage.getItem('datoPassword'));


    console.log ( "  arreglo de usuarios   " + listaUsuarios)
    console.log ( " arreglo de claves  " + listaClaves)





    for (user of listaUsuarios){
        console.log ( "  >>>>>  ENTRA AL FOR  <<<<<<<< ")
        console.log ( " user  " + user)

        /* VALIDA SI EL USUARUO EXISTE  Y ASIGNA AL INDICE LA POSICION DONDE LO ENCUENTRA   */
        if (usuario.value === user){
            indice = value;
            exite = true
            console.log ( " se encontro el usuario  en la posicion " + indice)
        }
        value += 1;
    }

    if (exite) {   /*  SI EXISTE VERDADERO  */

        console.log ( " contresena  " + contresena.value)
        console.log ( " en el arreglo  " + listaClaves[indice])



         /* VALIDA SU CONTRASENA EN LA POSICION INDICE QUE ENCORTRO AL USUARIO   */
        if (contresena.value === listaClaves[indice]){
            salida.innerText = " BIENVENIDO " + usuario.value

            console.log ( " bienvenido  " + usuario.value)
            localStorage.setItem('usuarioLogeado',usuario.value);
                  location.href ="./home.html"; 
        }else {
            salida.innerText = " error en la clave para  " + usuario.value
            console.log ( " clave errada para   " + usuario.value)
        }

    }else {
        salida.innerText = " USUARIO NO EXISTE  "
        console.log ( " no existe el usuario ")
    }

    console.log ( "  >>>>>  SALE  DEL FOR  <<<<<<<< ")
}






let user = localStorage.getItem('usuarioLogeado');
console.log(" user " + user)

const output = document.querySelector('.msjSalida');


if(user !== null){
   output.innerHTML = `Hola ${user}`;
}

/* 
const nomUsu = document.querySelector('.nomUsu').value;
const passUsu = document.querySelector('.passUsu').value;

if(output.innerHTML=="xxx")
BtnReg.addEventListener('click', ()=>{
    if(localStorage.getItem('name')===null){
        localStorage.setItem('name', nomUsu)
        localStorage.setItem('pass', passUsu)
    }
});
 */


// localStorage.clear()
if (BtnReg  != null)
    BtnReg.addEventListener('click',registrarUser);
BtnIng.addEventListener('click',IngresarUser);