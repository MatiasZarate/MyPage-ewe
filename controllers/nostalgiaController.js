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
    nostalgia:(req,res)=>{
    res.render("nostalgia/nostalgia")
    },
    frutigerAero:(req,res)=>{
    res.render("nostalgia/frutiger")
    },
    oldInternet:async (req, res) => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params: {
                    part: 'snippet',
                    maxResults: 20,
                    playlistId: 'PLtdrIwU9oc_fkErCoTsEwKqmXiG3O1Ea9',
                    type: 'video',
                    key: 'AIzaSyBeWnj7CC2hmebYniqqB1AHfdnug0jw1nI'
                }
            });
            const response2 = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params: {
                    part: 'snippet',
                    maxResults: 20,
                    playlistId: 'PLu35p975ttcS8q4Fi00qE4Ihl3m_xAvlD',
                    type: 'video',
                    key: 'AIzaSyBeWnj7CC2hmebYniqqB1AHfdnug0jw1nI'
                }
            }); 
            const gif1 = await axios.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: 'JYxpE4JhsdJWf4Z7IHWJLAgYwQd2gH2q',
                    tag: 'nyancat',
                    rating: 'g'
                }
            });
            const gif2 = await axios.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: 'JYxpE4JhsdJWf4Z7IHWJLAgYwQd2gH2q',
                    tag: 'nyancat',
                    rating: 'g'
                }
            });

           
            const gifUrl = gif1.data.data.images.original.url;
            const gifUrl2 = gif2.data.data.images.original.url;

            const miniatura = response.data.items.map(item=> item.snippet.thumbnails.high.url);
            const titulo = response.data.items.map(item=> item.snippet.title);
            const videoId = response.data.items.map(item=> item.snippet.resourceId.videoId)

            const miniatura2 = response2.data.items.map(item=> item.snippet.thumbnails.high.url);
            const titulo2 = response2.data.items.map(item=> item.snippet.title);
            const videoId2 = response2.data.items.map(item=> item.snippet.resourceId.videoId)
            const meme = await db.meme.findAll();

 
            res.render('nostalgia/web', { miniatura, titulo, videoId, miniatura2, titulo2, videoId2, meme, gifUrl, gifUrl2});
        } catch (error) {
            console.log('Response 1:', response.data);
            console.log('Response 2:', response2.data);
            console.error('Error:', error);
            res.status(500).send('Error al obtener el video de YouTube' + JSON.stringify(error.response.data, null, 2));
        }
    },
    oldBr:(req,res)=>{
    res.render("nostalgia/oldBr")
    },
    naranjaDolares:(req,res)=>{
        res.render("nostalgia/naranjaJumpscare")
    },
    webMeme:(req,res)=>{
        res.render("nostalgia/webMeme")
    },
    webMeme2:async(req,res)=>{
        try{ 
        let customFilename = Date.now()
        const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path, {
            public_id: customFilename,
            overwrite: true
          });
          if (!cloudinaryUpload || !cloudinaryUpload.secure_url) {
            // Manejar el caso en el que cloudinaryUpload o cloudinaryUpload.secure_url sea null o undefined
            console.error('Error en la carga a Cloudinary:', cloudinaryUpload);
            res.status(500).send('Error en la carga a Cloudinary');
            return;
        }

        const newMeme = await db.meme.create({
            link: cloudinaryUpload.secure_url
          });
          console.log(req.body)
          console.log(cloudinaryUpload.secure_url)
          res.redirect("webMeme");
     } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al procesar el meme: ' + JSON.stringify(error, null, 2));
    }    
      },
      delete:async (req, res) => {
        try {
          const memeBorrar = await db.meme.findByPk(req.params.id); 
    
          if (memeBorrar) {
            await memeBorrar.destroy();
            res.redirect("/oldInternet");
          } 
        } catch (error) {
          console.error("Error:", error);
          res.status(500).send("Error al eliminar los datos de la base de datos");
        }
    }
}

module.exports = controlador;