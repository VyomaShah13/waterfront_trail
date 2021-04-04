const express = require('express')
const Points = require('../include/models/Points')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get("/", (req, res) => {
    Points.find({}, (err, docs) => {
        res.json(docs)
    })
})

router.post("/insert", (req, res) => {
    console.log(req)
    let point = new Points()

    point.title = req.body.title
    point.description = req.body.description
    point.coordinates = req.body.coordinates

    point.save()
        .then(success => {
            res.json({
                error: false,
                message: 'Point added!'
            })
        })
        .catch(err => {
            res.json({
                error: true,
                message: 'An error occured!'
            })
        })
})

router.get("/purge-all-like-a-devil", (req, res) => {
    Points.deleteMany({}, (err) => {
        if ( err ) throw err 

        res.json({
            error: false,
            message: "All purged!"
        })
    })
})

module.exports = router