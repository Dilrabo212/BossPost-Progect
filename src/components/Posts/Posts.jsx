import React, { useEffect, useState } from 'react'
import cls from './style.module.scss'
import { ChexboxRow,  Column,  ErrowLeft } from '../../icons/svj'
import icon from '../../assets/images/topD.svg'
import PostCard from '../PostCard/PostCard';
import { useLocation, useParams } from 'react-router-dom';
import request from '../../services/httpRequest';
const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    request.get("posts")
      .then(res => {
        setPosts(res)
      })
  }, [])
  
  return (
    <div className={cls. posts}>
        <div className='container'>
             <div className={cls.activeLink}>
                <button className={cls.leftLink} >
                    <ErrowLeft/>
                    Yangi maqolalar
                </button>
                <div className={cls.flex}>
                <button className={cls.rightLink}>
                Barcha maqolalar
                <img src={icon} alt="" />
                
                </button>
                <div className={cls.wrapIcon}>
                    <div className={cls.icons}> <ChexboxRow /></div>
                    <div className={cls.icons}><Column /></div> 
            </div>
                </div>
             </div>
             {
                    <PostCard   data={posts}/> 
             }
        </div>
      
    </div>
  )
}

export default Posts
