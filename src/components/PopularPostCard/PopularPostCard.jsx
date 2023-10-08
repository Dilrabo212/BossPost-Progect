import React from 'react'
import cls from './style.module.scss'
import img from '../../assets/images/Image (1).png'
const PopularPostCard = ({data}) => {
  return (
    <div className={cls.wrapper}>
        
{
        data?.map((el) => {
            return (
                <div className={cls.card} >
                    <div className={cls.imageContent} key={el.id}>
                        <img className={cls.imageContent} src={el.image} alt="" />
                            </div>
                            <div className={cls.infoContent}>
                            <span className={cls.rowWeight}>
                        <span className={cls.date}>{el.created_at}</span>
                        <span className={cls.dot}>•</span>
                        <span className={cls.userName}>{el.user.name}{el.user.surname} </span>
                        </span>
                    <div dangerouslySetInnerHTML={{ __html: el.body }}/>
                  </div>
             </div> 
            )
        })




}
</div>

  )
}

export default PopularPostCard
