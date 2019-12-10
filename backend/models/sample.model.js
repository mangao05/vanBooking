
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  sampleName: { type: String, required: true },
}, {
  timestamps: true,
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;