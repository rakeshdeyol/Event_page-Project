const eventModel = require("../model/eventModel")

//-------------Create Event-------------//

const createEvent = async function (req, res) {
    try {
      const eventData = req.body;
    
      if (Object.keys(eventData).length == 0)
        return res.status(400).send({ status: false, msg: 'enter body' });

      
      const createEventData = await eventModel.create(eventData);
  
      res.status(201).send({ status: true, msg: createEventData });
     } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
  };


//-----------------Get Event-------------//


  const getAllEvent = async function (req, res) {
    try {
      
        let allEvents = await eventModel.find();
        res.status(200).send(allEvents);
    
    } catch (err) {
      res.status(500).send({ msg: 'Error', error: err.message });
    }
  };


//-----------------Update Event-------------//

  const updateEvent = async function (req, res) {
    try {
      let id = req.params.eventId;
      
      let updateData = await eventModel.findById(id);

      if (!updateData) {
        return res
          .status(404)
          .send({ status: false, msg: 'This Event is not found or deleted.' });
      }
      
       updateData = await eventModel.findByIdAndUpdate( id ,req.body ,{
        new: true,
        useFindAndModify:false,
        runValidators:true
      });
      res.status(200).send({ status: true, msg: updateData });
    } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
  };
  

//-----------------------Delete Event---------------------//



  const deleteEvent = async function (req, res) {
    try {
      let id = req.params.eventId;
      let deleteData = await eventModel.findById(id);

      if (!deleteData) {
        return res
          .status(404)
          .send({ status: false, msg: 'This user is not found or deleted.' });
      }

      deleteData = await eventModel.findByIdAndDelete({ _id: id }, deleteData, {
        new: true,
      });
      res.status(200).send({ status: true, msg: 'Successfully Deleted' });
    } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
  };
  


  module.exports.createEvent = createEvent;
  module.exports.getAllEvent = getAllEvent;
  module.exports.updateEvent = updateEvent;
  module.exports.deleteEvent = deleteEvent;