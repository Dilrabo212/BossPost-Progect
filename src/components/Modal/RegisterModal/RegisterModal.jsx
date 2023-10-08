import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './style.module.scss';
import { RegisterModalProps } from './RegisterModalProps';
import { Cheked, User } from '../../../icons/svj';
import google from '../../../assets/images/google.svg';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
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

export default function RegistrationModal({ open, handleClose, onLoginClik }) {
    const props = {
        onLoginClik
    }
    const {
        register,
        handleSubmit,
        avatars,
        onSubmit
    } = RegisterModalProps(props)


    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modalBox} sx={style} component={'form'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.modal}>
                        <div><User /></div>
                   <div className={styles.info}>
                   <div className={styles.title} > Ro‘yhatdan o‘tish</div>
                    <div className={styles.subtitle} > Bilim ulashish har doim yaxshi</div>
                    <label htmlFor="name" className={styles.label}>
                       ISMINGIZ
                    <input
                        className={styles.inp}
                        type='text'
                        placeholder='name'
                        {...register('name', { required: true })}
                    />
                    </label>
                    <label htmlFor="surname" className={styles.label}>
                        SHARIFINGIZ
                    <input
                        className={styles.inp}
                        type='text'
                        placeholder='surname'
                        {...register('name', { required: true })}
                    />
                    </label>
                    <label htmlFor="username" className={styles.label}>
                    Confirm password
                    <input
                        className={styles.inp}
                        type='password'
                        placeholder='password'
                        {...register('password', { required: true })}
                        
                    />
                    
                    </label>
                    <label htmlFor="name" className={styles.label}>
                    Confirm password
                    <input
                        className={styles.inp}
                        type='password'
                        placeholder='password'
                        {...register('password', { required: true })}
                    />
                    </label>
                    <div className={styles.confirm}>
                        <span className={styles.check}>
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                            </span>
                        <span className={styles.text}>Ro’yhatdan o’tish tugmasini bosish orqali men
                             <span className={styles.blue}> sayt maxfiylik</span>
                         siyosatiga rozilik bildiraman.</span>
                    </div>
                    <button className={styles.google}>
                        <img src={google} alt="" />
                        Ro‘yhatdan o‘tish
                    </button>
                    <button type='submit' className={styles.login}>Ro‘yhatdan o‘tish </button>
                    <hr  className={styles.hr}/>
                    <div className={styles.flex}>
                        <p className={styles.textp}>Sizda allaqachon hisob mavjudmi?</p>
                        <button className={styles.entr}>Kirish</button>
                    </div>
                   </div>
                    </div>
                
                </Box>
            </Modal>
        </div >
    );
}
