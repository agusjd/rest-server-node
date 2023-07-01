const {Router} = require('express')

const {messagesPost,messagesGet,messagesDelete} = require('../controllers/messages')
const router = Router()


router.get('/', messagesGet )

router.post('/', messagesPost)

router.delete('/', messagesDelete)

module.exports = router