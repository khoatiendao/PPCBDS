const models = require('./Models');
const mongoose = require('mongoose');
const idCode = require('../utils/IDcode');

const PropertyDAO = {
    async selectAll() {
        const query = {};
        const property = await models.Property.find(query).exec();
        return property;
    },
    async insert(property) {
        property._id = new mongoose.Types.ObjectId();
        const property_code = await idCode.genStringPropertyCode();
        property.property_code = property_code;
        const result = await models.Property.create(property);
        return result;
    },
    async selectById(_id) {
        const result = await models.Property.findById(_id).exec();
        return result;
    }
};

module.exports = PropertyDAO;