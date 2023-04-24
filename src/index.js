// yarn init => tạo file package.json
// yarn add express
// setup server bằng express
const express = require('express');
const app = express();
app.use(express.json()); // cho phép BE req.body đọc được mã json
app.use(express.static(".")); // định vị  để load tài nguyên từ source
// yarn add cors
const cors = require('cors');
app.use(cors()); // cho phép tất cả FE truy cập vào API của BE
// tạo server localhost với port 8080 => localhost:8080
app.listen(8080);

// yarn install = npm i
// yarn start

// localhost:8080/api/user/get-user

const rootRouter = require('./routes/rootRoute');
app.use("/api", rootRouter)


// yarn sequelize-cli
// yarn sequelize-cli init

//yarn sequelize-cli model:generate --name Food --attributes food_id:string,food_name:string

// yarn sequelize-cli db:migrate


const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        info: {
            title: "node 29",
            version: "1.1.3"
        }
    },
    apis: ["src/swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));


