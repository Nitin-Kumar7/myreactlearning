import React from 'react'

const Topbar = () => {
  return (
    <div>
    
        <div className="top-bar d-none d-lg-block">
      <div className="container">
        <div className="row">

     
          <div className="col-lg-6">
            <ul className="top-menu">
              <li><a href="#">About</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
       
          <div className="col-lg-6">
            <div className="socials nav__socials socials--nobase socials--white justify-content-end"> 
              <a className="social social-facebook" href="#" target="_blank" aria-label="facebook">
                <i className="ui-facebook"></i>
              </a>
              <a className="social social-twitter" href="#" target="_blank" aria-label="twitter">
                <i className="ui-twitter"></i>
              </a>
              <a className="social social-google-plus" href="#" target="_blank" aria-label="google">
                <i className="ui-google"></i>
              </a>
              <a className="social social-youtube" href="#" target="_blank" aria-label="youtube">
                <i className="ui-youtube"></i>
              </a>
              <a className="social social-instagram" href="#" target="_blank" aria-label="instagram">
                <i className="ui-instagram"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Topbar