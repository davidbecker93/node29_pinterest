const iniModels = require('../models/init-models');
// import chuỗi kết nối CSDL
const sequelize = require('../models/index');

const { successCode, errorCode, failCode } = require('../config/response');
// đối tượng chứa các model trong database
const model = iniModels(sequelize);

const bcrypt = require('bcrypt');
// import hàm tạo token
const { createToken } = require('../config/jwt');

const userLogin = async (req, res) => {

    try {

        //  username và password
        let { email, mat_khau } = req.body;

        // find user.email = email && user.pass_word=password
        let checkUser = await model.nguoi_dung.findOne({
            where: {
                email: email
            }
        })

        // user tồn tại > kiểm tra tiếp mật khẩu
        if (checkUser) {
            let checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);

            if (checkPass) {
                let token = createToken(checkUser);
                successCode(res, token, "Login success");
            } else {
                errorCode(res, "", "pass word not found");

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
        let { ho_ten, email, mat_khau, tuoi } = req.body;
        // Kiểm tra trùng email trước khi tạo user
        let checkEmail = await model.nguoi_dung.findOne({
            where: {
                email: email
            }
        })

        if (checkEmail) {
            errorCode(res, "", "Email already exists");
        } else {
            // Email ko trùng thì tạo user
            let data = {
                ho_ten,
                email,
                mat_khau: bcrypt.hashSync(mat_khau, 10),
                tuoi
            };
            await model.nguoi_dung.create(data);
            successCode(res, data, "Sign up success");
        }
    }
    catch (err) {
        failCode(res, "Lỗi BE");
    }
}


const getUser = async (req, res) => {
    try {
        let data = await model.nguoi_dung.findAll();
        successCode(res, data, "Get user success");
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
}

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
            user.ho_ten = ho_ten;
            user.email = email;
            user.mat_khau = bcrypt.hashSync(mat_khau, 10);
            user.tuoi = tuoi;

            await user.save();
            successCode(res, user, "User updated successfully");
        }
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
}

//commonjs 
module.exports = {
    getUser,
    userLogin,
    updateUser,
    signUp
}

// yarn add bcrypt
