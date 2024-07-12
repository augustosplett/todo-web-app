"use client";

import TaskList from "@/components/TaskList/TaskList";
import styles from "./page.module.css";
import React, { useState } from 'react';

const tasks = [
  { title: 'Task 1aa é uma task muito importante para esse contexto saber o tamanho máximo de um titlu', description: 'Description 1', isdone: false },
  { title: 'Task 2', description: 'Description 2', isdone: true },
];

export default function Home() {
  return (
    <main className={styles.main}>

      <h1>My Task List</h1>
      <TaskList tasks={tasks} />

    </main>
  );
}
