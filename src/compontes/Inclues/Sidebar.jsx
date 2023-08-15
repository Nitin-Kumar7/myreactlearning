import React from 'react'

const Sidebar = () => {
  return (
    <div>
    
        <header className="sidenav" id="sidenav">

 
<div className="sidenav__close">
  <button className="sidenav__close-button" id="sidenav__close-button" aria-label="close sidenav">
    <i className="ui-close sidenav__close-icon"></i>
  </button>
</div>

 
<nav className="sidenav__menu-container">
  <ul className="sidenav__menu" role="menubar">
    <li>
      <a href="#" className="sidenav__menu-url">Home</a>
      <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
      <ul className="sidenav__menu-dropdown">
        <li><a href="index.html" className="sidenav__menu-url">Home Default</a></li>
        <li><a href="index-politics.html" className="sidenav__menu-url">Home Politics</a></li>
        <li><a href="index-fashion.html" className="sidenav__menu-url">Home Fashion</a></li>
        <li><a href="index-games.html" className="sidenav__menu-url">Home Games</a></li>
        <li><a href="index-videos.html" className="sidenav__menu-url">Home Videos</a></li>
        <li><a href="index-music.html" className="sidenav__menu-url">Home Music</a></li>
      </ul>
    </li>
    <li>
      <a href="#" className="sidenav__menu-url">Pages</a>
      <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
      <ul className="sidenav__menu-dropdown">
        <li><a href="about.html" className="sidenav__menu-url">About</a></li>
        <li><a href="contact.html" className="sidenav__menu-url">Contact</a></li>
        <li><a href="search-results.html" className="sidenav__menu-url">Search Results</a></li>
        <li><a href="categories.html" className="sidenav__menu-url">Categories</a></li>
        <li><a href="404.html" className="sidenav__menu-url">404</a></li>
      </ul>
    </li>
    <li>
      <a href="#" className="sidenav__menu-url">Features</a>
      <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
      <ul className="sidenav__menu-dropdown">
        <li>
          <a href="#" className="sidenav__menu-url">Single Post</a>
          <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
          <ul className="sidenav__menu-dropdown">
            <li><a href="single-post.html" className="sidenav__menu-url">Style 1</a></li>
            <li><a href="single-post-politics.html" className="sidenav__menu-url">Style 2</a></li>
            <li><a href="single-post-fashion.html" className="sidenav__menu-url">Style 3</a></li>
            <li><a href="single-post-games.html" className="sidenav__menu-url">Style 4</a></li>
            <li><a href="single-post-videos.html" className="sidenav__menu-url">Style 5</a></li>
            <li><a href="single-post-music.html" className="sidenav__menu-url">Style 6</a></li>
          </ul>
        </li>
        <li><a href="shortcodes.html" className="sidenav__menu-url">Shortcodes</a></li>
      </ul>
    </li>        

    
    <li>
      <a href="#" className="sidenav__menu-url">World</a>
    </li>
    <li>
      <a href="#" className="sidenav__menu-url">Business</a>
    </li>
    <li>
      <a href="#" className="sidenav__menu-url">Fashion</a>
    </li>
    <li>
      <a href="#" className="sidenav__menu-url">Lifestyle</a>
    </li>
    <li>
      <a href="#" className="sidenav__menu-url">Advertise</a>
    </li>
  </ul>
</nav>

<div className="socials sidenav__socials"> 
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
</header>
    </div>
  )
}

export default Sidebar