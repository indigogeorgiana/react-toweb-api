import React from 'react'

import {appendWidget} from '../api'

export default class WidgetForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {...props.widget} || {
      name: '',
      price: '',
      mfg: '',
      inStock: ''
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state != nextProps.widget) {
      this.setState({...nextProps.widget})
    }
  }

  fieldChanged (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  save (e) {
    e.preventDefault()
    const widget = this.state
    this.props.submitCallback(widget)
  }

  render () {
    return (
      <div className='widget-form'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.name}
            /></p>
          <p><input placeholder='Price' name='price'
            onChange={e => this.fieldChanged(e)}
            value={this.state.price}
            /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={e => this.fieldChanged(e)}
            value={this.state.mfg}
            /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={e => this.fieldChanged(e)}
            value={this.state.inStock}
            /></p>
          <button onClick={e => this.save(e)}>Save widget</button> {' '}
          <a href='#' onClick={this.props.cancelCallback}>Cancel</a>
        </form>
      </div>
    )
  }
}
