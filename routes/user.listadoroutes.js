const express = require('express');
connect = require('mongoose');
const ListadoUser = require('../models/ListadoUser');

const fileMiddleware = require('../middleware/file.middleware');

const router = express.Router();


router.get('/', async (req, res, next) => {
	try {
		const users = await ListadoUser.find();
// 	console.log(req.user);
		return res.status(200).json(users)
	} catch (error) {
		return next(error)
	}
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const research = await ListadoUser.findById(id);
		if (research) {
			return res.status(200).json(research);
		} else {
			return res.status(404).json('No research found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/name/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const researchByName = await ListadoUser.find({ name: name });
		return res.status(200).json(researchByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.post('/create', [fileMiddleware.upload.single('picture'), fileMiddleware.uploadToCloudinary], async (req, res, next) => {
	try {
		const cloudinaryUrl = req.file_url ? req.file_url : null;
		const {name, email } = req.body; 
		const research = {
			name,
            email,
			picture: cloudinaryUrl
	};
		const newResearch = new ListadoUser(research); 
		const createdResearch = await newResearch.save();
    return res.status(201).json(createdResearch);
    } catch (error) {
    next(error);
	}
});


///DELETE ///

router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		await Research.findByIdAndDelete(id);
		return res.status(200).json('Research deleted!');
	} catch (error) {
	return next(error);
	}
});

  ///PUT edición

router.put('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const researchModify = new ListadoUser(req.body);
		researchModify._id = id;
		const research = await ListadoUser.findByIdAndUpdate(id, researchModify);
		if (research) {
		return res.status(200).json(researchModify);
	} else {
		return res.status(404).json('No user found by this id');
	}
	} catch (error) {
		return next(error);
	}
	});

module.exports = router;