const {Router} = require('express');

const router = Router()


router.get('/login',(req,res)=>{
    res.json({
        ok:true
    })
})

module.exports = router