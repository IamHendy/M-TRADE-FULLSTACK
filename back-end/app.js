const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./utils/ErrorHandler");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded ({extended:true, limit:"50mb"}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("uploads"));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
  }

//import routes
const user = require("./controller/user");

app.use("/api/v2/user", user);

  //Error handling
  app.use(ErrorHandler);
  module.exports = app;