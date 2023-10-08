import React from 'react'
import cls from './style.module.scss'
import { useForm } from 'react-hook-form';
import request from '../../services/httpRequest';
import BlackBurtton from '../../components/Buttons/BlackBurtton';
import { Disketa } from '../../icons/svj';
import { isValidJSON } from '../../utils/isValidJSON';
export default function Createpost() {
    const { register, handleSubmit, reset } = useForm();
//    const userData = JSON.parse(localStorage.getItem('userData'))


    const userDataStr = (localStorage.getItem('userData'))

    let userData = {}
  
    if (isValidJSON(userDataStr)) {
      userData = JSON.parse(userDataStr)
    }

    const onSubmit = (formData) => {
        const data = {
            "userId": userData.id,
            "id": Date.now(),
            "title": formData.title,
            "body": `<p>${formData.text}</p>`,
            "created_at": new Date().toISOString(),
            "views": 326,
            "image": "https://picsum.photos/360/300/?random=1"
        }

        request.post("/posts", data).then((res) => {
            reset();
            alert("Публикация добавлена");
        })
    }

    return (
        <div className={cls.postContent}>
            <div className='container'>
                    <h1 className={cls.title}>Hikoyani oldindan ko'rish</h1>
                    <span className={cls.img}>
                        <img src="https://picsum.photos/360/300/?random=1" alt="" />
                    </span>
                <form className={cls.createpost} onSubmit={handleSubmit(onSubmit)}>
                    <label className={cls.nameTitle} htmlFor="">Faqat menman
                        <input className={cls.inp}
                            {...register("title")}
                            type="text"
                            placeholder='Faqat men' />
                    </label>
                    <p className={cls.eslatma}>Eslatma: Bu yerdagi oʻzgarishlar sizning hikoyangizning ommaviy joylarda, masalan, Medium bosh sahifasida va obunachilarning kirish qutilarida qanday koʻrinishiga taʼsir qiladi, bu hikoyaning oʻziga emas.</p>
                    <label className={cls.nameText} htmlFor="">

                        <div className={cls.flex}>



                        {
                        userData ? (
                        <>
                          <span className={cls.name}> Nashriyot:</span>
                          <span className={cls.username}>{userData?.name}</span></>) 
                       : (<span className={cls.username}>Guest</span>)
                        }      
                        </div>
                      
                        <div className={cls.name}>       
                        Mavzularni qo'shing yoki o'zgartiring (5 tagacha) o'quvchilar       hikoyangiz nima haqida ekanligini bilishlari uchun
                     </div>
                        <textarea className={cls.textarea}
                            {...register("text")}
                            cols="30" rows="10">
                                
                            </textarea>
                            <div className={cls.flex}>
                            <button className={cls.btn1}>
                                <Disketa/>Saqlash
                            </button>
                        <button className={cls.btn} type='submit'> 
                        <BlackBurtton >Chop etish</BlackBurtton>
                        </button>
                            </div>
                    
                    </label>
                </form >
            </div>
        </div>
    )
}
