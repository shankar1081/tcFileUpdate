const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/database");
const routes = require("./routes/routes");
const session = require("express-session");

const apiApp = express();
const tmApp = express();

// mongoose.connect(config.database);

mongoose.connect("mongodb://127.0.0.1:27017/PMSN");
// mongoose.connect("mongodb://127.0.0.1:27017",function (err) {
//   if (err) {
//     console.log("could not connect to DB: " + err);
//   }
// });
mongoose.connection.on('connected', () => {
	console.log('Connected to database' + config.database);
});

mongoose.connection.on('error', (err) => {
	console.log('Database Error' + err);
});
const apiPort = 7200;
const tmPort = 8000;

// Common middleware for API routes
apiApp.use(cors());
apiApp.use(bodyParser.json());
apiApp.use(bodyParser.urlencoded({ extended: true }));
apiApp.use(express.static(path.join(__dirname, "public")));
apiApp.use(express.static(path.join(__dirname, "uploads")));
apiApp.use(express.static(path.join(__dirname, "controllers")));
apiApp.use(bodyParser.json({ limit: '10mb' }));
apiApp.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
apiApp.use(
  session({
    secret: "your-secret-key", // Replace with your own secret key
    resave: true,
    saveUninitialized: true,
  })
);
// apiApp.use(passport.initialize());
// apiApp.use(passport.session());

// API specific routes and middleware
apiApp.use("/api", routes);
// require("./config/passport")(passport);

// TM specific routes and middleware


// Start API server
const apiServer = apiApp.listen(apiPort, () => {
  console.log(`API server is running on port ${apiPort}`);
});
module.exports = { apiServer };