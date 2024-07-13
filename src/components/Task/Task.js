"use client";

import styles from "./Task.module.css";
import React, { useState } from 'react';

export default function Task({ title, description, isdone }) {
    const [done, setDone] = useState(isdone);
    const [style, setStyle] = useState(isdone ? "line-through" : "none");

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setDone(checked);
        changeStyle(checked);
    };

    const changeStyle = (checked) => {
        if (checked) {
            setStyle("line-through");
        } else {
            setStyle("none");
        }
    };

    return (
        <div className={styles.taskContainer}>
            <input 
                className={styles.check}
                type="checkbox" 
                checked={done} 
                onChange={handleCheckboxChange} 
            />
            <div className={styles.textContainer}>
                <h3 className={styles.title} style={{ textDecoration: style }}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
