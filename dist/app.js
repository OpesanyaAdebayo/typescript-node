"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------------------------------------------
// Imports library
// -----------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// -----------------------------------------------------------------
// Import router
// -----------------------------------------------------------------
var index_1 = require("./router/index");
var blog_1 = require("./router/blog");
// -----------------------------------------------------------------
// Attributes
// -----------------------------------------------------------------
var app = express();
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
app.use('/', index_1.default);
app.use('/blog', blog_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map