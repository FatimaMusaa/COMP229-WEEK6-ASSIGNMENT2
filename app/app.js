//  import third-party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// auth 1 import moduls

import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// auth 2 define our auth strategy

let localStrategy = passportLocal.Strategy;

// auth 3 import the user models

import User from './models/user.js';

// import Mongoose Module
import mongoose from 'mongoose';

// configuration Module
import { MongoURI, Secret } from '../config/config.js';

// import Routes
import indexRouter from './routes/index.route.server.js'
import businessRouter from './routes/business.route.server.js';
import authRouter from './routes/auth.route.server.js';

// Instantiate Express Application
const app = express();

// Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set Up Middlewares

// setup view engine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../public')));

// auth  4 setup express session
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

//auth  5 setup flash

app.use(flash());

//auth Step 6 initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//auth 7 impliement the auth strategy

passport.use(User.createStrategy());

//step 8 setup serializatin and deserialization

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use Routes
app.use('/', indexRouter);
app.use('/', businessRouter);
app.use('/', authRouter);

export default app;

