import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import request from '../../../services/httpRequest';
import {  User } from '../../../icons/svj';
import google from '../../../assets/images/google.svg';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
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

export default function EnterModal({ open, handleClose, onRegisterClick }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        request.post('/login', data)
            .then(data => {
                handleClose()
                localStorage.setItem("userData", JSON.stringify(data.user))
            })
    }

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
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
                   Ro‘yhatdan o‘tish
                   </div>
                    <div className={styles.subtitle} > Bilim ulashish har doim yaxshi</div>
                    <label htmlFor="name" className={styles.label}>
                        Email
                    <input
                        {...register('username', { required: true })}
                        className={styles.inp}
                        type="text"
                        placeholder='Email' />
                    </label>
                    <label htmlFor="name" className={styles.label}>
                        Password
                    <input
                        {...register('password', { required: true })}
                        className={styles.inp}
                        type="password"
                        placeholder='password' />
                        </label>
                        <div>
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        /> <span className={styles.remember}>Eslab qolish</span>
                            <span className={styles.question}>Parolni unutdingizmi?</span>
                                
                        </div>
                        <button className={styles.google}>
                        <img src={google} alt="" />
                        Kirish
                    </button>
                    <Button type='submit' className={styles.login}>Kirish</Button>
                    <Typography className={styles.questionText} variant="p" component="p">
                    Sizda hisob mavjud emasmi?
                        <button className={styles.question} onClick={onRegisterClick}> Ro‘yxatdan o‘tish</button>
                    </Typography>
                    </div>
                    </div>
                </Box>
            </form>
        </Modal>
    );
}

