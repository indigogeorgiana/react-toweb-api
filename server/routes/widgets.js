const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getWidgets())
})

router.post('/', function (req, res) {
  const widget = {
    ...req.body,
    id: Number(req.body.id)
  }
  db.saveWidget(widget)
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteWidget(id)
  res.sendStatus(204)
})

router.put('/:id', (req, res) => {
  const widget = {
    id: Number(req.params.id),
    ...req.body
  }
  db.updateWidget(widget)
  res.sendStatus(204)
})

module.exports = router
