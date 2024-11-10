import React from 'react';
import Header from '../Header/Header';
import ConsultationForm from '../ConsultationForm/ConsultationForm'
import Statistics from '../Statistics/Statistics';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Header />
            <div className={styles.heroContent}>
                <h1>РЕШИМ ЛЮБОЙ ПРАВОВОЙ ВОПРОС</h1>
                <p>Помощь в решении любого правового вопроса в вашу пользу</p>
                <ConsultationForm />
                <Statistics />
            </div>
        </div>
    );
};

export default Hero;
