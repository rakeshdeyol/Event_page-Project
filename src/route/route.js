const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

//----------------RESTFUL API's--------------------------------//

                //---POST METHOD----//
router.post('/events', eventController.createEvent);


                //----GET METHOD-----//
router.get('/events',eventController.getAllEvent);

               //----PUT METHOD----//
router.put('/events/:eventId',
    eventController.updateEvent);

               //---DELETE METHOD----//
router.delete(
  '/events/:eventId',
  eventController.deleteEvent
);


module.exports = router;