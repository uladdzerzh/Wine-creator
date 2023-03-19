let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Wine Model
let wineSchema = require('../models/Wine');

// CREATE Wine
router.route('/create-wine').post((req, res, next) => {
  wineSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Wines
router.route('/').get((req, res) => {
  wineSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Wine
router.route('/edit-wine/:id').get((req, res) => {
  wineSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Wine
router.route('/update-wine/:id').put((req, res, next) => {
  wineSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Wine updated successfully !')
    }
  })
})

// Delete Wine
router.route('/delete-wine/:id').delete((req, res, next) => {
  wineSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;