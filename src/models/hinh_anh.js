const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hinh_anh', {
    hinh_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_hinh: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duong_dan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mo_ta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'nguoi_dung',
        key: 'nguoi_dung_id'
      }
    }
  }, {
    sequelize,
    tableName: 'hinh_anh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hinh_id" },
        ]
      },
      {
        name: "nguoi_dung_id",
        using: "BTREE",
        fields: [
          { name: "nguoi_dung_id" },
        ]
      },
    ]
  });
};
