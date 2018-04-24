import { packagerRouter } from './packager';
const express = require('express');
export const apiRouter = express.Router();

apiRouter.use('/packages', packagerRouter);

// export default apiRouter;
