const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/users.js')

router.get('/', user_controller.getAllUsers)
router.get('/:_id', user_controller.getOneUser)
router.post(':/_id', user_controller.postOneUser)
router.put('/:_id', user_controller.updateUser)
router.delete('/:_id', user_controller.deleteUser)

module.exports = router