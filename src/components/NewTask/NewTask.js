"use client";

import styles from "./NewTask.module.css";
import React, { useState } from 'react';

export default function NewTask({childToParent}){

    const handleSubmit = (event) => {
        event.preventDefault(); 
        //send the new information back to parent
        childToParent({ "title": event.target.title.value, "description": event.target.description.value, "isdone": false});
        event.target.reset(); 
    };

    const handleClick = () => {
        document.getElementById('hidden-submit-button').click();
    };

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
                <input
                    type="text"
                    max="30"
                    min="3"
                    placeholder="title"
                    name="title"
                ></input>
                <input
                    type="text"
                    max="30"
                    min="3"
                    placeholder="description"
                    name="description"
                />
            </div>
            <div className={styles.button}>
                <img
                    className={styles.icon}
                    src="/more.png"
                    alt="Submit"
                    onClick={handleClick}
                />
                <input
                    type="submit"
                    id="hidden-submit-button"
                    style={{ display: 'none' }}
                />
            </div>
        </form>
    )
}