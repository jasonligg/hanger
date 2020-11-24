const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('you are loggin in. this is your closet' + req.user)
})