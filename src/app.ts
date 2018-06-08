// -----------------------------------------------------------------
// Imports library
// -----------------------------------------------------------------
import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as path from 'path';

import * as mongoose from 'mongoose'
mongoose.connect('mongodb://graphqltest:graphqltest1@ds153460.mlab.com:53460/graphqltest')
.then(() => console.log("connected to mongo"))
.catch(err => console.error(err))
// -----------------------------------------------------------------
// Import router
// -----------------------------------------------------------------
import { default as index } from "./router/index";
import { default as blog } from "./router/blog";

// -----------------------------------------------------------------
// Attributes
// -----------------------------------------------------------------
const app: express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// -----------------------------------------------------------------
// Use express
// -----------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.)
app.use('/', index)
app.use('/blog', blog)


export default app