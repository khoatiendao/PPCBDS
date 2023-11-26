const models = require('./Models');
const mongoose = require('mongoose');

const PropertyTypeDAO = {
    async selectAll() {
        const query = {};
        const propertytype = await models.PropertyType.find(query).exec();
        return propertytype;
    },
    async insert(propertytype) {
        propertytype._id = new mongoose.Types.ObjectId();
        const result = await models.PropertyType.create(propertytype);
        return result;
    },
    async update(propertytype) {
        const newValues = { name: propertytype.name, amount: propertytype.amount };
        const result = await models.PropertyType.update(propertytype._id, newValues, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await models.PropertyType.findByIdAndRemove(_id);
        return result;
    },
    async selectById(_id) {
        const result = await models.PropertyType.findById(_id).exec();
        return result;
    }
};
module.exports = PropertyTypeDAO;