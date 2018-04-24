import Package from '../../models/package.model';
import lib from '../../lib';
const moment = require('moment');

async function getAllPackages() {
	const data = await Package.find({}).exec();
	if (!data) throw new Error(data);
	return data;
}

async function getPackage(_id) {
	const data = await Package.findById(_id).exec();
	if (!data) throw new Error(data);
	return data;
}

const packageLib = {
	getAllPackages,
	getPackage
};

export default packageLib;
