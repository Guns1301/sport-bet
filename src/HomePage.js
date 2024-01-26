import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'

const HomePage = () => {
    const events = [
        { id: 1, title: 'Событие 1', date: '2024-01-26' },
        { id: 2, title: 'Событие 2', date: '2024-01-27' },
        { id: 3, title: 'Событие 3', date: '2024-01-27' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Домашняя страница</h1>
            <ul className={styles.eventList} >
                {
                    events.map((event) => (
                        <li key={event.id} className={styles.eventItem}>
                            <Link to={`/event/${event.id}`} className={styles.eventLink}>{event.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default HomePage;
