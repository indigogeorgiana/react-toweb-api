import React from 'react'

import api from '../api'
import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    api.getWidgets(this.renderWidgets.bind(this))
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  hideAddWidget () {
    this.setState({
      addWidgetVisible: false
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  deleteWidget (widget) {
    api.deleteWidget(widget, (error) => {
      (error) ? this.setStatus({error}) : this.refreshList()
    })
  }

  showEditForm (widget) {
    console.log(widget)
  }

  addWidget (widget) {
    api.appendWidget(widget, (error) => {
      error ? this.setState({error}) : this.refreshList()
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Widgets FTW!</h1>

        <WidgetList
          showDetails={this.showDetails.bind(this)}
          widgets={this.state.widgets} 
          deleteWidget={this.deleteWidget.bind(this)}
          showEditForm={this.showEditForm.bind(this)}
      />

        <p><a id='show-widget-link' href='#' onClick={(e) => this.showAddWidget(e)}>Add widget</a></p>

        {this.state.addWidgetVisible && <AddWidget
          submitCallback={this.addWidget.bind(this)}
          finishAdd={this.hideAddWidget.bind(this)}
          />}

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails.bind(this)}
          widget={this.state.activeWidget} />}

      </div>
    )
  }
}
