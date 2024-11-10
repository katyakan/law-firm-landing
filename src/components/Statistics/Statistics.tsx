import React from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
    return (
        <div className={styles.statistics}>
            <div>
                <h2>89%</h2>
                <p>Выигранных дел</p>
            </div>
            <div>
                <h2>34</h2>
                <p>Сотрудника в штате</p>
            </div>
            <div>
                <h2>18</h2>
                <p>Лет на рынке</p>
            </div>
        </div>
    );
};

export default Statistics;
