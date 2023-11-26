const models = require('./Models');
const mongoose = require('mongoose');

const PropertyStatusDAO = {
    async selectAll() {
        const query = {};
        const result = await models.PropertyStatus.find(query).exec();
        return result;
    },
    async insert(propertystatus) {
        propertystatus._id = new mongoose.Types.ObjectId();
        const result = await models.PropertyStatus.create(propertystatus);
        return result;
    },
    async update(propertystatus) {
        const newvalues = {name: propertystatus.name};
        const result = await models.PropertyStatus.findByIdAndUpdate(propertystatus._id, newvalues, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await models.PropertyStatus.findByIdAndRemove(_id);
        return result;
    },
    async selectById(_id) {
        const result = await models.PropertyStatus.findById(_id).exec();
        return result;
    }
};
module.exports = PropertyStatusDAO
