const express = require('express');
const router = express.Router();
const Plots = require('../models/Plot');

//READ
router.get('/', (req, res) => {
	Plots.find({}, (err, foundPlots) => {
		res.json(foundPlots);
	});
});

//CREATE
router.post('/', (req, res) => {
	Plots.create(req.body, (err, createdPlots) => {
		res.json(createdPlots);
	});
});

//UPDATE
router.put('/:id', (req, res) => {
	Plots.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPlots) => {
			res.json(updatedPlots);
		}
	);
});

//DELETE
router.delete('/:id', (req, res) => {
	Plots.findByIdAndRemove(req.params.id, (err, deletedPlots) => {
		res.json(deletedPlots);
	});
});

module.exports = router;
