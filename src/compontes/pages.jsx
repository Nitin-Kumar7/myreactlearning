import React from 'react'
import Trending from './Pages/Trending'
 import FeaturedPosts from './Pages/FeaturedPosts'
 import LatestNew from './Pages/LatestNew'
 

const pages = () => {
  
  return (
    <div>
        <Trending/>
        <FeaturedPosts/>
        <LatestNew/>
      
    </div>
  )
}

export default pages