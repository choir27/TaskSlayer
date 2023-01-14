
const express = require("express")
const app = express()
const passport = require("passport");
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const session = require('express-session');
const MongoStore = require('connect-mongo')
const cors = require('cors')
const mainRoutes = require("./routes/user");
const PORT = 8000



//Use .env file in config folder
if(process.env.NODE_ENV !== 'production') {require("dotenv").config();}


app.set("view engine", "ejs");

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

app.use(cors({
  origin: ['http://localhost:3000'],
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



// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//set global variable
app.use(function (req,res,next) {
  res.locals.user = req.user || null
  next()
})


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}`);
});