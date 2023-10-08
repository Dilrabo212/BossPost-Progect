import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import request from '../../../services/httpRequest';
import { useForm } from 'react-hook-form';
import { isValidJSON } from '../../../utils/isValidJSON';
import { User } from '../../../icons/svj';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    bgcolor: 'background.paper',
    border: 'none',
    p: '60px',
    borderRadius: '8px',
};

export default function LoginModal({ open, handleClose, handleOpen }) {

    const userDataStr = localStorage.getItem('userData')

    let userData = {}

    if (isValidJSON(userDataStr)) {
        userData = JSON.parse(userDataStr)
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        request.post('/register', {
            username: data.username,
            password: data.password,
            name: userData.name,
            image: userData.avatar,
            id: `${Date.now()}`
        }).then((data) => {
            handleClose()
            localStorage.setItem("userData", JSON.stringify(data.user))
        })
    }
    return (
        <div>
            <Modal
                className={styles.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Box sx={style}>
                    <div className={styles.modal}>
                    <div><User /></div>
                    <div className={styles.info}>
                    <div className={styles.title} > 
                            Kirish uchun qulay nom va parol tanlang 😇
                        </div>
                        <div className={styles.subtitle} > Bilim ulashish har doim yaxshi</div>
                        <label htmlFor="name" className={styles.label}>
                        <input
                            {...register('username', { required: true })}
                            className={styles.inp}
                            type='text'
                            placeholder='name '
                        />
                        </label>
                        <label htmlFor="name" className={styles.label}>
                        <input
                            {...register('password', { required: true })}
                            className={styles.inp}
                            type='password'
                            placeholder='password'
                        />
                        </label>
                        <button type='submit' className={styles.login}>Войти</button>
                        </div>
                        </div>
                    </Box>
                </form>
            </Modal>
        </div >
    );
}

