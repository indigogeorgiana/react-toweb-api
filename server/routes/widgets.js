var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getWidgets())
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  db.deleteWidget(req.params.id)
  res.sendStatus(204)
})

router.put('/:id', (req, res) => {
  db.updateWidget(req.body)
  res.sendStatus(204)
})

module.exports = router
