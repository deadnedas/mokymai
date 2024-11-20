import TaskList from "./TaskList";
import { useState } from "react";
export default function TaskTracker() {
  // functions to add/complete
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  //   prompt
  const enterTask = (index) => {
    return prompt("Please enter desired task");
  };

  const [trackerStart, setTrackerStart] = useState(false);
  const startTracker = () => {
    setTrackerStart(!trackerStart);
  };

  return (
    <ul>
      <div>{!trackerStart && <p>No task yet</p>}</div>
      <button
        onClick={() => {
          addTask(enterTask());
          startTracker();
        }}
      >
        Add Task
      </button>

      {tasks.map((task, index) => (
        <li key={index}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}

            <button
              onClick={() => {
                toggleComplete(index);
              }}
            >
              {task.completed ? "Undo" : "Done"}
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
