import React from 'react';
import featuredPostsJson from   './Json/featuredPostsJson.json'
 
import image from './../../Images/logo_default.png';


const FeaturedPosts = () => {
  return (
    <section class="featured-posts-grid">
    <div class="container">
      <div class="row row-8">

          {featuredPostsJson.map((post, index) => (
            <div key={index} className="col-lg-6">
              <div className="featured-posts-grid__item featured-posts-grid__item--sm">
                <article className="entry card post-list featured-posts-grid__entry">
                  <div
                    className="entry__img-holder post-list__img-holder card__img-holder"
                    style={{ backgroundImage: `url(${post.imageSrc})` }}
                  >
                    <a href="single-post.html" className="thumb-url"></a>
                    <img src={post.actualImageSrc} alt="" className="entry__img d-none" />
                    <a
                      href="categories.html"
                      className={`entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--${post.categoryColor}`}
                    >
                      {post.category}
                    </a>
                  </div>

                  <div className="entry__body post-list__body card__body">
                    <h2 className="entry__title">
                      <a href="single-post.html">{post.title}</a>
                    </h2>
                    <ul className="entry__meta">
                      <li className="entry__meta-author">
                        <span>by</span>
                        <a href="#">{post.author}</a>
                      </li>
                      <li className="entry__meta-date">{post.date}</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          ))} 
   
       </div>
        <div class="col-lg-6">
 
          <div class="featured-posts-grid__item featured-posts-grid__item--lg">
            <article class="entry card featured-posts-grid__entry">
              <div class="entry__img-holder card__img-holder">
                <a href="single-post.html">
                  <img src={image} alt="" class="entry__img"/>
                </a>
                <a href="categories.html" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">Lifestyle</a>
              </div>

              <div class="entry__body card__body">   
                <h2 class="entry__title">
                  <a href="single-post.html">What Days and Hours are PH Online Shoppers Most Likely to Buy?</a>
                </h2>
                <ul class="entry__meta">
                  <li class="entry__meta-author">
                    <span>by</span>
                    <a href="#">DeoThemes</a>
                  </li>
                  <li class="entry__meta-date">
                    Jan 21, 2018
                  </li>              
                </ul>
              </div>
            </article>
          </div>  
        </div>          

      </div>
 
  </section>
  );
};

export default FeaturedPosts;
