const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/user");
const PORT = 8000
const cors = require('cors')


//Use .env file in config folder
require("dotenv").config();

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

app.use(cors())

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


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}`);
});