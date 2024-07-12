"use client";

import Task from "@/components/task/task";
import styles from "./page.module.css";
import React, { useState } from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Teste Mesmo</h1>
        <Task 
          isdone={true}
          title={"test"}
          description={"ai ai ai"}
        />
    </main>
  );
}
