"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index = express_1.Router();
index.get('/', function (req, res, next) {
    res.render('index');
});
exports.default = index;
//# sourceMappingURL=index.js.map