const models = require('./Models');
const mongoose = require('mongoose');

const DistrictDAO = {
    async selectAll() {
        const query = {};
        const district = await models.District.find(query).exec();
        return district;
    },
    async insert(district) {
        district._id = new mongoose.Types.ObjectId();
        const result = await models.District.create(district);
        return result;
    },
    async update(district) {
        const newValues = { 
            name: district.name, 
            city: district.city
        }
        const result = await models.District.findByIdAndUpdate(district._id, newValues, { new: true});
        return result;
    },
    async delete(_id) {
        const result = await models.District.findByIdAndRemove(_id);
        return result;
    },
    async selectById(_id) {
        const district = await models.District.findById(_id).exec();
        return district;
    }
};
module.exports = DistrictDAO;