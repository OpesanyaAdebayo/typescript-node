"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
});
var Blog = mongoose.model('Blog', blogSchema);
exports.Blog = Blog;
//# sourceMappingURL=schema.js.map