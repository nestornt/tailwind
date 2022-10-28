import React from 'react'

const Alert = () => {
  return (
    <div className="flex">
      <div className="alert alert-info m-6 w-1/3">
        <div className="alert-title alert-info-title">Info</div>
        <div className="alert-content alert-info-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div className="alert alert-warning m-6 w-1/3">
        <div className="alert-title alert-warning-title">Warning</div>
        <div className="alert-content alert-warning-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div className="alert alert-danger m-6 w-1/3">
        <div className="alert-title alert-danger-title">Danger</div>
        <div className="alert-content alert-content-daner">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  )
}

export default Alert