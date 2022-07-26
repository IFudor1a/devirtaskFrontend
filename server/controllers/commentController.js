const {Comments} = require('../models/comments');

class commentController {
    async getAll(req,res) {
        const comments = await Comments.find();
        return res.json(comments);
    }
    async create(req,res) {
        const Comment = new Comments(req.body);
        const comments = await Comments.create(Comment);
        return res.json(comments);
    }
    async delete(req,res) {
        const id = req.body.id;
        const comments = await Comments.deleteOne({_id: id});
        return res.json(comments);
    }
    async update(req,res) {
        const {id, author, comment} = req.body;
        const comments = await Comments.updateOne({_id: id}, {$set: {author: author, comment: comment}});
        return res.json(comments);
    }

}

module.exports = new commentController();