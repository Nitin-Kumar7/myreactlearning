import React from 'react'
 
import Trending from './Pages/Trending'
 import FeaturePost from './Pages/FeaturePost'
 import LatestNew from './Pages/LatestNew'
 

const pages = () => {
  return (
    <div>
        <Trending/>
        <FeaturePost/>
        <LatestNew/>
      
    </div>
  )
}

export default pages