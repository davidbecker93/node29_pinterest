const iniModels = require('../models/init-models');
// import chuỗi kết nối CSDL
const sequelize = require('../models/index');

const { successCode, errorCode, failCode } = require('../config/response');
// đối tượng chứa các model trong database
const model = iniModels(sequelize);

const bcrypt = require('bcrypt');
// import hàm tạo token
const { createToken } = require('../config/jwt');

// Check if data exists
const checkData = async (data, res) => {
    if (data) {
        successCode(res, data, "Success");
    } else {
        errorCode(res,'No result matched');
    }
};

const userLogin = async (req, res) => {

    try {

        //  username và password
        const { email, mat_khau } = req.body;

        // find user.email = email && user.pass_word=password
        const checkUser = await model.nguoi_dung.findOne({
            where: {
                email: email
            }
        })

        // user tồn tại > kiểm tra tiếp mật khẩu
        if (checkUser) {
            const checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);

            if (checkPass) {
                const token = createToken(checkUser);
                successCode(res, token, "Login success");
            } else {
                errorCode(res, "", "password not found");

            }

        } else {
            // user ko tồn tại > ko cho đăng nhập
            errorCode(res, "", "email not found");
        }

    }
    catch (err) {
        failCode(res, "Lỗi BE");
    }
}

const signUp = async (req, res) => {

    try {
        const { ho_ten, email, mat_khau, tuoi } = req.body;
        // Kiểm tra trùng email trước khi tạo user
        const checkEmail = await model.nguoi_dung.findOne({
            where: {
                email: email
            }
        })

        if (checkEmail) {
            errorCode(res, "", "Email already exists");
        } else {
            // Email ko trùng thì tạo user
            const data = {
                ho_ten,
                email,
                mat_khau: bcrypt.hashSync(mat_khau, 10),
                tuoi
            };
            await model.nguoi_dung.create(data);
            checkData(data, res);
        }
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};


const getUser = async (req, res) => {
    try {
        let data = await model.nguoi_dung.findAll();
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

//update user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { ho_ten, email, mat_khau, tuoi } = req.body;

        // Check user trùng
        const user = await model.nguoi_dung.findOne({
            where: {
                nguoi_dung_id: id
            }
        });

        if (!user) {
            errorCode(res, "", "User not found");
        } else {
            // Update user data
            const data = {
                ho_ten,
                email,
                mat_khau: bcrypt.hashSync(mat_khau, 10),
                tuoi
            }

            await user.update(data); 
            checkData(data, res);
        }
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const getImgSave = async (req,res) => {
    try {
        const { id } = req.params;
        const data = await model.luu_anh.findAll({
            where: { nguoi_dung_id: id }
        });
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const getImgCreate = async (req,res) => {
    try {
        const { id } = req.params;
        const data = await model.hinh_anh.findAll({
            where: { nguoi_dung_id: id }
        });
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};



//commonjs 
module.exports = {
    getUser,
    userLogin,
    updateUser,
    signUp,
    getImgSave,
    getImgCreate
}

// yarn add bcrypt

