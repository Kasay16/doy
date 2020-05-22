let titulof = document.getElementById('titulo');
let contenidof = document.getElementById('contenido');
let date =document.getElementById('fecha'); 
let imgpost= document.getElementById('imgpost')

let error =document.getElementById ('error');







 function render(data){
    let htmlcard="<div class='noticias col-6 col-md-3 d-flex justify-content-between'><div class='card' style='width: 17rem;'><img class='' src='"+data.imgpost+"'><div class='card-body'> <h3 class=card-titlep'>"+data.titulo+"</h3><h6 class=card-title'>"+data.fecha+"</h3><p class='card-textp'>"+data.contenido+"</p> </div></div></div>"
    $('#cards').append(htmlcard)

    
}


let cardp = [
    {"titulo":"Las 5 donaciones más grandes por el coronavirus" , "fecha":"20-05-20","contenido":"La pandemia del coronavirus ha obligado a unir fuerzas desde distintos sectores, desde el sector privado se han movilizado grandes sumas de dinero para apoyar en distintos ámbitos. Estas son las mayores donaciones privadas." ,"imgpost":"./assets/pics/foto1p.jpg" },
    {"titulo":"¡Donaciones que salvan vidas!" , "fecha":"21-04-20","contenido":"Una donación de elementos de bioseguridad para los médicos y personal del la salud hizo la Asociación de trabajadores de la educación del Huila." ,"imgpost":"./assets/pics/foto2p.jpeg" },
    {"titulo":"Buscan donaciones de computadores para niños vulnerables" , "fecha":"13-03-20","contenido":"Niños de escasos recursos y de zonas rurales necesitan mayor solidaridad: muchos pequeños no han podido adelantar sus clases virtuales por no tener acceso a computadores, tablets o celulares." ,"imgpost":"./assets/pics/foto3p.jpg" }
]

for ( let i=0; i<cardp.length; i++){
    render(cardp[i]); 

    
 }


$(document).ready (function(){

 

 $('#sendpost').click(function(envcard){
    envcard.preventDefault ()
     var addobj ={
         "titulo": $('#titulo').val (),
         "fecha": $('#fecha').val (),
         "contenido" : $('#contenido').val (),
         "imgpost" : $('#imgpost').val ()
     }
console.log(addobj);
cardp.push(addobj);
render(addobj); 
 $('#titulo').val('');
 $('#fecha').val('dd/mm/yyyy'); 
$('#contenido').val('');
$('#imgpost').val('');

  });


})


/* mensaje de error*/






