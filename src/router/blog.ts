import { Router } from "express";
const blog: Router = Router()
import { Blog } from '../db/schema';

blog.get('/', (req, res, next) => {
    Blog.find({}, (err, posts) => {
        if (err) throw err;
        res.send(posts)
    })
    // res.send("hi")
})

blog.post('/', (req, res, next) => {
    let { title, body, author } = req.body
    console.log(req.body.title)
    let newblog = new Blog({
        title, body, author
    });
    // res.json({ newblog })
    newblog.save(function(err) {
        if (err) throw err;
        res.json({ newblog });
    })
})

export default blog