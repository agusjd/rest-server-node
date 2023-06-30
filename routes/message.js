const {Router} = require('express')

const {messagesPost,messagesGet} = require('../controllers/messages')
const router = Router()


router.get('/', messagesGet )

router.post('/', messagesPost)


module.exports = router