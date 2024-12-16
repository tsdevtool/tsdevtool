export const login = (req,res) =>{
    res.send("loginUser");
    console.log("LoginUser")
}

export const logout = (req,res) =>{
    res.send("logoutUser");  // send response to client
    console.log("LogoutUser")
}

export const signup = async (req,res) =>{
    try{
        const{fullName, username, password, confirmPassword, gender} =  req.body;

    }catch(err){}
}