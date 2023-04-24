const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nguoi_dung', {
    nguoi_dung_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    mat_khau: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    ho_ten: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tuoi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anh_dai_dien: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nguoi_dung',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nguoi_dung_id" },
        ]
      },
    ]
  });
};
