//localStorage.clear()

const registro = ()=>{
    document.getElementById('nombre').style.display="block";
	document.getElementById('nombre1').style.display="block";
	document.getElementById('apellido').style.display="block";
	document.getElementById('apellido1').style.display="block";
	document.getElementById('email').style.display="block";
	document.getElementById('email1').style.display="block";
	document.getElementById('check').style.display="block";
    document.getElementById('check1').style.display="block";
    document.getElementById('botonFinal').style.display="none";
    document.getElementById('botonLogin').style.display="block";
}

    const ingreso =()=> {
	document.getElementById('nombre').style.display="none";
	document.getElementById('nombre1').style.display="none";
	document.getElementById('apellido').style.display="none";
	document.getElementById('apellido1').style.display="none";
	document.getElementById('email').style.display="none";
	document.getElementById('email1').style.display="none";
	document.getElementById('check').style.display="none";
    document.getElementById('check1').style.display="none";
    document.getElementById('botonLogin').style.display="none";
    document.getElementById('botonFinal').style.display="block";
}


//********************desde aca subiendo datos al localStorage**********************************
/* console.clear();*/ 

let user = localStorage.getItem('usuario');
let pass = localStorage.getItem('password');


let usuarios = [];
let claves=[];

const insertarDatosPrueba = ()=>{
usuarios = ["marcelabula","jesusropero","hernandiaz","jefryguevara","fabianvalencia","franciscomartinez","andrescasallas"];
claves=["123","123","123","123","123","123","123"];
localStorage.setItem('datoUsuarios', JSON.stringify(usuarios));
localStorage.setItem('datoPassword',JSON.stringify(claves));

}




const BtnReg = document.querySelector('#botonLogin');
const BtnIng  = document.querySelector('#botonFinal');
const salida = document.querySelector('.msjSalida');





const registrarUser = ()=>{ 

insertarDatosPrueba();
const nomUsu = document.querySelector('.registroUsuarioIn');
const passUsu = document.querySelector('.registroContrasenaIn');

usuarios.push(nomUsu.value); //pendiente registroUsuario
claves.push(passUsu.value); //pendiente registrocontrasena

localStorage.setItem('datoUsuarios', JSON.stringify(usuarios));
localStorage.setItem('datoPassword',JSON.stringify(claves));

console.log ( "  -- >  REGISTRAR USUARIOS  < --- ")
console.log ( " usuario ingresado  " + nomUsu.value)
console.log ( " password ingresado  " + passUsu.value)

}

if (salida!=null)
   salida.innertext = "";

const IngresarUser = ()=>{ 

    let exite = false
    let indice = -1
    let value = 0

    console.log ( " ***************************************************************** ")

    const usuario = document.querySelector('.registroUsuarioIn');
    const contresena = document.querySelector('.registroContrasenaIn');

    console.log ( " usuario  digitado " + usuario.value)
    console.log ( " contresena   digitado " + contresena.value)
  
    let listaUsuarios = JSON.parse(localStorage.getItem('datoUsuarios'));
    let listaClaves = JSON.parse(localStorage.getItem('datoPassword'));
    

    console.log ( " listaUsuarios  " + listaUsuarios)
    console.log ( " listaUsuarios  " + listaClaves)

    
    for (user of listaUsuarios){
        
        console.log ( " user  " + user)
        if (usuario.value === user){
            indice = value;   
            exite = true 
            console.log ( " se encontro el usuario ")
        }
        value += 1;
    }

    if (exite) {

        console.log ( " contresena  " + contresena.value)
        console.log ( " en el arreglo  " + listaClaves[indice])

        if (contresena.value === listaClaves[indice]){

            salida.innerText = " BIENVENIDO " + usuario.value
            console.log ( " bienvenido  " + usuario.value)
            localStorage.setItem('password', contresena.value);
            localStorage.setItem('usuarioLogeado',usuario.value);
            user = localStorage.getItem('usuarioLogeado');
            pass = localStorage.getItem('password');
            location.href ="./home.html"; 


        }else {
            salida.innerText = " error en la clave para  " + usuario.value
            console.log ( " clave errada para   " + usuario.value)
        }

    }else {
        salida.innerText = " USUARIO NO EXISTE  " 
        console.log ( " no existe el usuario ")
    }
  }
 

if (BtnReg!=null)
    BtnReg.addEventListener('click',registrarUser);

    if (BtnIng!=null)
BtnIng.addEventListener('click',IngresarUser);



user = localStorage.getItem('usuarioLogeado');
pass = localStorage.getItem('password');

/*  script para el home */ 




console.log(" usuarioLogeado " + user + " password " + pass)



// const userLogPicPerfil = document.querySelector('.userLogPicPerfil');

const userNomPer = document.querySelectorAll('.userLogNom');
for(let i =0; i< userNomPer.length; i+=1){
  userNomPer[i].innerText = "@"+ user;

}


const PicPerfil = document.querySelectorAll('.userLogPicPerfil');
for(let i =0; i<PicPerfil.length; i+=1){
  PicPerfil[i].src = "./assets/pics/"+ user+".jpg"
  }






/* 
const output = document.querySelector('.msjSalida');


if(user !== null){
   output.innerHTML = `Hola ${user}`;
}

      */



      /*   profile */

      /*   estos dos datos cuando este login no iriian */
localStorage.setItem('valorFec', '1')
localStorage.setItem('valorTel', '1')
localStorage.setItem('ValorOcu', '1')
localStorage.setItem('ValorNac', '1')


/*   estos dos datos cuando este login no iriian */

const jsLinkCambioContrasena = document.querySelector('#jsLinkCambioContrasena');
const jsIcoCambioContrasena = document.querySelector('#jsIcoCambioContrasena');

const jsBtnDatosFormularioGuardar = document.querySelector('#jsBtnDatosFormularioGuardar');
const jsBtnDatosFormularioEditar = document.querySelector('#jsBtnDatosFormularioEditar');


const contenedorDatosUsuario  = document.querySelector('.ProfilefomularioDatosUsuario');  /* contendor Datos Usuario */ 
const contenedorDatosUsuarioEditar  = document.querySelector('.profilefomularioDatosUsuarioEditar');  



const jsBtnGuardarCambios = document.querySelector('#jsBtnGuardarCambios');
const jsBtnCancelarCambios = document.querySelector('#jsBtnCancelarCambios');
const jsBtnCerrarContContrasena = document.querySelector('#jsBtnCerrarContContrasena');

const contenedorFallow  = document.querySelector('.profileContenedorFollow');  /* contendor seguidores */ 
const contenedorIcoLinkContrasena  = document.querySelector('.profileContenedorIcoLinkContrasena');
const contendedorCambioContrasena = document.querySelector('.profileContenedorCambioContrasena');
const contendedorCambioContrasenaConfirmar = document.querySelector('.profileContenedorCambioContrasenaConfirmar');

const jsImgOjoDate = document.querySelector('#jsImgOjoDate');
const jsImgOjoTel = document.querySelector('#jsImgOjoTel');
const jsImgOjoOcu = document.querySelector('#jsImgOjoOcu');
const jsImgOjoNal  = document.querySelector('#jsImgOjoNal');

const txtDate  = document.querySelector('.txtDate');
const txtTel  = document.querySelector('.txtTel');
const txtOcu  = document.querySelector('.txtOcu');
const txtNac  = document.querySelector('.txtNac');

const contenedorNews  = document.querySelector('.profileNews');  /* contendor seguidores noticias */ 


const contenedorChat  = document.querySelector('.divContTextChat');  /* contendor chat */ 
const jsBtnChat = document.querySelector('#jsBtnChat');

const rtaChat = ()=>{ 


  let  textoRta  = "Respuesta Chat"
  let  newChat = document.createElement("p"); 
  newChat.classList.add("txtChatRta"); 
  // let  separador = document.createElement("br"); 
  // contenedorChat.appendChild(separador);
  newChat.innerText = textoRta;
  contenedorChat.appendChild(newChat);
  

}

const agregarChat = ()=>{ 

  let chatEnviar = document.querySelector('#txtChat');
  let  textoEnviar  = chatEnviar.value;
  let  newChat = document.createElement("p"); 
  newChat.classList.add("txtChat"); 
  // let  separador = document.createElement("br"); 
  // contenedorChat.appendChild(separador);
  newChat.innerText = textoEnviar;
  contenedorChat.appendChild(newChat);
  chatEnviar.value = ""
  rtaChat(); 

}

if(jsBtnChat!=null)
jsBtnChat.addEventListener('click', agregarChat);


/* const agregarSeguidores = ()=>{ 

  for (let i=0; i<=5  ; i+=1){
    let  newDiv = document.createElement("div"); 
    newDiv.classList.add("divFallow");
    contenedorNews.appendChild(newDiv);

    let  nomUser = document.createElement("h5"); 
    let  mailUser = document.createElement("p"); 
    let  fotoUser = document.createElement("img"); 

    nomUser.classList.add("txtUserBold");
    mailUser.classList.add("txtUserSmall");
    fotoUser.classList.add("profileIcos");

    nomUser.innerText = "Nombre Usuario " + i;
    mailUser.innerText = "Correo@loqueas.com " + i;
    fotoUser.src = "./pics/user.png"
   
    newDiv.appendChild(nomUser);
    newDiv.appendChild(mailUser);
    newDiv.appendChild(fotoUser);
   
  

  }

}

agregarSeguidores(); */

const validarIconosOjo = ()=>{ 


let  valorFec  = localStorage.getItem('valorFec');
let  valorTel  = localStorage.getItem('valorTel');
let  ValorOcu  = localStorage.getItem('ValorOcu');
let  ValorNac  = localStorage.getItem('ValorNac');

          if (valorFec == 1 ){
            jsImgOjoDate.src = "./assets/pics/IcoOjoIn.png";
          txtDate.classList.remove("txtSubrauado");
         }else{
          jsImgOjoDate.src = "./assets/pics/IcoOjoOut.png";
        txtDate.classList.add("txtSubrauado");
         }

         if (valorTel == 1 ){
        jsImgOjoTel.src = "./assets/pics/IcoOjoIn.png";
        txtTel.classList.remove("txtSubrauado");
        }else{
          jsImgOjoTel.src = "./assets/pics/IcoOjoOut.png";
          txtTel.classList.add("txtSubrauado");
        }

        if (ValorOcu == 1 ){
          jsImgOjoOcu.src = "./assets/pics/IcoOjoIn.png";
          txtOcu.classList.remove("txtSubrauado");
          }else{
            jsImgOjoOcu.src = "./assets/pics/IcoOjoOut.png";
            txtOcu.classList.add("txtSubrauado");
          }

        if (ValorNac == 1 ){
          jsImgOjoNal.src = "./assets/pics/IcoOjoIn.png";
          txtNac.classList.remove("txtSubrauado");
          }else{
            jsImgOjoNal.src = "./assets/pics/IcoOjoOut.png";
            txtNac.classList.add("txtSubrauado");
          }

}


const validarFecha = ()=>{ 
   
  let  valorFec  = localStorage.getItem('valorFec');
  console.log ( "  valorFec " + valorFec)
  if  (valorFec==1)
       localStorage.setItem('valorFec', 0)
       else
       localStorage.setItem('valorFec', 1)
 
       validarIconosOjo();

}


const validarTel = ()=>{ 

  let  valorTel  = localStorage.getItem('valorTel');
  console.log ( "  valorTel " + valorTel)
  if  (valorTel==1)
       localStorage.setItem('valorTel', 0)
       else
       localStorage.setItem('valorTel', 1)
 
       validarIconosOjo();

}

const validarOcu = ()=>{ 

  let  ValorOcu  = localStorage.getItem('ValorOcu');
  console.log ( "  ValorOcu " + ValorOcu)
  if  (ValorOcu==1)
       localStorage.setItem('ValorOcu', 0)
       else
       localStorage.setItem('ValorOcu', 1)
 
       validarIconosOjo();

}

const validarNal = ()=>{ 

  let  ValorNac  = localStorage.getItem('ValorNac');
  console.log ( "  ValorValorNacOcu " + ValorNac)
  if  (ValorNac==1)
       localStorage.setItem('ValorNac', 0)
       else
       localStorage.setItem('ValorNac', 1)
 
       validarIconosOjo();

}



/* **********************************************/ 


const OcultarContenedores = ()=>{

  contendedorCambioContrasena.classList.add("contenedorOut");
  contendedorCambioContrasenaConfirmar.classList.add("contenedorOut");

  contenedorDatosUsuarioEditar.classList.add("contenedorOut");


}


const verHobies = document.querySelector(".listaHobbiesIn");

const imprimirHobies = document.querySelector(".listaHobbies");
const listaHobies = document.querySelector("#selectHobbie");
let vectorHobies = [];

const cadenaHobies = ""
let hobbiesGuardados = ""

const functioHobbies = () => {

  let options = ["Cine", "Bailar", "Video Juegos", "Caminar", "Gimnasio", "Locha Libre" , "Leer" ,  "TV", "Pintar"];
 

for(var i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    listaHobies.appendChild(el);

}

}


const verVector = ()=>{
  let cadena = ""
  for(let hobbie of vectorHobies){
      cadena = cadena + hobbie + " "

 }
 //console.log (" vector " + cadena);
 imprimirHobies.innerText = cadena
}


if (listaHobies!=null)
listaHobies.addEventListener('change', ()=>{
  //console.log ( " hobie " + listaHobies.value )
  vectorHobies.push(listaHobies.value)
  hobbiesGuardados = JSON.stringify(vectorHobies);
  verVector();
 })



const formularioDatosUsuario = ()=>{

  contenedorDatosUsuarioEditar.classList.remove("contenedorOut");
  contenedorDatosUsuarioEditar.classList.add("contenedorIn");
  contenedorDatosUsuario.classList.add("contenedorOut");

  functioHobbies();
  
  }


const formularioCambioContrasena = ()=>{  /* oculta los el link y el icono de cambio de contrasena y muetra el formulario para el cambio */ 
   
 contenedorIcoLinkContrasena.classList.add("contenedorOut");
 contendedorCambioContrasena.classList.remove("contenedorOut");
 contendedorCambioContrasena.classList.add("contenedorIn");

  }

  const confirmarCambiosContrasena = ()=>{

    contendedorCambioContrasenaConfirmar.classList.remove("contenedorIn");
    contendedorCambioContrasenaConfirmar.classList.add("contenedorOut");

    contenedorIcoLinkContrasena.classList.remove("contenedorOut");
    contenedorIcoLinkContrasena.classList.add("contenedorIn");

  }


  const cancelarCambiosContrasena = ()=>{

    contendedorCambioContrasena.classList.remove("contenedorIn");
    contendedorCambioContrasena.classList.add("contenedorOut");

    contenedorIcoLinkContrasena.classList.remove("contenedorOut");
    contenedorIcoLinkContrasena.classList.add("contenedorIn");

  }

  const validarDatosContrasena = ()=>{

    let  contrasenaSistema  = localStorage.getItem('password');  /* se trae el valor de la contrasena del local storage */ 
    let salida = document.querySelector('.txtProfileTitulo');  /* defino que el titulo del formulario reciba los mensajes de error */ 

    let claveUsuarioOld = document.querySelector('#perfilContrasenaActual').value;
    let claveUsuarioNew = document.querySelector('#perfilContrasenaNueva').value;
    let claveUsuarioConfirmar = document.querySelector('#perfilConfirmarContrasena').value;
    console.log(" claveUsuarioOld["+ claveUsuarioOld +"]")
    console.log(" claveUsuarioNew["+ claveUsuarioNew +"]")
    console.log(" claveUsuarioConfirmar["+ claveUsuarioConfirmar +"]")

    if (claveUsuarioOld != "" && claveUsuarioNew != ""  &&  claveUsuarioConfirmar != "" ) { /* valido ningun input este vacio */ 
          if (claveUsuarioOld === contrasenaSistema) {
                if (claveUsuarioNew === claveUsuarioConfirmar) {   /* valido la clave digitada coincida con la del sistema */ 
                  
                  contendedorCambioContrasena.classList.remove("contenedorIn"); /* apaga el formulario de datos */
                  contendedorCambioContrasenaConfirmar.classList.add("contenedorIn");

                  contendedorCambioContrasena.classList.add("contenedorOut");
                  contendedorCambioContrasenaConfirmar.classList.remove("contenedorOut");  /* prende el contender que confirma cambis  */ 
                  
                  
                  

                 
                }       
              else
              salida.innerText= "CONTRASEÑAS son DIFERENTES"
          } 
          else
          salida.innerText= "CONTRASEÑA ACTUAL NO CORRESPPONDE"
    } 
    else
    salida.innerText= "EXISTES CAMPOS VACIOS"

  }


  const validarDatosUsuario = ()=>{
    contenedorDatosUsuarioEditar.classList.remove("contenedorIn");
    contenedorDatosUsuarioEditar.classList.add("contenedorOut");
    
    contenedorDatosUsuario.classList.remove("contenedorOut");
    contenedorDatosUsuario.classList.add("contenedorIn");

    const hobbiesGuardar = JSON.stringify(vectorHobies);
    localStorage.setItem('hobbies', hobbiesGuardar)
    vectorHobies=[]
    verVector();
    
  }


  const jsBtnBorrarHobbie = document.querySelector("#jsBtnBorrarHobbie");
  const BorrarUltimoHobbie = ()=>{
   vectorHobies.pop();
   verVector();
   }


 


  const obtenerLocal = ()=>{
    const hobbiesEnLocal = JSON.parse(localStorage.getItem('hobbies')) || [];
    let cadena = ""
    for(let hobbie of hobbiesEnLocal){
       cadena = cadena + hobbie + " "
    }

    if(verHobies!=null)
    verHobies.innerText = cadena
}

obtenerLocal();

OcultarContenedores();

    
jsBtnBorrarHobbie.addEventListener('click',BorrarUltimoHobbie);



  jsLinkCambioContrasena.addEventListener('click', formularioCambioContrasena);
  jsIcoCambioContrasena.addEventListener('click', formularioCambioContrasena);

  jsBtnGuardarCambios.addEventListener('click', validarDatosContrasena);
  jsBtnCancelarCambios.addEventListener('click', cancelarCambiosContrasena);
  jsBtnCerrarContContrasena.addEventListener('click', confirmarCambiosContrasena);

  jsBtnDatosFormularioEditar.addEventListener('click', formularioDatosUsuario);
  jsBtnDatosFormularioGuardar.addEventListener('click', validarDatosUsuario);
  

  /*  ------------------*/
  
  jsImgOjoDate.addEventListener('click', validarFecha);
  jsImgOjoTel.addEventListener('click', validarTel);
  jsImgOjoOcu.addEventListener('click', validarOcu);
  jsImgOjoNal.addEventListener('click', validarNal);