import React from 'react'
 import Images from '../images'
import image1 from '../../assets/images/content/grid/grid_post_1.jpg'

const FeaturePost = () => {
 console.log(Images)
 
  return (
    <div>
        <section className="featured-posts-grid">
      <div className="container">
        <div className="row row-8">

          <div className="col-lg-6">

            
            <div className="featured-posts-grid__item featured-posts-grid__item--sm">
              <article className="entry card post-list featured-posts-grid__entry">
 
              <div className="entry__img-holder post-list__img-holder card__img-holder" style={{ backgroundImage: `url(${image1})` }}>
  

                  <a href="single-post.html" className="thumb-url"></a>
                  <img src="img/content/hero/hero_post_1.jpg" alt="" className="entry__img d-none"/>
                  <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">World</a>
                </div>

                <div className="entry__body post-list__body card__body">  
                  <h2 className="entry__title">
                    <a href="single-post.html">3 Founders With Booming Businesses Share Stories About Their Difficult Early</a>
                  </h2>
                  <ul className="entry__meta">
                    <li className="entry__meta-author">
                      <span>by</span> <a href="#">DeoThemes</a>  </li>
                    <li className="entry__meta-date">
                      Jan 21, 2018
                    </li>              
                  </ul>
                </div>
              </article>
            </div> 

           
            <div className="featured-posts-grid__item featured-posts-grid__item--sm">
              <article className="entry card post-list featured-posts-grid__entry">
                <div className="entry__img-holder post-list__img-holder card__img-holder"  style={{ backgroundImage:   "url('./../../Images/content/hero/hero_post_1.jpg')"}}>
                  <a href="single-post.html" className="thumb-url"></a>
                  <img src="img/content/hero/hero_post_2.jpg" alt="" className="entry__img d-none"/>
                  <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">Fashion</a>
                </div>

                <div className="entry__body post-list__body card__body">  
                  <h2 className="entry__title">
                    <a href="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
                  </h2>
                  <ul className="entry__meta">
                    <li className="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li className="entry__meta-date">
                      Jan 21, 2018
                    </li>              
                  </ul>
                </div>
              </article>
            </div>  

          
            <div className="featured-posts-grid__item featured-posts-grid__item--sm">
              <article className="entry card post-list featured-posts-grid__entry">
                <div className="entry__img-holder post-list__img-holder card__img-holder"  style={{ backgroundImage:  "url('./../../Images/content/hero/hero_post_1.jpg')"}}>
                  <a href="single-post.html" className="thumb-url"></a>
                  <img src="img/content/hero/hero_post_3.jpg" alt="" className="entry__img d-none"/>
                  <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--blue">Business</a>
                </div>

                <div className="entry__body post-list__body card__body">  
                  <h2 className="entry__title">
                    <a href="single-post.html">These Are the 20 Best Places to Work in 2018</a>
                  </h2>
                  <ul className="entry__meta">
                    <li className="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li className="entry__meta-date">
                      Jan 21, 2018
                    </li>              
                  </ul>
                </div>
              </article>
            </div>  

          </div> 
          <div className="col-lg-6">

           
            <div className="featured-posts-grid__item featured-posts-grid__item--lg">
              <article className="entry card featured-posts-grid__entry">
                <div className="entry__img-holder card__img-holder">
                  <a href="single-post.html">
                    <img src="img/content/hero/hero_post_4.jpg" alt="" className="entry__img"/>
                  </a>
                  <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">Lifestyle</a>
                </div>

                <div className="entry__body card__body">   
                  <h2 className="entry__title">
                    <a href="single-post.html">What Days and Hours are PH Online Shoppers Most Likely to Buy?</a>
                  </h2>
                  <ul className="entry__meta">
                    <li className="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li className="entry__meta-date">
                      Jan 21, 2018
                    </li>              
                  </ul>
                </div>
              </article>
            </div> 
          </div>          

        </div>
      </div>
    </section>
    </div>
  )
}

export default FeaturePost