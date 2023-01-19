
const express = require("express")
const app = express()
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const session = require('express-session');
const MongoStore = require('connect-mongo')
const cors = require('cors')
const mainRoutes = require("./routes/user");
require("dotenv").config();

app.set("view engine", "ejs");

//Connect To Database
connectDB();


const apiPORT = 'http://localhost:3000'

app.use(cors({
  origin: [apiPORT],
  methods: "GET, POST, GET, DELETE, OPTIONS"
}))

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUnitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI
  })
}))


//set global variable
app.use(function (req,res,next) {
  res.locals.user = req.user || null
  next()
})


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});