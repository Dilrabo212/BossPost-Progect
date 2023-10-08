import React, { useEffect, useState } from 'react'
import cls from './style.module.scss'
import img from '../../assets/images/Group.png'
import { Calendar, Or, Save, Time } from '../../icons/svj'
import { Comment } from '@mui/icons-material'
import { Link, useLocation, useParams } from 'react-router-dom'
import request from '../../services/httpRequest'
const SinglePost = () => {

  const { postId } = useParams()

    let { pathname } = useLocation()
    pathname = pathname.substring(1)

    const [post, setPost] = useState({})
    useEffect(() => {
        request.get(`/posts/${postId}`)
            .then(res => {
                setPost(res)
            })
    }, [])

    const [user, setUser] = useState({})
    useEffect(() => {
        if (post?.userId) {
            request.get(`/users/${post?.userId}`)
                .then(res => {
                    setUser(res)
                })
        }
    }, [post?.userId])
    console.log(post);

  return (
    <div className={cls.singlePost}>
      <div className={cls.heading}>
        <h1 className={cls.title}>{post?.title}</h1>
        <img className={cls.img2}  src={img} alt="bg" />
      </div>
        <img className={cls.img}  src={img} alt="bg" />
        <div className='container'>
          <div className={cls.userPost}>
            <Link to={`/userInfo/${user?.id}`}>
            <img  className={cls.userImg} src={post?.user?.img} alt="" />
            </Link>
            <div className={cls.userName}>{post?.user?.username}<span className={cls.userNameSpan}>{post?.user?.surname}</span></div>
            <button className={cls.folowBtn}>Obuna bo‘lish</button>
          </div>
          <hr className={cls.hr} />
          <div className={cls.date}>
            <span className={cls.dateSpan}>
            <span className={cls.items}><Calendar/> {post?.created_at}</span><Or/>
            <span className={cls.items}><Comment className={cls.comment}/>8 Izoh</span><Or/>
            <span className={cls.items}><Time/>3 daqiqa oldin</span>
            </span>
            <button className={cls.seveBtn}><Save/>Saqlash </button>
          </div>
          <hr className={cls.hr} />
          <div className={cls.imgPost}>
          <img className={cls.imgPost} src={post?.image} alt="img" />
          </div>
          
          <p className={cls.postBody} dangerouslySetInnerHTML={{ __html: post?.body }} />
          
        </div>
    </div>
  )
}

export default SinglePost
