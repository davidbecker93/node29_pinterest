const express = require('express');
const userRouter = express.Router();

const { getUser, updateUser, userLogin, signUp, getImgSave, getImgCreate } = require('../controllers/userController');

// tạo API 
userRouter.get("/get-user", getUser);

// API login
userRouter.post("/login", userLogin); // Read find

// API signup
userRouter.post("/signup", signUp); // => create

// API updateUser
userRouter.put("/update-user/:id", updateUser); // => update

userRouter.get("/saved/:id", getImgSave);

userRouter.get("/created/:id", getImgCreate);

module.exports = userRouter;
