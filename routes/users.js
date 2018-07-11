const express = require('express');
const router = express.Router();
const authUtils = require('../utils/auth')
const queries = require('../queries/queries.js');


router.post('/dashboard', authUtils.verifyTokenMiddleware, (req, res) => {
    queries.getPhotosByUserId(req.userId).then(photos => {
        res.json({ data: photos });
    })
});

router.post('/addPhoto', authUtils.verifyTokenMiddleware, (req, res) => {
    var request = { ...req.body, madeby_id: req.userId }
    queries.addPhoto(req.userId, request).then(photos => {
        res.json({ data: photos });
    })
});

router.delete('/:id', authUtils.verifyTokenMiddleware, (req, res) => {
    queries.deletePhoto(req.params.id).then(() => queries.getPhotosByUserId(req.userId).then(photos => {
        res.json({ data: photos })
    }))
});
router.put('/updatePhoto/:id', authUtils.verifyTokenMiddleware, (req, res) => {
    queries.updatePhoto(req.params.id, req.body).then(updatedPhoto => {
        res.json({ data: updatedPhoto })
    })
})

module.exports = router;
