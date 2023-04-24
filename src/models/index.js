// đối tượng dùng để kết nối CSDL

const { Sequelize } = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize(config.database, config.userName, config.pass, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
})

module.exports = sequelize;


// try {
//     sequelize.authenticate();
//     console.log("thành công")
// } catch (err) {
//     console.log("thất bại", err)

// }
// node src/models/index.js

//yarn sequelize-auto -h khainguyenlab.synology.me -d db_pinterest -u root -x  - p 3306 --dialect mariadb - o ./src/models - l es6