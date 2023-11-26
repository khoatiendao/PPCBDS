const express = require('express');
const router = express.Router();
const CityDAO = require('../models/CityDAO');
const PropertyStatusDAO = require('../models/PropertyStatusDAO');
const DistrictDAO = require('../models/DistrictDAO');
const PropertyTypeDAO = require('../models/PropertyTypeDAO');
const PropertyDAO = require('../models/PropertyDAO');
const FullContractDAO = require('../models/FullContractDAO');


// City
router.get('/city',  async function(req, res) {
    const city = await CityDAO.selectAll();
    res.json(city);
});
  
router.post('/add-city', async function(req, res) {
    const name = req.body.name;
    const city = { name: name };
    const result = await CityDAO.insert(city);
    res.json(result);
});

router.put('/update-city/:id', async function(req, res) {
    const _id = req.params._id;
    const name = req.body.name;
    const city = { _id: _id, name: name };
    const result = await CityDAO.update(city);
    res.json(result);

});

router.delete('/delete-city/:id', async function(req, res) {
    const _id = req.params._id;
    const result = await CityDAO.delete(_id);
    res.json(result);
});

// PropertyStatus
router.get('/propertystatus', async function(req, res) {
    const propertystatus = await PropertyStatusDAO.selectAll();
    res.json(propertystatus);
});

router.post('/add-propertystatus', async function(req, res) {
    const name = req.body.name;
    const propertystatus = { name: name };
    const result = await PropertyStatusDAO.insert(propertystatus);
    res.json(result);
});

router.put('/update-propertystatus/:id', async function(req, res) {
    const _id = req.params._id;
    const name = req.body.name;
    const propertystatus = { _id: _id, name: name };
    const result = await PropertyStatusDAO.update(propertystatus);
    res.json(result);
});

router.delete('/delete-propertystatus/:id', async function(req, res) {
    const _id = req.params._id;
    const result = await PropertyStatusDAO.delete(_id);
    res.json(result);
});

//District
router.get('/district', async function(req, res) {
    const district = await DistrictDAO.selectAll();
    res.json(district);
});

router.post('/add-district', async function(req, res) {
    const name = req.body.name;
    const cidCity = req.body.city;
    const city = await CityDAO.selectById(cidCity);
    const district = { name: name, city: city };
    const result = await DistrictDAO.insert(district);
    res.json(result);
});

router.put('/update-district/:id', async function(req, res) {
    const _id = req.params._id;
    const name = req.body.name;
    const cidCity = req.body.cidCity;
    const city = await CityDAO.selectById(cidCity);
    const newValuesDistrict = { _id: _id, name: name, city: city };
    const result = await DistrictDAO.update(newValuesDistrict);
    res.json(result);
});

router.delete('/delete-district/:id', async function(req, res) {
    const _id = req.params._id;
    const result = await DistrictDAO.delete(_id);
    res.json(result);
});

// PropertyType

router.get('/propertytype', async function(req, res) {
    const propertytype = await PropertyTypeDAO.selectAll();
    res.json(propertytype);
});

router.post('/add-propertytype', async function(req, res) {
    const name = req.body.name;
    const amount = req.body.amount;
    const propertytype = { name: name, amount: amount };
    const result = await PropertyTypeDAO.insert(propertytype);
    res.json(result);
});

router.put('/update-propertytype/:id', async function(req, res) {
    const _id = req.params._id;
    const name = req.body.name;
    const amount = req.body.amount;
    const newValuesPropertyType = { _id: _id ,name: name, amount: amount };
    const result = await PropertyTypeDAO.update(newValuesPropertyType);
    res.json(result);
});

router.delete('/delete-propertytype/:id', async function(req, res) {
    const _id = req.params._id;
    const result = await PropertyTypeDAO.delete(_id);
    res.json(result);
});

// Property
router.get('/property', async function(req, res) {
    const result = await PropertyDAO.selectAll();
    res.json(result);
});

router.post('/add-property', async function(req, res) {
    const property_name = req.body.property_name;
    const propertytype_id = req.body.propertytype_id;
    const description = req.body.description;
    const ciddistrict = req.body.district;
    const address = req.body.address;
    const area = req.body.area;
    const bed_room = req.body.bed_room;
    const bath_room = req.body.bath_room;
    const price = req.body.price;
    const installment_rate = req.body.installment_rate;
    const avatar = req.body.avatar;
    const album = req.body.album;
    const status = req.body.status;
    const propertytype = await PropertyTypeDAO.selectById(propertytype_id);
    const district = await DistrictDAO.selectById(ciddistrict);
    const propertystatus = await PropertyStatusDAO.selectById(status);
    const property = {
        property_name: property_name, 
        propertytype_id: propertytype, 
        description: description, 
        district: district, 
        address: address,
        area: area,
        bed_room: bed_room,
        bath_room: bath_room,
        price: price,
        installment_rate: installment_rate,
        avatar: avatar,
        album: album,
        status: propertystatus
    };
    const result = await PropertyDAO.insert(property);
    res.json(result);
});

// Full Contract
router.get('/fullcontract', async function(req, res) {
    const result = await FullContractDAO.selectAll();
    res.json(result);
});

router.post('/add-fullcontract', async function(req, res) {
    const customer_name = req.body.customer_name;
    const yearofbirth = req.body.yearofbirth;
    const ssn = req.body.ssn;
    const customer_address = req.body.customer_address;
    const mobile = req.body.mobile;
    const property_id = req.body.property_id;
    const now = new Date().getTime();
    const price = req.body.price;
    const deposit = req.body.deposit;
    const remain = req.body.remain;
    const status = req.body.status;
    const property = await PropertyDAO.selectById(property_id);
    const fullcontract = {
        customer_name: customer_name,
        yearofbirth: yearofbirth,
        ssn: ssn,
        customer_address: customer_address,
        mobile: mobile,
        property_id: property,
        cdate: now,
        price: price,
        deposit: deposit,
        remain: remain,
        status: status
    };
    const result = await FullContractDAO.insert(fullcontract);
    res.status(201).json(result);
});

module.exports = router;