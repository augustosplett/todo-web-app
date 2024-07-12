"use client";

import styles from "./task.module.css";
import React, { useState } from 'react';

export default function Task({ title, description, isdone }){
    const [done, setDone] = useState(isdone);

    const handleCheckboxChange = (event) => {
      setDone(event.target.checked);
    };

    return(
        <>
            <input 
            type="checkbox" 
            checked={done} 
            onChange={handleCheckboxChange} 
            />
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    );
}