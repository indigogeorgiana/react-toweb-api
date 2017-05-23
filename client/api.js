import request from 'superagent'

var widgetUrl = 'http://localhost:3000/widgets'

module.exports = {
  getWidgets,
  appendWidget,
  deleteWidget
}

function getWidgets (callback) {
  request
    .get(widgetUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendWidget (widget, callback) {
  request
    .post(widgetUrl)
    .send(widget)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}

function deleteWidget (widget, callback) {
  request
    .delete(`${widgetUrl}/${widget.id}`)
    .end((err) => {
      callback(err)
    })
}
