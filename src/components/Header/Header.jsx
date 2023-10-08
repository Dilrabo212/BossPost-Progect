import { Link, useLocation, useParams } from 'react-router-dom'
import cls from './styles.module.scss'
import logo from '../../assets/images/Image.png'
import search from '../../assets/images/Frame.svg'
import BlackBurtton from '../Buttons/BlackBurtton'
import { useRef, useState } from 'react'
import { isValidJSON } from '../../utils/isValidJSON'
import RegistrationModal from '../Modal/RegisterModal/RegisterModal'
import LoginModal from '../Modal/LoginModal/LoginModal'
import EnterModal from '../Modal/EnterModal/EnterModal'
import { OpIcon, OpIcon1, OpIcon2, OpIcon3 } from '../../icons/svj'
import { useEffect } from 'react'
import request from '../../services/httpRequest'
export const Header = ({}) => {
  


  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenRegister = () => {
    setOpenRegister(true);
    handleClose();
  }
  const handleCloseRegister = () => setOpenRegister(false);


  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLog = () => {
    setOpenLogin(true);
    handleCloseRegister();
  }
  const handleCloseLog = () => setOpenLogin(false);

  const userDataStr = localStorage.getItem('userData')

  let userData = {}

  if (isValidJSON(userDataStr)) {
    userData = JSON.parse(userDataStr)
  }

  const [openSel, setOpenSel] = useState(false)



  const menus = [
    { id: 1, link: `/userInfo`,icon: <OpIcon/>, name: 'Profil sozlamalari' },
    { id: 2, link: `/:userId`,icon: <OpIcon1/>, name: 'Saqlanganlar' },
    { id: 3, link: '/createpost',icon: <OpIcon2/>, name: 'Maqolalarim' },
    { id: 4, link: '/statistics',icon: <OpIcon3/>, name: 'Statistika' },
    


  ]
  const menuRef = useRef()
  const imgRef = useRef()


  return <header className={cls.header }>
  
    <nav className={cls.flex}>
         <div>
         <Link to="/">
            <img src={logo} alt="" />
          </Link>
         </div>
     <div >
     <ul className={cls.navList}>
        <li><img src={search} alt="" /></li>
        <li className={cls.links}><Link to="/">Loyiha haqida </Link></li>
        <li className={cls.links}><Link to="/">Yozish </Link></li>
        <li className={cls.links}><Link to="/">Kirish </Link></li>
        <li className={cls.links}>
        <EnterModal onRegisterClick={handleOpenRegister} open={open} handleClose={handleClose} />
        <RegistrationModal onLoginClik={handleOpenLog} open={openRegister} handleClose={handleCloseRegister} />
        <LoginModal onLoginClik={handleOpenLog} open={openLogin} handleClose={handleCloseLog} />
        <div className={cls.relative}>
        {
            userData && userData.id
              ?
              <button
                ref={imgRef}
                className={cls.btnImage}
                onClick={() => setOpenSel(!openSel)}
              >
                <img className={cls.userPhoto}
                  src={userData?.image}
                  alt='userDataname'

                />
              </button>
              :
            <button  onClick={handleOpen}> <BlackBurtton  onClick={handleOpen}>Boshlash</BlackBurtton></button>
              
          }
            </div>
               {
                openSel &&
                <div
                  ref={menuRef}
                  className={cls.selectBox}>
                  <ul className={cls.selectList}>
                    {
                      menus.map((el) => (
                        <li
                          onClick={() => setOpenSel(false)}
                          className={cls.option} key={el.id}>
                          <Link to={el.link}>
                            <span className={cls.icon}>{el.icon}{el.name}</span>
                            
                          </Link>
                        </li>
                      ))
                    }
              
                  </ul>
                </div>
              }
              
            
            </li>
      </ul>
     </div>
    </nav>

  </header>
}
