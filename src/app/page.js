"use client";

import TaskList from "@/components/TaskList/TaskList";
import NewTask from "@/components/NewTask/NewTask";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import api from "@/services/api"

const tasks = [

];

export default function Home() {
  
  const [data, setData] = useState(tasks);
  
  const childToParent = (childData) => {
    //console.log(childData);
    setData([...data, childData]);
    console.log(data)
  }
  
  useEffect(() => {
    api
      .get("/tasks")
      .then((response) => {     
        setData(response.data)
      })
      .catch((err) => {
        console.error("ops! there was an error conuming the data from API: " + err);
      });
  }, []);

  return (
    <main className={styles.main}>

      <h1>My Task List</h1>
      <NewTask childToParent={childToParent}/>
      <TaskList tasks={data} />

    </main>
  );
}
