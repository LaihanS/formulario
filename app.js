const express = require("express")
const handlebars = require("express-handlebars")
const multer = require("multer")
const path = require("path")
const { v4: uuidv4 } = require("uuid")
const sequelize = require("./model/database")
const usuario = require("./model/models/userModel")

const app = express()

app.engine(
    "hbs",
    handlebars.engine({
        layoutsDir: "views/layout/",
        defaultLayout: "layout",
        extname: "hbs",
    })
  );

app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,"public"))) 
app.use("/images",express.static(path.join(__dirname,"images")))

const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, `${uuidv4()}-${file.originalname}`);
    },
  });

app.use(multer({storage: filestorage}).single("imagePath"))


const user = require("./routes/userRouter")

app.use(user)

sequelize.sync().then((result)  => {
    app.listen(5000);
  }).catch((err)  => {
    console.log(err)
  })