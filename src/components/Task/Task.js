"use client";

import styles from "./Task.module.css";
import React, { useState } from 'react';

export default function Task({ title, description, isdone }){
    const [done, setDone] = useState(isdone);

    const handleCheckboxChange = (event) => {
      setDone(event.target.checked);
    };

    return(
        <div className={styles.taskContainer}>
            <input 
            className={styles.check}
            type="checkbox" 
            checked={done} 
            onChange={handleCheckboxChange} 
            />
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}