import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EventDetailsPage.module.css';



const EventDetailsPage = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    const eventDetails = useMemo(() => ({
        1: { title: 'Inter - Milan', date: '2024-01-26' },
        2: { title: 'Juventus - Napoli', date: '2024-01-27' },
        3: { title: 'Roma - Lazio', date: '2024-01-27' },
    }), []);

    const [selectedOutcome, setSelectedOutcome] = useState(null);
    const [betPlaced, setBetPlaced] = useState(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if (betPlaced) {
            const matchTitle = eventDetails[eventId].title;
            const betInfo = `Матч: ${matchTitle}, Ставка: ${selectedOutcome}`;
            setNotification(`Спасибо, ваша ставка ${betInfo} принята`);
            const timeout = setTimeout(() => {
                setNotification(null);
                navigate('/');
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [betPlaced, eventId, eventDetails, navigate, selectedOutcome]);

    const handleOutcomeSelect = (outcome) => {
        setSelectedOutcome(outcome);
    };

    const handlePlaceBet = () => {
        if (selectedOutcome) {
            setBetPlaced(true);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.eventTitle}>Детали события {eventId}</h1>
            <p className={styles.eventInfo}>Название команд: {eventDetails[eventId].title}</p>
            <p className={styles.eventInfo}>Дата события: {eventDetails[eventId].date}</p>
            <div>
                <p className={styles.outcomeLabel}>Выберите исход:</p>
                <label className={styles.outcomeOption}>
                    <input
                        type="radio"
                        value="home"
                        checked={selectedOutcome === 'home'}
                        onChange={() => handleOutcomeSelect('home')}
                    />
                    Победа хозяев
                </label>
                <label className={styles.outcomeOption}>
                    <input
                        type="radio"
                        value="draw"
                        checked={selectedOutcome === 'draw'}
                        onChange={() => handleOutcomeSelect('draw')}
                    />
                    Ничья
                </label>
                <label className={styles.outcomeOption}>
                    <input
                        type="radio"
                        value="away"
                        checked={selectedOutcome === 'away'}
                        onChange={() => handleOutcomeSelect('away')}
                    />
                    Победа гостей
                </label>
            </div>
            <button className={styles.button} onClick={handlePlaceBet} disabled={!selectedOutcome}>
                Сделать ставку
            </button>
            {notification && <div className={styles.notification}>{notification}</div>}
        </div>
    );
};

export default EventDetailsPage;

