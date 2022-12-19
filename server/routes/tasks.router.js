const express = require('express');
const router = express.Router();


// post function to get input from dom
router.post('/', (req, res) =>{
    console.log('post request made', req.body);

});





module.exports = router;