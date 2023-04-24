const express = require('express');
const rootRouter = express.Router();

const userRouter = require('./userRoute');
const imgRouter = require('./imgRoute');


rootRouter.use("/user", userRouter);

rootRouter.use("/img", imgRouter);

// rootRouter.use("/product", productRouter);

module.exports = rootRouter;