const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json('sample text');
});

module.exports = router;