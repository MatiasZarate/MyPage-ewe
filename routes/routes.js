const homeController = require('./../controllers/homeController');
const catController = require('./../controllers/catController');
const nostalgiaController = require('./../controllers/nostalgiaController')

const express = require("express");
const router = express.Router();
const multer= require("multer")
const path = require("path");


const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/imagenes'));
    },
    filename: function(req, file, cb) {          
        let imageName = Date.now() + path.extname(file.originalname);   
        cb(null, imageName);
    }
  })

  const uploadFile = multer({ storage: multerDiskStorage });

router.get("/", homeController.index)

router.get("/cargaimagen", homeController.cargaimagen)
router.post("/cargaimagen", uploadFile.single('imagen'), homeController.cargaimagenDos)

router.get("/cat", catController.cat)

router.get("/apiCatVideo", catController.apiCatVideo)

router.get("/cargaVideo", catController.cargaVideo)
router.post("/cargaVideo", catController.cargaVideoDos)

router.get("/listaVideos", catController.listaVideos)
router.delete("/delete/:id", catController.delete);

router.get("/nostalgia", nostalgiaController.nostalgia)
router.get("/frutigerAero", nostalgiaController.frutigerAero)
router.get("/oldInternet", nostalgiaController.oldInternet)
router.get("/oldBr", nostalgiaController.oldBr)
router.get("/naranjaDolares", nostalgiaController.naranjaDolares)
router.get("/webMeme", nostalgiaController.webMeme)
router.post("/webMeme", uploadFile.single('imagen'), nostalgiaController.webMeme2)
router.delete("/deletee/:id", nostalgiaController.delete);
module.exports = router;