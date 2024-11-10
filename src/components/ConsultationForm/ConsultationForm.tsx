import React from 'react';
import styles from './ConsultationForm.module.css';

const ConsultationForm = () => {
    return (
        <div className={styles.formContainer}>
            <p>НУЖНА КОНСУЛЬТАЦИЯ?</p>
            <div className={styles.form}>
                <input type="text" placeholder="+7 (___) ___-__-__" className={styles.input} />
                <button className={styles.button}>ЗАКАЗАТЬ ЗВОНОК</button>
            </div>
        </div>
    );
};


export default ConsultationForm