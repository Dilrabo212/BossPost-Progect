import React from 'react'
import PopularPosts from '../../components/PopularPosts/PopularPosts'
import Posts from '../../components/Posts/Posts'
import { Home } from '../../components/Home/Home'

const Body = () => {
  return (
    <div>
      <Home/>
      <PopularPosts/>
      <Posts/>
    </div>
  )
}

export default Body
