const jwt = require('jsonwebtoken');

// generate token : tạo token
const createToken = (data) => {

    // token thời hạn là 5 phút, 
    // data là object 
    // private key = node
    let token = jwt.sign({ data }, "node", { expiresIn: "5m" });

    return token;
}

// verify token : kiểm tra token
const checkToken = (token) => {
    let verifyToken = jwt.verify(token, "node");

    return verifyToken;
}

// decode token : giải mã token

const descriptToken = (token) => {
    return jwt.decode(token);
}

module.exports = {
    createToken,
    checkToken,
    descriptToken
}