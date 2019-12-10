const router = require('express').Router();
let Sample = require('../models/sample.model');

router.route('/add').post((req, res) => {
    // const fieldName = formdata
  const sampleName = req.body.sampleName;

  const newSample = new Sample({sampleName});

  newSample.save()
    .then(() => res.json('Sample added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Sample.find()
    .then(sample => res.json(sample))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;