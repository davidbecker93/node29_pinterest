const { Op } = require('sequelize');
const iniModels = require('../models/init-models');
const sequelize = require('../models/index');
const { successCode, errorCode, failCode } = require('../config/response');
const { descriptToken } = require('../config/jwt');
const model = iniModels(sequelize);

// Check if data exists
const checkData = async (data, res) => {
    if (data) {
        successCode(res, data, "Success");
    } else {
        errorCode(res,'No result matched');
    }
}

const getImg = async (req, res) => {
    try {
        let data = await model.hinh_anh.findAll();
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const createImg = async (req, res) => {
    try {
        const { filename } = req.file;
        const { ten_hinh, mo_ta, nguoi_dung_id } = req.body;

        let newModel = {
            ten_hinh,
            duong_dan: `/public/img/${filename}`,
            mo_ta,
            nguoi_dung_id
        }
        let data = await model.hinh_anh.create(newModel);
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const updateImg = async (req, res) => {
    try {
        const { hinh_id } = req.params;
        const { ten_hinh, duong_dan, mo_ta, nguoi_dung_id } = req.body;

        let modelUpdate = { ten_hinh, duong_dan, mo_ta, nguoi_dung_id };

        await model.hinh_anh.update(modelUpdate, { where: { hinh_id } });

        let data = await model.hinh_anh.findByPk(hinh_id);
        checkData(data, res);
    }
    catch (err) {
        failCode(res, "Lỗi BE");

    }
};

const removeImg = async (req, res) => {
    try {
        const { hinh_id } = req.params;
        await model.hinh_anh.destroy({ where: { hinh_id } });
        checkData(null, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const searchImg = async (req, res) => {
    try {
        const { keyword } = req.params;

        const data = await model.hinh_anh.findAll({ 
            where: { 
                ten_hinh: { [Op.like]: `%${keyword}%` } 
            } });

        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const detailImg = async (req,res) => {
    try {
        const { hinh_id } = req.params;
        const data = await model.hinh_anh.findOne({
            where: { hinh_id },
            include: [{
                model: model.nguoi_dung,
                as: 'nguoi_dung'
            }]
        });
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

const commentImg = async (req,res) => {
    try {
        const { hinh_id } = req.params;
        const data = await model.binh_luan.findAll({
            where: { hinh_id },
            include: [{
                model: model.nguoi_dung,
                as: 'nguoi_dung'
            }]
        });
        checkData(data, res);
    } catch (err) {
        failCode(res, "Lỗi BE");
    }
};

module.exports = { getImg, createImg, updateImg, removeImg, searchImg,detailImg,commentImg }

