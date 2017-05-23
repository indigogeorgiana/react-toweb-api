import request from 'superagent'

var widgetUrl = 'http://localhost:3000/widgets'

export function getWidgets (callback) {
  request
    .get(widgetUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function appendWidget (widget, callback) {
  request
    .post(widgetUrl)
    .send(widget)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}

export function deleteWidget (widget, callback) {
  request
    .delete(`${widgetUrl}/${widget.id}`)
    .end((err) => {
      callback(err)
    })
}

export function updateWidget (widget, callback) {
  request
    .put(`${widgetUrl}/${widget.id}`)
    .send(widget)
    .end((err) => {
      callback(err)
    })
}
