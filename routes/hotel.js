var HotelSchema = require('../schemas/Hotel');

var errorHandler = function (msg, res) {
	//TODO: NO DEJAR TODO A ÚLTIMO MOMENTO
	res.status(500).json({message: msg});
};

var validationSchema = function (req, res) {
	if (typeof(req.body.name) !== "string") {
		return errorHandler("name is invalid", res);
	}

	if (typeof(req.body.description) !== "string") {
		return errorHandler("description is invalid", res);
	}

	if (typeof(req.body.stars) !== "number") {
		return errorHandler("stars is invalid", res);
	}

	if (typeof(req.body.price) !== "number") {
		return errorHandler("price is invalid", res);
	}
};

module.exports = function (router) {

	router.get('/hotel', function(req, res, next) {
		HotelSchema.find(function (err, hoteles) {
			if (err) {
				res.send(500)
			}
			res.json(hoteles);
		});
	});

	router.get('/hotel/:id', function(req, res, next) {
		HotelSchema.findById(req.params.id, function (err, hotel) {
			if (err) {
				res.send(500);
			}
			res.json(hotel);
		});
	});

	router.post('/hotel', function(req, res, next) {
		validationSchema(req, res);
		
		var newHotel = new HotelSchema({
			'name': req.body.name,
			'description': req.body.description,
			'stars': req.body.stars,
			'price': req.body.price,
			'created_at': new Date()
		});

		newHotel.save(function (err) {
			if (err) {
				return errorHandler("Houston we have a problem", res);
			}
			res.send(200);
		});
	});

	router.put('/hotel/:id', function(req, res, next) {
		validationSchema(req, res);

		HotelSchema.findById(req.params.id, function (err, hotel) {
			if (err) {
				res.status(404).json({message: "Hotel is not found"});
				return;
			}

			hotel.name = req.body.name;
			hotel.description = req.body.description;
			hotel.stars = req.body.stars;
			hotel.price = req.body.price;
			
			hotel.save(function (err) {
				if (err) {
					return errorHandler("Houston we have a problem", res);
				}
				res.send(200);
			});
		});
	});

	router.delete('/hotel/:id', function(req, res) {
		HotelSchema.remove({
			_id: req.params.id
		}, function(err, bear) {
			if (err) {
				return errorHandler("Houston we have a problem", res);
			}
			res.send(200);
		});
	});

	return router;
};
