window.addEventListener("load", function(){
    let web = document.getElementById("web")
    let Frutiger = document.getElementById("Frutiger")
    let brother = document.getElementById("brother")
    let enProceso = document.querySelectorAll(".enProceso")

Frutiger.addEventListener("click", function (){
Swal.fire({
  title: "frutiger aero?",
  text: "Nice moment to refresh",
  imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701182010/1701182004618.gif",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
}).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/frutigerAero";
      }})
}),
web.addEventListener("click", function(){
Swal.fire({
    title: "Old internet?",
    text: "good times isn't it",
    imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701181761/1701181753608.gif",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  }).then((result) => {
          if (result.isConfirmed) {
              window.location.href = "/oldInternet";
          }})
}),
brother.addEventListener("click", function(){
    Swal.fire({
        title: "Older brother core?",
        text: "kinda dark tbh",
        imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701182014/1701182013852.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }).then((result) => {
              if (result.isConfirmed) {
                  window.location.href = "/oldBr";
              }})
    }),
enProceso.forEach(function(button){
    button.addEventListener("click", function (){
    Swal.fire({
  title: "está en",
  text: "está en proceso aún :c",
  imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1697982212/1697982211709.jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
}).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/nostalgia";
        }})
    })
})

})
