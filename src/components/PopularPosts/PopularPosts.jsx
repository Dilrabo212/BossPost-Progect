import React, { useEffect, useState } from 'react'
import cls from './style.module.scss'
import { ErrowLeft, ErrowRight } from '../../icons/svj'
import { Link } from 'react-router-dom'
import PopularPostCard from '../PopularPostCard/PopularPostCard'
import request from '../../services/httpRequest'
const PopularPosts = () => {
  const [popularPosts, setPopularPosts] = useState([])
  useEffect(() => {
    request.get("popular-posts")
      .then(res => {
        setPopularPosts(res)
      })
  }, [])
  return (
         <div className={cls.popularPosts}>
      <div className="container">
        <div className={cls.popularLinks}>
            <Link to="/">
                <button className={cls.leftLink}>
                   <ErrowLeft/>
                   Mashxur maqolalar
                </button>
                </Link>
            <Link to="/">
                <button className={cls.rightLink}>
                Barchasi
                    <ErrowRight/>
                    </button>
                </Link>
        </div>
        <div className={cls.popularPostsCard}>
{
     <PopularPostCard data={popularPosts}/>
}

        </div>
        </div> 
    </div>
  )
}

export default PopularPosts
