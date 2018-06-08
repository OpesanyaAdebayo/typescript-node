import { Router } from "express";
const blog: Router = Router()


blog.get('/', (req, res, next) => {
    res.render('index');
})

export default blog