"use client";
import Task from "@/components/Task/Task";
import styles from "./TaskList.module.css";
import React, { useState } from 'react';

export default function TaskList({tasks}){
    return (
        <div className={styles.taskList}>
            {tasks.map((task, index) => (
                <Task
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    isdone={task.done}
                />
            ))}
        </div>
    );
}