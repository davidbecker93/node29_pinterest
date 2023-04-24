var DataTypes = require("sequelize").DataTypes;
var _binh_luan = require("./binh_luan");
var _hinh_anh = require("./hinh_anh");
var _luu_anh = require("./luu_anh");
var _nguoi_dung = require("./nguoi_dung");

function initModels(sequelize) {
  var binh_luan = _binh_luan(sequelize, DataTypes);
  var hinh_anh = _hinh_anh(sequelize, DataTypes);
  var luu_anh = _luu_anh(sequelize, DataTypes);
  var nguoi_dung = _nguoi_dung(sequelize, DataTypes);

  hinh_anh.belongsToMany(nguoi_dung, { as: 'nguoi_dung_id_nguoi_dungs', through: luu_anh, foreignKey: "hinh_id", otherKey: "nguoi_dung_id" });
  nguoi_dung.belongsToMany(hinh_anh, { as: 'hinh_id_hinh_anhs', through: luu_anh, foreignKey: "nguoi_dung_id", otherKey: "hinh_id" });
  binh_luan.belongsTo(hinh_anh, { as: "hinh", foreignKey: "hinh_id"});
  hinh_anh.hasMany(binh_luan, { as: "binh_luans", foreignKey: "hinh_id"});
  luu_anh.belongsTo(hinh_anh, { as: "hinh", foreignKey: "hinh_id"});
  hinh_anh.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "hinh_id"});
  binh_luan.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(binh_luan, { as: "binh_luans", foreignKey: "nguoi_dung_id"});
  hinh_anh.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(hinh_anh, { as: "hinh_anhs", foreignKey: "nguoi_dung_id"});
  luu_anh.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "nguoi_dung_id"});

  return {
    binh_luan,
    hinh_anh,
    luu_anh,
    nguoi_dung,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
