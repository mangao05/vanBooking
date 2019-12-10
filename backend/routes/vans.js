const router = require('express').Router();
let Van = require('../models/van.model');


router.route('/').get((req, res) => {
    Van.find()
      .then(vans => res.json(vans))
      .catch(err => res.status(400).json('Error: ' + err));
  });


router.route('/add').post((req, res) => {
  const vanName = req.body.vanName;
  const year = req.body.year;
  const vanBody = req.body.vanBody;
  const transmission = req.body.transmission;
  const seats = req.body.seats;
  const category = req.body.category;
  const stock = req.body.stock;

  const newVan = new Van({
      vanName,
      year,
      vanBody,
      transmission,
      seats,
      category,
      stock
  });

  newVan.save()
    .then(() => res.json('Van added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;