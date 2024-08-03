import React, { useEffect, useState } from "react";
import { formatDate12HourTimezone } from "../utils/functions";

const AddTask = ({ setTasklist, tasklist, updateTask, setUpdateTask }) => {
  const [inputTask, setInputTask] = useState("");

  console.log(inputTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!updateTask) {
      const newTask = {
        id: Math.floor(Math.random() * 1000000),
        name: inputTask,
        time: formatDate12HourTimezone(),
      };

      if (inputTask) {
        const newTasks = [...tasklist, newTask];
        setTasklist(newTasks);

        const storedTasksInJSON = JSON.stringify(newTasks);
        localStorage.setItem("tasks", storedTasksInJSON); // saving in local storage

        setInputTask("");
      }
    } else {
      const updatedTasks = tasklist.map((task) =>
        task.id === updateTask.id
          ? { ...task, name: inputTask, time: formatDate12HourTimezone() }
          : task
      );

      const updatedTasksInJSON = JSON.stringify(updatedTasks);
      localStorage.setItem("tasks", updatedTasksInJSON);

      setTasklist(updatedTasks);
      setUpdateTask(null); // clearing the task to be updated // switch back to Add from Update
      setInputTask("");
    }
  };

  useEffect(() => {
    setInputTask(updateTask?.name);
  }, [updateTask]);

  return (
    <section className="addTask flex justify-center my-10 ">
      <form
        style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2)" }}
        className="w-[450px] flex justify-between gap-3 p-5 rounded-sm bg-white"
        onSubmit={handleSubmit}
      >
        <input
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          type="text"
          placeholder="Add Task"
          maxLength={25}
          name="task"
          autoComplete="off"
          className="flex-grow p-2 border border-slate-200 rounded-sm focus:outline-none"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-7 rounded-md active:bg-green-600"
        >
          <span className="text-lg">{updateTask ? "Update" : "Add"}</span>
        </button>
      </form>
    </section>
  );
};

export default AddTask;
