import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) =>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne: loggedInUserId}}).select(
            '-password'
        ); //Duoc hieu la lay tat ca user co trong db nhung khong la user dang dang nhap

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error is getUserForSidebar controller: ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}