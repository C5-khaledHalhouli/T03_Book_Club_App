const commentModel = require("../model/commentsSchema");
const mongoose=require("mongoose")
const createComment= (req, res) => {
    const { comment, user,book } = req.body;

  const newComment = new commentModel({
    comment,
    user,
    book
});
newComment.save().then((result)=>{
    res.status(201).json(result)
}).catch((err)=>{
    res.status(404).json(err)
})
};

const getAllComment=(req,res)=>{
    const {bookId}=req.params
    commentModel.find({book:bookId}).then((result)=>{
res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json(err)

    })
}
const deleteComment=(req,res)=>{
    const {commentId}=req.params
    const userId=req.token.userid
    commentModel.findOneAndDelete({$and:[{_id:commentId},{user:userId}]}).then((result)=>{
res.status(200).json({result,succ:true})
    }).catch((err)=>{
        res.status(404).json({err})

    })
}
module.exports = {createComment,getAllComment,deleteComment}