import React from 'react'

export default ({widget, showDetails, deleteWidget}) => {
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' onClick={() => showDetails(widget)}>details</a>
      <a href='#' id={`delete-${widget.id}`} onClick={() => deleteWidget(widget)}>delete</a>
    </div>
  )
}
