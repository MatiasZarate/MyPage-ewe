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
    index: (req,res)=>{
        res.render("index")
    },
    cargaimagen: (req,res)=>{
        res.render("cargaimagen")
    },
    cargaimagenDos: async (req,res)=>{
        try {
        const imageBuffer = req.file.buffer;
        let customFilename = Date.now()
        console.log(req.file);

        const cloudinaryUpload = cloudinary.uploader.upload(req.file.path, {
            allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
            public_id: customFilename,
            overwrite: true
          });
         
          streamifier.createReadStream(imageBuffer)
          res.render("index")
          
    }catch(error){
        console.log(error);
        res.status(500).send("Error en la carga de la imagen");
    }}
}

module.exports = controlador;