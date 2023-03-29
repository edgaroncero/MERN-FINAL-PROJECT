const express = require('express');
const mongoose = require('mongoose');
const Event = require('../models/Event');

const fileMiddleware = require('../middlewares/file.middleware')
const imageToUri = require('image-to-uri');
const fs = require('fs');

const router = express.Router();


// GET QUERYS

    //Events List
router.get('/', async (req, res, next) => {

    try {
    const { limit, offset } = req.query;

    return Event.find()
    .then(events => {
        if ( offset && limit ){
        return res.status(200).json(events.slice(offset, parseInt(limit) + parseInt(offset)));
        } else if (offset) {
        return res.status(200).json(events.slice(offset));
        } else if (limit) {
        return res.status(200).json(events.slice(0, limit));
        }
        return res.status(200).json(events);
    });
    } catch (error) {
        return next(error);
    }
});

    //Events by date
router.get('/date', async (req, res, next) => {
    const { dtstart} = req.query;

    try { 
        const eventbyDate = await Event.find({$and: [{dtstart : { $lte: dtstart}} , {dtend: {$gte: dtstart}} ]} );
        if ( eventbyDate.length ){
        return res.status(200).json(eventbyDate);
        } else {
            return res.status(404).json('No event found by this date')
        }
    } catch (err) {
        return next(error);
    }
});

    //Events from DT
router.get('/dates', async (req, res, next) => {
    const { dtstart, dtend } = req.query;

    try {
        let events = [];
        if ( dtstart && dtend ) {
            events = await Event.find( {dtstart : { $lte: dtstart}, dtend: {$gte: dtend}  });
        }else {
            events = await Event.find();
        }
        return res.status(200).json(events);

    } catch (err) {
        return next(error);
    }
});

// GET PARAMS

    //Events by ID
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try { 
        const event = await Event.findById(id);
        if ( event ) {
        return res.status(200).json(event);
        } else {
            return res.status(404).json('No event found by this id')
        }
    } catch (err) {
        return next(error);
    }
});

    //Events by CITY
router.get('/city/:city', async (req, res, next) => {
    const { city } = req.params;

    try { 
        const eventbyCity = await Event.find( {city: city});
        if (eventbyCity ){
        return res.status(200).json(eventbyCity);
        } else {
            return res.status(404).json('No event found in this city')
        }
    } catch (err) {
        return next(error);
    }
});

// union query params
//router.get('/events/:idOrCity', async (req, res) => {
//    const { idOrCity  } = req.params;
//
//    try { 
//        let event = null;
//        try {
//            const eventId = mongoose.Types.ObjectId(idOrCity);
//            event = await Event.findById(eventId);
//        } catch (err) {
//            if (err.name === 'BSONTypeError') {
//                event = await Event.findOne( {city: idOrCity} );
//            } else {
//                return res.status(500).json(err);
//            }
//        }
//
//        if (event) {
//            return res.status(200).json(event);
//        } else {
//            return res.status(404).json('No Event found by this Id');
//        }
//    } catch (err) {
//        return res.status(500).json(err);
//    }
//});  

// POST

// IMÁGENES - MULTER
router.post('/', [fileMiddleware.upload.single('img')], async (req, res, next) => {
    
    try { 
    const { title, category = 'Entertainment', location , city, province, lat, long, dtstart, dtend, price, info,  link, artist, users } = req.body;
    const imgEvent = req.file ? req.file.filename : null;
    const event = {
        title, 
        category, 
        location , 
        city, 
        province, 
        lat, 
        long, 
        dtstart, 
        dtend, 
        price, 
        info,  
        link, 
        artist, 
        img: imgEvent,
        users: []
    };
    
        const newEvent = new Event(event);
        const eventCreated = await newEvent.save();        
        return res.status(201).json(eventCreated);
    } catch (error) {
        next(error);
    }
});

//IMÁGENES - IMAGE TO URI
router.post('/create', [fileMiddleware.upload.single('img')], async (req, res, next) => {
    
    try { 
        const imgEvent = req.file.path ? req.file.path : null;
        const { title, category = 'Entertainment', location , city, province, lat, long, dtstart, dtend, price, info,  link, artist, users } = req.body;
        const event = {
            title, 
            category, 
            location , 
            city, 
            province, 
            lat, 
            long, 
            dtstart, 
            dtend, 
            price, 
            info,  
            link, 
            artist, 
            img: imageToUri(imgEvent),
            users: []
        };

            const newEvent = new Event(event);
            const eventCreated = await newEvent.save(); 
            await fs.unlinkSync(imgEvent);      
            return res.status(201).json(eventCreated);
    } catch (error) {
        next(error);
    }
});

//IMÁGENES - CLOUDINARY

router.post('/add', [fileMiddleware.upload.single('img'), fileMiddleware.uploadToCloudinary], async (req, res, next) => {
    
    try { 
        const cloudinaryURL = req.file ? req.file_url : null;
        const { title, category = 'Entertainment', location , city, province, lat, long, dtstart, dtend, price, info,  link, artist, users } = req.body;
    
        const event = {
            title, 
            category, 
            location , 
            city, 
            province, 
            lat, 
            long, 
            dtstart, 
            dtend, 
            price, 
            info,  
            link, 
            artist, 
            img: cloudinaryURL,
            users: []
        };

            const newEvent = new Event(event);
            const eventCreated = await newEvent.save();        
            return res.status(201).json(eventCreated);
    } catch (error) {
        next(error);
    }
});

// DELETE 

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await Event.findByIdAndDelete(id);
        return res.status(200).json('Event deleted!');
    } catch (error) {
        return next(error);
    }
});

// PUT

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const eventEdited = new Event(req.body);
        eventEdited._id = id;
        const eventUpdated = await Event.findByIdAndUpdate(id, eventEdited);
        if (eventUpdated) {
            return res.status(200).json(eventEdited);
        } else {
            return res.status(404).json('No event found by this id')
        }
        
    } catch (error) {
        return next(error);
    }
})

// ADD USER 

router.put('/users/add-user', async (req, res, next) => {
    try {
        const { userId, eventId } = req.body;
        const userEvent = await Event.findByIdAndUpdate(
            eventId,
            { $push: { users: userId } },
            { new: true }
        )  ;
        return res.status(200).json(userEvent);
    } catch (error) {
            return next(error);    
    }
})

module.exports = router;