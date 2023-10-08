import React from 'react'
import cls from './style.module.scss'
import { Link } from 'react-router-dom'
import { CardContent, CardMedia, Typography } from '@mui/material'
import { Saved, Sms, TimeIcon, Wived } from '../../icons/svj'
const PostCard = ({data}) => {
  return (
    <div className={cls.wrap}>
    {
        data?.map((el) => {
            return (
                <Link to={`${el.id}`}>
                    console.log(el);
                    <div className={cls.card} key={el.id}>
                        <div className={cls.cardBody}>
                            <CardMedia
                                className={cls.img}
                                component="img"
                                image={el.image}
                                alt='post'
                            />
                            <div className={cls.section}>
                                <div className={cls.sectionContent}>
                                    <span className={cls.sectionTitle}>vizual dizayn</span>
                                    <span className={cls.create}>{el.created_at}</span>
                                <div className={cls.postTitle}>{el.title}</div>
                                <div className={cls.postBody} dangerouslySetInnerHTML={{ __html: el.body }}></div>
                                </div>
                                <div className={cls.sectionFooter}>
                                    <div className={cls.userInfo}>
                                        <img  className={cls.userImg} src={el.image} alt="" />
                                        <div className={cls.userName}>{el.user?.name}{el.user?.surname}</div>
                                    </div>
                                    <div className={cls.readMore}>
                                        <button className={cls.readMoreBtn} >
                                            <Saved/>
                                        Keyinroq o‘qish
                                        </button>
                                        <span className={cls.items}> <TimeIcon/>3 daqiqa o‘qish</span>
                                        <span className={cls.items}><Sms/> 34</span>
                                        <span className={cls.items}><Wived/>{el.views}</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    }</div>
)
}


export default PostCard
