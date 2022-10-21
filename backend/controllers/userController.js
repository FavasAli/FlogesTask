
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../util/generateToken.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            token:generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

const createUser = asyncHandler(async (data) => {
    try {
    //   console.log(data)
      const userExist = await User.findOne({ email:data.email });
      console.log('userExist',userExist)
      if (userExist) {
        return true
      }
      const user = await User.create(data)
      if (user) {
        console.log(user)
       console.log("User created sucessfully")
       return true
      } else {
          console.log("User not created")
          return true
      }
  
    } catch (error) {
      console.log(error)
    }
  });



export {
    login,createUser

};
