const express = require('express');
const { authentication } = require('../controllers/authController');
const userRouter = express.Router();

const { getUser, updateUser, userLogin, signUp, getImgSave, getImgCreate, removeImg } = require('../controllers/userController');

// tạo API 
userRouter.get("/get-user",authentication, getUser);

// API login
userRouter.post("/login", userLogin); // Read find

// API signup
userRouter.post("/signup", signUp); // => create

// API updateUser
userRouter.put("/update-user/:id",authentication, updateUser); // => update

userRouter.get("/saved/:id", getImgSave);

userRouter.get("/created/:id", getImgCreate);

userRouter.delete("/removed/:hinh_id",authentication, removeImg);

module.exports = userRouter;

