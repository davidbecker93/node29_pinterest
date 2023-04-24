const { checkToken } = require('../config/jwt');

const authentication = (req, res, next) => {

    try {
        //lấy token từ FE client
        let { token } = req.headers;

        // kiểm tra token
        checkToken(token);

        // nếu hợp lệ
        next();


    } catch (err) {
        // nếu không hợp lệ
        res.status(401).send(err.message);
    }

}
module.exports = { authentication }