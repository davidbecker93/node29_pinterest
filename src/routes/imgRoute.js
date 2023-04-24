const express = require('express');
const imgRouter = express.Router();
const { authentication } = require('../controllers/authController');
const { getImg, createImg, updateImg, removeImg,searchImg, getDetailImg, getCommentImg, getSaveImg, commentImg } = require('../controllers/imgController');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, process.cwd() + "/public/img"),
    filename: (req, file, callback) => {

        // datetime
        // milisecond
        let newName = Date.now() + "_" + file.originalname;
        // 165323912839_file.jpg

        callback(null, newName);
    }
})
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// file System
const fs = require('fs');

imgRouter.post('/create-img', upload.single('image'),authentication, createImg);

imgRouter.get("/get-img", getImg);

imgRouter.put("/update/:hinh_id",authentication, updateImg);

imgRouter.delete("/remove/:hinh_id",authentication, removeImg);

imgRouter.get("/search/:keyword", searchImg);

imgRouter.get("/detail/:hinh_id",getDetailImg);

imgRouter.get("/comment/:hinh_id",getCommentImg);

imgRouter.post("/save-img",authentication,getSaveImg);

imgRouter.post("/comment-img",authentication,commentImg);


module.exports = imgRouter;

