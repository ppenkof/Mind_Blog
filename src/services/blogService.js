import Blog from '../models/Blog.js';

export function getAll() {
    return Blog.find().select({title: true, category: true, imageUrl: true}); //.select({title: true, category: true, imageUrl: true}) is not mandatory or required, just to return only these fields
}

export function getOne(blogId) {
    return Blog.findById(blogId).populate('owner'); 
}

export function getLatest(){
    return Blog.find()
    .sort({_id: -1})
    .limit(3);//.select({title: true, category: true, imageUrl: true});
}

export function create(blogData, userId) {
    console.log(blogData, userId);
    return Blog.create({
        ...blogData, 
        owner: userId
    });
}
