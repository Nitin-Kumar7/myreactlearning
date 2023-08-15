import React from 'react'

const Preloader_overlay = () => {
  return (
    <div>
      <div className="loader-mask" style={{display: 'none'}}>
    <div className="loader"style={{display: 'none'}}>
      <div></div>
    </div>
  </div>
      <div className="content-overlay"></div>
    </div>
  )
}

export default Preloader_overlay