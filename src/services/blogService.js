import Blog from '../models/Blog.js';

export function getAll() {
    return Blog.find().select({title: true, category: true, imageUrl: true}); //.select({title: true, category: true, imageUrl: true}) is not mandatory or required, just to return only these fields
}

export function getOne(blogId) {
    const found = Blog.findById(blogId).populate(['owner', 'followers']);
    return found;
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

export async function follow(blogId, userId) {
    // const blog = await Blog.findById(blogId);
    // blog.followers.push(userId);

    // return blog.save();
    return Blog.findByIdAndUpdate(blogId, {$push: {followers: userId}});
}

export async function remove(blogsId, userId) {
    const blog = await Blog.findById(blogsId);

    if(!blog.owner.equals(userId)){
        throw new Error('You are not the owner of this blog!');
    }
    
    return Blog.findByIdAndDelete(blogsId);
}

export function edit(blogId, blogData){
    const found = Blog.findByIdAndUpdate(blogId, blogData, {runValidators: true});
    return found;
}

export function getAllByOwner(ownerId){
    return Blog.find({owner: ownerId});
}