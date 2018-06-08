"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var blog = express_1.Router();
blog.get('/', function (req, res, next) {
    res.render('index');
});
exports.default = blog;
//# sourceMappingURL=blog.js.map