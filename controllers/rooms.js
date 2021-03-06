const Rooms = require('../models/rooms')

// Get All Rooms
exports.GetAllRooms = async (req, res) => {
    try {
        const allRooms = await Rooms.find()
        res.json(allRooms)
      } catch {
        res.sendStatus()
      }
}
// Get One Room
exports.GetOneRoom = async (req, res) => {
    try {
        const getOneRoom = await Rooms.find({ _id: req.params._id })
        res.json(getOneRoom)
      } catch {
        res.sendStatus()
      }
}
//Post One Room 
exports.PostNewRoom = (req, res) => {
    try {
        let newRoom = new Rooms({
            name: req.body.name,
            capacity: req.body.capacity,
            description: req.body.description, 
            price: req.body.price,
            ageMin: req.body.ageMin,
            photo: req.body.photo
        })
        res.send(`New Room created`)
        newRoom.save();
        // console.log('CREATED')
    } catch {
        res.sendStatus()
    }
}
// Update Room
exports.UpdateRoom = async (req, res) => {
    try {
        const updatedRoom = await Rooms.findOneAndUpdate(
            { _id: req.params._id },
            { name: req.body.name ,
            description: req.body.description ,
            ageMin: req.body.ageMin ,
            capacity: req.body.capacity ,
            price: req.body.price ,
            photo: req.body.photo},
        );
        res.send("Room Updated");
    } catch {
        res.sendStatus()
    }
}
// Delete Room
exports.DeleteRoom = async (req, res) => {
    try {
        await Rooms.findOneAndDelete({ _id: req.params._id})
        res.send(`Room deleted`)
    } catch {
        console.log('Error Deleting')
        res.sendStatus(404)
    }
}



