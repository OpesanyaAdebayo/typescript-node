"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var blog = express_1.Router();
var schema_1 = require("../db/schema");
blog.get('/', function (req, res, next) {
    schema_1.Blog.find({}, function (err, posts) {
        if (err)
            throw err;
        res.send(posts);
    });
    // res.send("hi")
});
blog.post('/', function (req, res, next) {
    var _a = req.body, title = _a.title, body = _a.body, author = _a.author;
    console.log(req.body.title);
    var newblog = new schema_1.Blog({
        title: title, body: body, author: author
    });
    // res.json({ newblog })
    newblog.save(function (err) {
        if (err)
            throw err;
        res.json({ newblog: newblog });
    });
});
exports.default = blog;
//# sourceMappingURL=blog.js.map