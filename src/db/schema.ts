import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
  });

const Blog = mongoose.model('Blog', blogSchema)

export {Blog}

