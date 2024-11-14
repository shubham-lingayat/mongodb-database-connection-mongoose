// import the model
const Todo = require("../models/Todo");

exports.updateTodo = async(req, res) => {
    try{
        // Export the id from the URL
        const { id } = req.params;
        const {title, description} = req.body;
        // 'findByIdAndUpdate' function is used from the mongoose
        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updateAt: Date.now()},
        )

        res.status(200)
        .json({
            success:true,
            data:todo,
            message: "Updated Successfully",
        })
    }
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Internal Server Error",
        });
    }
}