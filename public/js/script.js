window.addEventListener("load", function(){
    let nyancat = document.getElementById("nyancat")
    let enProceso = document.querySelectorAll(".enProceso")

nyancat.addEventListener("click", function (){
    //alert("touch me harder")
    /*Swal.fire('SweetAlert2 is working!')*/Swal.fire({
  title: "Buena eleccion ma boy",
  text: "digo... meow",
  imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1699224696/1699224695215.jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
}).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/cat";
        }})
}),
enProceso.forEach(function(button){
    button.addEventListener("click", function (){
    /*alert("touch me harder")*/
    /*Swal.fire('SweetAlert2 is working!')*/Swal.fire({
  title: "está en",
  text: "está en proceso aún :c",
  imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1697982212/1697982211709.jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
}).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/";
        }})
    })
})
})
