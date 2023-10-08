import cls from './styles.module.scss'
import logo from '../../assets/images/logoFooter.png'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, YouTube } from '../../icons/svj'
import app from '../../assets/images/appstore.png'
import google from '../../assets/images/googleplay.png'

export const Footer = () => {
  return (
    <>
<footer className={cls.footer}>
  <div className='container'>
         <div className={cls.Wrapper}> <div className={cls.logo}>
            <img src={logo} alt="" />
            </div>
          <div className={cls.footerFlexColumn}>
          <ul className={cls.footerList}>
              <li><Link to="/">Loyiha haqida</Link></li>
              <li><Link to="/">Yordam</Link></li>
              <li><Link to="/">Foydalanish shartlari</Link></li>
              <li><Link to="/">Maxfiylik siyosati</Link></li>
          </ul>
          <p className={cls.footerText}>Ushbu loyihaning maqsadi oʻzbek tilida ilmiy maqolalar onlayn chop etish orqali milliy kontentni boyitish va hamjamiyatni kengaytirish</p>
          <p className={cls.subTitleFooter}>© Copyright 2023 Boss Blog inc.</p>
      </div>
      <div className={cls.sotcialLogo}>
      <div className={cls.flex}> 
          <Facebook/>
          <Twitter/>
          <YouTube/>
      </div>
      <div className={cls.footerflex}>
    <img src={app} alt="" />
    <img src={google} alt="" />
    </div>
      </div></div>
</div>
      </footer>
    </>
  )
  
}
