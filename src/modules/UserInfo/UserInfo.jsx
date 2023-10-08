import React from 'react'
import cls from './style.module.scss'
import { Disket, Put } from '../../icons/svj'
 import BlackBurtton from '../../components/Buttons/BlackBurtton'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import request from '../../services/httpRequest'
const UserInfo = () => {
  const { userId } = useParams()

  let { pathname } = useLocation()
  pathname = pathname.substring(1)

  const [post, setPost] = useState([])
  useEffect(() => {
      request.get(`/posts?userId=${userId}`)
          .then(res => {
              setPost(res)
          })
  }, [])


  console.log(post);
  const [user, setUser] = useState({})
  useEffect(() => {

      request.get(`/users/${userId}`)
          .then(res => {
              setUser(res)
          })

  }, [post?.userId])



  return (
    <>
    <div className={cls.userInfo}>

      <img className={cls.userInfo} src={user?.image}alt="" />
    </div>
    <span >
    {/* <Link to={`/userInfo/${user?.id}`} > */}
      <img className={cls.userPhoto} src={user?.image}alt="" />
      {/* </Link> */}
    </span>
    <div className='container'>
     <div className={cls.info}>
      <span className={cls.userName}>{user?.name}{user?.surname}</span>
      <button className={cls.btnUpdate}><Put/>Rasmni yangilash</button>
     </div>
<form action="" className={cls.form}>
        <div className={cls.flex}>
            <label className={cls.labelle} htmlFor="">
                Ism
                <input className={cls.input} type="text" placeholder={user?.name}/>
            </label>
            <label  className={cls.labelle} htmlFor="">
                Familiyangiz
                <input className={cls.input} type="text" placeholder={user?.username}/>
            </label>
        </div>
        <div className={cls.wrap}>
        <label htmlFor="" className={cls.labelle}>
       Foydalanuvchi nomi
        <input type="text" 
        className={cls.inp}  placeholder='name please'/>
        </label>
        <label htmlFor="" className={cls.labelle}>
        E-pochta
        <input type="text" 
        className={cls.inp}  placeholder={user?.email}/>
        </label>
        <label htmlFor="" className={cls.labelle}>
      Bio
        <textarea type="text" className={cls.taxtarea} placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        '/>
        </label>
        <button type="submit" className={cls.btn}><BlackBurtton ><Disket/>Saqlash</BlackBurtton>
       </button>
        </div>
        </form>
    </div>
    </>
  )
}

export default UserInfo
