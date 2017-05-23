module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget,
  updateWidget
}

var widgets = [{
  id: 1,
  name: 'Red widget',
  price: 23.45,
  mfg: 'Acme Inc.',
  inStock: 4
}, {
  id: 2,
  name: 'Blue widget',
  price: 423.47,
  mfg: 'Acme Inc.',
  inStock: 8
}, {
  id: 3,
  name: 'Yellow widget',
  price: 123.40,
  mfg: 'Acme Inc.',
  inStock: 3
}]

function getWidgets () {
  return widgets
}

function saveWidget (widget) {
  widget.id = widgets.length + 1
  widgets.push(widget)
}

function deleteWidget (id) {
  widgets = widgets.filter((w) => w.id != id)
}

function updateWidget (widget) {
  let originalWidget = widgets.forEach((w, i) => {
    if (w.id == widget.id) {
      widgets[i] = widget
    }
  })
}
