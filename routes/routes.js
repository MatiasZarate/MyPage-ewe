const homeController = require('./../controllers/homeController');
const catController = require('./../controllers/catController');

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


module.exports = router;