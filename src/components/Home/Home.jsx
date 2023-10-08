import React from 'react'
import cls from './style.module.scss'
import img from '../../assets/images/Group.png'
import row from '../../assets/images/FrameRow.svg'
import { Link } from 'react-router-dom'
import BlackBurtton from '../Buttons/BlackBurtton'

export const Home = () => {
  return (
    <>
    <div className={cls.home}>

        <div className={cls.hero}>
          <div className={cls.textContent}>
         <h1 className={cls.heroTitle}>
         Bizning maqsadimiz oʻzbek ilmiy kontentini boyitish
         </h1>
            <p className={cls.heroSubtitle}>
            Bilimingizni maqolalarda ulashing va hamjamiyatni kengaytiring
            </p>
            <BlackBurtton>Hamjamiyatga qo’shiling</BlackBurtton>
            <ul className={cls.flex}>
              <li className={cls.hashtag}> <Link to='/'>#dolzarb</Link></li>
              <li className={cls.hashtag}> <Link to='/'>#ta'im</Link></li>
              <li className={cls.hashtag}> <Link to='/'>#iqtisodiyot</Link></li>
              <li className={cls.hashtag}> <Link to='/'>#madaniyat</Link></li>
              <li className={cls.hashtag}> <Link to='/'>#texnologiya</Link></li>
              <li className={cls.hashtag}> <Link to='/'>#san'at</Link></li>
            </ul>
            <span className={cls.more}>
              <Link to='/'>
                ko‘proq mavzularni ko‘rish
                <img src={row} alt="" />
                </Link>
                </span>
          </div>
          <div className={cls.imgContent}>
            <img src={img} alt="" />
          </div>
        </div>
    
    </div>
    </>
  )
}
