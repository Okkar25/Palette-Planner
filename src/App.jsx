import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

const App = () => {
  const [tasklist, setTasklist] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const storedTasksInObj = JSON.parse(storedTasks);

    storedTasks && setTasklist(storedTasksInObj); // UI update
  }, []);

  return (
    <div className="App container mx-auto px-[260px]">
      <Header />

      <AddTask
        setTasklist={setTasklist}
        tasklist={tasklist}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}
      />

      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}
      />
    </div>
  );
};

export default App;
