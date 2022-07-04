const express = require('express');
const router = express.Router();
const Rooms_Controllers = require("../controllers/rooms.js")

//Routes
router.get('/', Rooms_Controllers.GetAllRooms)

router.get('/:_id', Rooms_Controllers.GetOneRoom)

router.post('/', Rooms_Controllers.PostNewRoom)

router.put('/:_id', Rooms_Controllers.UpdateRoom)

router.delete('/:_id', Rooms_Controllers.DeleteRoom)

module.exports = router;

