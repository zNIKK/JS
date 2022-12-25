const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=>{

    if(req.user.admin){
        res.send('esse dado só pode ser visto pelo admin')
    } else {
        res.status(401).send('[Not Admin]: Access Denied');
    }
})

module.exports = router