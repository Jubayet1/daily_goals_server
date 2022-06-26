const express = require('express');
const router = express.Router();

router.get('/', (req,  res) => {
    res.status(200).json({message: 'All Goals'});
})
router.post('/', (req,  res) => {
    res.status(200).json({message: 'Post a Goal'});
})
router.put('/:id', (req,  res) => {
    res.status(200).json({message: `Update ${req.params.id}`});
})
router.delete('/:id', (req,  res) => {
    res.status(200).json({message: `Delete ${req.params.id}`});
})

module.exports = router;