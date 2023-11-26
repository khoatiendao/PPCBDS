const mongoose = require("mongoose");
// schemas
const PropertyTypeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  amount: String,
}, { versionKey: false });
const PropertyStatusSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
}, { versionKey: false });
const CitySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
}, { versionKey: false });
const DistrictSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  city: CitySchema
}, { versionKey: false });
const PropertySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  property_code: String,
  property_name: String,
  propertytype_id: PropertyTypeSchema,
  description: String,
  district: DistrictSchema,
  address: String,
  area: String,
  bed_room: String,
  bath_room: String,
  price: Number,
  installment_rate: Number,
  avatar: String,
  album: String,
  status: PropertyStatusSchema,
}, { versionKey: false });
const FullContractSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullcontract_code: String,
  customer_name: String,
  yearofbirth: String,
  ssn: String,
  customer_address: String,
  mobile: String,
  property_id: PropertySchema,
  cdate: {
    type: Date,
    require: true
  },
  price: Number,
  deposit: Number,
  remain: Number,
  status: {
    type: Number,
    enum: [0, 1],
    require: true
  },
}, {versionKey: false});
// models
const PropertyType = mongoose.model('PropertyType', PropertyTypeSchema);
const PropertyStatus = mongoose.model('PropertyStatus', PropertyStatusSchema);
const City = mongoose.model('City', CitySchema);
const District = mongoose.model('District', DistrictSchema);
const Property = mongoose.model('Property', PropertySchema);
const FullContract = mongoose.model('FullContract', FullContractSchema);
module.exports = { PropertyType, PropertyStatus, City, District, Property, FullContract };