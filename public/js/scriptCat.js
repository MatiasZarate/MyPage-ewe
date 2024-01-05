//aca poner para el evento del gato largo 
window.addEventListener("load", function(){
let sorpresa = document.getElementById("sorpresa")
let imagenTextoGatoMiau = document.getElementById('catForm')
let botonAleatorio = document.getElementById("botonAleatorio")
let enviar = document.getElementById('enviar')


sorpresa.addEventListener("click", function(){
    Swal.fire({ 
        title: "Gato largo >:D",
        imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1699711806/1699711800535.jpg",
        imageHeight: 1500,
        imageAlt: "A tall image"
      });
})
imagenTextoGatoMiau.addEventListener('submit', function(event) {
  const textoUsuario = document.getElementById('catText').value;
  const url = `https://cataas.com//cat/says/${encodeURIComponent(textoUsuario)}?fontSize=100&fontColor=white`;
  window.location.href = url;
  event.preventDefault(); 
});
botonAleatorio.addEventListener('click', function(event){ 
  console.log(botonAleatorio);
  event.preventDefault();
}),
enviar.addEventListener('click', function(){
  console.log("agua")
  alert("Enviado con exito ;)")
})
})