const routes = require("./routes/routes");

const express = require('express')
const app = express();
const path = require("path"); //indispensable para las vistas ejs

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public')); //indispensable para usar css
app.set('view engine', 'ejs'); //indispensable para las vistas ejs 
app.set('views', path.join(__dirname, 'views')); //indispensable para las vistas ejs


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes)
/*app.use("/cats", catRoutes);*/

app.listen(3007,()=>{
    console.log("en marcha soldado")
})