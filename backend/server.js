
const express = require("express")
const app = express()
const methodOverride = require("method-override");
const logger = require("morgan");
const passport = require("passport");
const connectDB = require("./config/database");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const mainRoutes = require("./routes/user");
require("dotenv").config();

require("./config/passport")(passport);

//Connect To Database
connectDB();

app.set("view engine", "ejs");

app.use(cors({
  origin: [process.env.API_PORT_URL],
  methods: "GET, POST, PUT, DELETE, OPTIONS"
}));

app.use(cors());

//Body Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI
  })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});