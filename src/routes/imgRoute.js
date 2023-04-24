const express = require('express');
const imgRouter = express.Router();

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

// const upload = multer({ storage }) // object literals
// API POST method upload
// yarn add multer
// imgRouter.post("/upload", upload.single("file"), (req, res) => {

//     // lưu image :  file.filename
//     let file = req.file;

//     fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {

//         // // => băm base64 => load hoặc lưu dự liệu
//         let fileBase = `data:${file.mimetype};base64,${Buffer.from(data).toString("base64")}`;

//         // // => xóa hình
//         // //xóa file
//         fs.unlink(process.cwd() + "/public/img/" + file.filename, (err) => { });
//         // // let newName = Date.now() + "_" + file.originalname;
//         // // // tạo file
//         // // fs.writeFileSync(process.cwd() + `/public/file/${newName}.txt`, fileBase, (err) => { });
//         // // check if 
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error occurred while uploading file");
//         } else {
//             console.log("File uploaded successfully");
//             res.send(fileBase);
//         }
//     })
imgRouter.post('/create-img', upload.single('image'), createImg);
// 1 hình = 1Mb : 10000 => 10Gb

// tối ưu hóa file
// 1 hình = 1Kb : 10000 => 10Mb

// width, height
// giảm mật độ điểm ảnh

// })

const { authentication } = require('../controllers/authController');

imgRouter.get("/get", getImg);

imgRouter.put("/update/:hinh_id", updateImg);

imgRouter.delete("/remove/:hinh_id", removeImg);

imgRouter.get("/search/:keyword", searchImg);

imgRouter.get("/detail/:hinh_id",getDetailImg);

imgRouter.get("/comment/:hinh_id",getCommentImg);

imgRouter.post("/save-img",getSaveImg);

imgRouter.post("/comment-img",commentImg);


module.exports = imgRouter;

