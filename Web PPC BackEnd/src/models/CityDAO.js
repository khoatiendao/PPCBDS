const models = require('./Models');
const mongoose = require('mongoose');

const CityDAO = {
    async selectAll() {
        const query = {};
        const citys = await models.City.find(query).exec();
        return citys;
    },
    async insert(city) {
        city._id = new mongoose.Types.ObjectId();
        const result = await models.City.create(city);
        return result; 
    },
    async update(city) {
        const newvalues = {name: city.name};
        const result = await models.City.findByIdAndUpdate(city._id, newvalues, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await models.City.findByIdAndRemove(_id);
        return result;
    },
    async selectById(_id) {
        const result = await models.City.findById(_id).exec();
        return result;
    }
}
module.exports = CityDAO;