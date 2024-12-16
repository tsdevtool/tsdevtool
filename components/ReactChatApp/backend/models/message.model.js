import mongoose from "mongoose";

const messageChema =new mongoose.Schema(
    {
        senderId:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
        },
        receiverId:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
        },
        message:{
            type: String,
            require: true,
        },
    },
    //Created, Updated Automatic
    {timestamps: true}
);

const Message = mongoose.model("Message", messageChema);

export default Message;