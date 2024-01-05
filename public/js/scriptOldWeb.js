window.addEventListener("load", function(){
    let sparta = document.getElementById("sparta")
    let badgers = document.getElementById("badgers")
    let mushrooms = document.getElementById("mushrooms")
    let snake = document.getElementById("snake")
    let avisoNaranja = document.getElementById("avisoNaranja")
    let nyanboton = document.getElementById("nyanboton")
    let currentIndex = 0;
    

    sparta.addEventListener("click", function(){
        Swal.fire({
            title: "SPARTA!!!!!!",
            imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701347974/1701347973594.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
   }),
   badgers.addEventListener("click", function(){
    Swal.fire({
        title: "BADGERS BADGERS BADGERS BADGERS BADGERS BADGERS BADGERS BADGERS BADGERS BADGERS",
        imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701206712/1701206710972.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
   }),
   mushrooms.addEventListener("click", function(){
    Swal.fire({
        title: "MUSHROOMS MUSHROOMS",
        imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701527683/1701527685480.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
   }),
   snake.addEventListener("click", function(){
    Swal.fire({
        title: "¡ARGH, SNAKE, A SNAAKE!, SNAAAKE! A SNAAAAKE, OOOH ITS A SNAKE D:!",
        imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701527691/1701527692358.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
   }),
   avisoNaranja.addEventListener("click", function(){
    Swal.fire({
        title: "Algunos episodios están en español latino, y otros en inglés :P",
        imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1701610751/1701610751221.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
   }),
   nyanboton.addEventListener("click", function(){
    Swal.fire({
      title: ":o",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(https://res.cloudinary.com/dduyxqrqt/image/upload/v1702936801/1702936800072.jpg) center/cover no-repeat",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://res.cloudinary.com/dduyxqrqt/image/upload/v1702991503/1702991496664.gif") left top no-repeat
      `
    });
   }),
   window.botonAbajo = function() {
    const imagenesAbajo = document.querySelectorAll('.imagenAbajo');
    const totalImagenes = imagenesAbajo.length;

   
    imagenesAbajo.forEach((imagen) => {
        imagen.style.visibility = 'hidden';
    });
    
    currentIndex = (currentIndex - 1 + totalImagenes) % totalImagenes;
    imagenesAbajo[currentIndex].style.visibility = 'visible';
}

window.botonArriba = function() {
    const imagenesAbajo = document.querySelectorAll('.imagenAbajo');
    const totalImagenes = imagenesAbajo.length;

    
    imagenesAbajo.forEach((imagen) => {
        imagen.style.visibility = 'hidden';
    });

    currentIndex = (currentIndex + 1) % totalImagenes;
    imagenesAbajo[currentIndex].style.visibility = 'visible';
}
  })
