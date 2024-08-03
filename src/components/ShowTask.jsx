import React from "react";
import DeleteIcon from "../svg/deleteIcon";
import EditIcon from "../svg/editIcon";

const ShowTask = ({ tasklist, setTasklist, updateTask, setUpdateTask }) => {
  const handleClearTask = () => {
    setTasklist([]); // UI update

    localStorage.removeItem("tasks");
  };

  const handleDelete = (id) => {
    const remainingTasks = tasklist.filter((task) => task.id !== id);

    const remainingTasksInJSON = JSON.stringify(remainingTasks);
    localStorage.setItem("tasks", remainingTasksInJSON);

    setTasklist(remainingTasks); // UI update
  };

  const handleEdit = (id) => {
    const taskToUpdate = tasklist.find((task) => task.id === id);

    setUpdateTask(taskToUpdate);
  };

  return (
    <section
      className="showTask p-5 rounded-lg bg-white"
      style={{ boxShadow: "0 0 3px 0 rgba(0,0,0,0.3)" }}
    >
      <div className="head flex items-center justify-between pb-5 border-b-2  border-slate-200 mb-5">
        <div className="flex items-center gap-3">
          <span className="title font-Roboto font-semibold">Todo</span>
          <span className="count bg-slate-300 h-6 w-5 rounded-full flex items-center justify-center">
            {tasklist.length}
          </span>
        </div>

        <button
          onClick={handleClearTask}
          className="clearAll bg-blue-600 px-4 py-2 text-white rounded-md active:bg-blue-800"
        >
          Clear All
        </button>
      </div>

      <ul className="grid grid-cols-3 gap-7">
        {tasklist.map((task) => (
          <li
            key={task.id}
            className="flex items-start justify-between p-4 rounded-md border-s-blue-500 border-s-4 border border-slate-300"
          >
            <p className="flex flex-col">
              <span className="name font-bold text-lg">{task.name}</span>
              <span className="time text-sm text-gray-400 font-semibold">
                {task.time}
              </span>
            </p>

            <div className="icons flex items-center gap-1">
              <span className="edit" onClick={() => handleEdit(task.id)}>
                <EditIcon />
              </span>

              <span className="delete" onClick={() => handleDelete(task.id)}>
                <DeleteIcon />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
