import { Router } from "express";
const index: Router = Router()


index.get('/', (req, res, next) => {
    res.render('index');
})

export default index