"use client";

import TaskList from "@/components/TaskList/TaskList";
import NewTask from "@/components/NewTask/NewTask";
import styles from "./page.module.css";
import React, { useState } from 'react';

const tasks = [

];

export default function Home() {
  
  const [data, setData] = useState(tasks);

  const childToParent = (childData) => {
    //console.log(childData);
    setData([...data, childData]);
    console.log(data)
  }

  return (
    <main className={styles.main}>

      <h1>My Task List</h1>
      <NewTask childToParent={childToParent}/>
      <TaskList tasks={data} />

    </main>
  );
}
