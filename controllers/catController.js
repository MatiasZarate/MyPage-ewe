const path = require("path");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier")
const fs = require("fs");
const axios = require('axios');
let db = require("../database/models");
const { Sequelize } = require('sequelize');

cloudinary.config({
    cloud_name: "dduyxqrqt",
    api_key: "867588739315874",
    api_secret: "meBOrwZzq5JG1CZJmut8pqVFtT0",
    debug: true
});

const controlador= {
  cat:async(req,res)=>{
    try{
       const gif1 = axios.get(`https://api.giphy.com/v1/gifs/random?api_key=JYxpE4JhsdJWf4Z7IHWJLAgYwQd2gH2q&tag=cat&rating=g`)
  const gif2 = axios.get('https://api.giphy.com/v1/gifs/random?api_key=JYxpE4JhsdJWf4Z7IHWJLAgYwQd2gH2q&tag=silly+cat&rating=g')
  const gif3 = axios.get('https://api.giphy.com/v1/gifs/random?api_key=JYxpE4JhsdJWf4Z7IHWJLAgYwQd2gH2q&tag=angry+cat&rating=g')
  const textoUsuario = req.params.texto;
  /*const video = await db.video.findOne({ order: Sequelize.literal('RAND()') });*/
  const videoRandom = await db.video.findOne({
    order: Sequelize.literal('RAND()'),
    raw: true, // Agrega esta línea para obtener un objeto plano en lugar de un modelo Sequelize
})
  

  Promise.all([gif1, gif2, gif3]) 
      .then(([response1, response2, response3]) => {
          gifUrl1=response1.data.data.images.original.url;
          gifUrl2=response2.data.data.images.original.url;
          gifUrl3=response3.data.data.images.original.url;
         return res.render("cats/cat", {gifUno: gifUrl1, gifDos:gifUrl2, gifTres:gifUrl3, imageUrl: `/cat/says/${encodeURIComponent(textoUsuario)}?fontSize=100&fontColor=white`, videoRandom});
      })
      .catch(error => {
          console.error(error);
          return res.status(500).send("Error en la solicitud a Giphy API");
      });
    }catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error al obtener los datos de la base de datos");
    }},
  apiCatVideo:(req,res)=>{
   db.video
   .findAll()
   .then(video => {
     return res.status(300).json({
       total: video.length,
       data: video,
       status: 300
     })
   })
}, cargaVideo:(req,res)=>{
  res.render("cats/cargaVideo")
}, 
cargaVideoDos:(req,res)=>{
  console.log(req.body)
  const newVideo = db.video.create({
      nombre: req.body.nombre, 
      link: req.body.link
    });
    res.redirect("cargaVideo");
},
listaVideos:async(req,res)=>{
  try{
      const video = await  db.video.findAll();
      res.render("cats/listaVideos",{video})
  }catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error al obtener los datos de la base de datos");
    }
  },
  delete:async (req, res) => {
      try {
        const videoBorrar = await db.video.findByPk(req.params.id); 
  
        if (videoBorrar) {
          await videoBorrar.destroy();
          res.redirect("/listaVideos");
        } 
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error al eliminar los datos de la base de datos");
      }
  }
}

module.exports = controlador;