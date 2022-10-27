// Importing Env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// Microservices Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/Users";

// Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

const session = require('express-session');

zomato.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'blah blah'
}));

zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);
routeConfig(passport);

// Application Route
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);

zomato.get("/", (req, res) => res.json({ message: "SetUp Success" }));

zomato.listen(99, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() => console.log("Server is running, but database connection failed..."))
);
