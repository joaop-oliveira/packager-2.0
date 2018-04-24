import { createPackage } from '../../lib';
const express = require('express');
export const packagerRouter = express.Router();

// packagerRouter.use("/", function(req, res) {
//   res.send({ ok: true });
// });

packagerRouter.post('/create', (req, res) => {
	// console.log('UPPER BODY =====>   ', req.body);
	try {
		createPackage('pack-sample', req, res);
	} catch (err) {
		console.log(err);
	}
});

// export default packagerRouter;
