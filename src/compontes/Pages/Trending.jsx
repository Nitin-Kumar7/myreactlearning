import React from 'react'

const Trending = () => {
  return (
    <div>
        <div className="container">
      <div className="trending-now">
        <span className="trending-now__label">
          <i className="ui-flash"></i>
          <span className="trending-now__text d-lg-inline-block d-none">Newsflash</span>
        </span>
        <div className="newsticker">
          <ul className="newsticker__list" style={{height: '34px', overflow:'hidden'}}>
            
            
                      
          <li className="newsticker__item" style={{marginTop: '0px'}}><a href="single-post-1.html" className="newsticker__item-url">Satelite cost tens of millions or even hundreds of millions of dollars to build</a></li><li className="newsticker__item" style={{marginTop: '0px'}}><a href="single-post-3.html" className="newsticker__item-url">8 Hidden Costs of Starting and Running a Business</a></li><li className="newsticker__item" style={{marginTop: '0px'}}><a href="single-post.html" className="newsticker__item-url">A-HA theme is multi-purpose solution for any kind of business</a></li></ul>
        </div>
        <div className="newsticker-buttons">
          <button className="newsticker-button newsticker-button--prev" id="newsticker-button--prev" aria-label="next article"><i className="ui-arrow-left"></i></button>
          <button className="newsticker-button newsticker-button--next" id="newsticker-button--next" aria-label="previous article"><i className="ui-arrow-right"></i></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Trending