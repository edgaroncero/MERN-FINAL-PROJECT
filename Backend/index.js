const express = require('express');
const { events } = require('./models/Event');

//DB
require('./db.js');
const Event = require('./models/Event');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wellcome');
});

//Events List
router.get('/events', (req, res) => {
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
    })
});

//Events by ID
router.get('/events/:id', async (req, res) => {
    const id = req.params.id;
    try { 
        const event = await Event.findById(id);
        if ( event ) {
        return res.status(200).json(event);
        } else {
            return res.status(404).json('No event found by this id')
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Events by CITY
router.get('/events/city/:city', async (req, res) => {
    const { city } = req.params;

    try { 
        const eventbyCity = await Event.find( {city: city});
        if (eventbyCity ){
        return res.status(200).json(eventbyCity);
        } else {
            return res.status(404).json('No event found in this city')
        }
    } catch (err) {
    return res.status(500).json(err);
    }
});

//Events by date
router.get('/eventos', async (req, res) => {
    const { dtstart} = req.query;

    try { 
        const eventbyDate = await Event.find({$and: [{dtstart : { $lte: dtstart}} , {dtend: {$gte: dtstart}} ]} );
        if ( eventbyDate.length ){
        return res.status(200).json(eventbyDate);
        } else {
            return res.status(404).json('No event found by this date')
        }
    } catch (err) {
    return res.status(500).json(err);
    }
});

//Events from DT
router.get('/eventos', async (req,res) => {
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
        res.status(500).send("Something wrong happens ...")
    }
});

router.post('/event', (req, res) => { 
    const { title } = req.body;
    console.log(req.body);
    eventos.push({ 
        id: eventos.length + 1 , 
        title })
    res.send('OK');
})

// Middleware

    // CONVERTIR A JSON LA REQ
    server.use(express.json());
    server.use(express.urlencoded({extended: true}));

server.use('/', router);

server.listen(PORT, () =>{
    console.log(`Server runing in http://localhost:${PORT}`)
})