"use client";

import styles from "./NewTask.module.css";
import React, { useState } from 'react';
import api from "@/services/api"

export default function NewTask({childToParent}){

    const handleSubmit = (event) => {
        event.preventDefault(); 
        //send the new information back to parent
        const myData = { "title": event.target.title.value, "description": event.target.description.value, "isdone": false};
        var task;
        api
            .post('/tasks', myData)
            .then( response => childToParent(response.data))
            .catch((err) => {
            console.error("ops! there was an error conuming the data from API: " + err);
            });
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