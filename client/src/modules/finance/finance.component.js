import React, { useState, useEffect} from 'react';
import styles from './index.module.scss'
import socketIOClient from 'socket.io-client';

const SERVER_URL = 'http://localhost:4000';
export function Finance () {
     
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const socket = socketIOClient(SERVER_URL);
        socket.emit('start');
        socket.on('ticker', data => {           
            setQuotes(data);
        });
      }, []);

        return (
            <div className={styles.wrapper}>
                <ul className={styles.lists}>
                    {quotes.map((quote, index) => {
                        return (
                            <li key={index} className={styles.list}>
                                <div className={styles.list__item}>
                                    <div className={styles.list__ticker}>{quote.ticker}</div>
                                    <div className={styles.list__ticker}>{quote.exchange}</div>
                                    <div className={styles.list__price}>{quote.price}</div>
                                    <div className={styles.list__change}>{quote.change}</div>
                                    <div className={styles.list__change_percent}>{quote.change_percent}</div> 
                                    <div className={styles.list__dividend}>{quote.dividend}</div>                     
                                    <div className={styles.list__yield}>{quote.yield}</div>                     
                                </div>   
                            </li>
                        )
                    })                  
                    }
                </ul>
            </div>
        )   
}
