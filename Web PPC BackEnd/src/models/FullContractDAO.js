const models = require('./Models');
const mongoose = require('mongoose');
const idCode = require('../utils/IDcode');

const FullContractDAO = {
    async selectAll() {
        const query = {};
        const result = await models.FullContract.find(query).exec();
        return result;
    },
    async insert(fullcontract) {
        fullcontract._id = new mongoose.Types.ObjectId();
        const fullcontract_code = await idCode.genStringFullContractCode();
        fullcontract.fullcontract_code = fullcontract_code;
        const result = await models.FullContract.create(fullcontract);
        return result;
    }
};
module.exports = FullContractDAO;