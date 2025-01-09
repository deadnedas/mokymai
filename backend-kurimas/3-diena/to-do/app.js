const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// load env variables
dotenv.config();
const port = process.env.PORT;
const dir = path.join(__dirname, "/data/tasks.json");

// create server
const app = express();

//converts json data into a js obj and puts it into req.body
app.use(express.json());

const tasks = JSON.parse(fs.readFileSync(dir));
console.log(tasks);

// Retrieve all tasks
app.get(`/todos`, (req, res) => {
  res.status(200).json({
    status: `success`,
    data: tasks,
  });
});

// Add task
app.post(`/todos`, (req, res) => {
  const newID = tasks[tasks.length - 1].id + 1;
  console.log(req.body);
  const newTask = {
    id: newID,
    ...req.body,
  };
  tasks.push(newTask);

  fs.writeFile(dir, JSON.stringify(tasks), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Error writing file",
      });
    }

    res.status(201).json({
      status: "Success",
      data: newTask,
    });
  });
});

// Update task
app.put(`/todos/:id`, (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Task not found",
    });
  }

  const updatedTask = {
    ...tasks[taskIndex],
    ...req.body,
  };

  tasks[taskIndex] = updatedTask;

  fs.writeFile(dir, JSON.stringify(tasks), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Error writing file",
      });
    }

    res.status(200).json({
      status: "Success",
      data: updatedTask,
    });
  });
});

// Delete Task
app.delete(`/todos/:id`, (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const filteredTasks = tasks.filter((task) => task.id != taskId);
  console.log(filteredTasks);

  fs.writeFile(dir, JSON.stringify(filteredTasks), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Error writing file",
      });
    }

    res.status(204).json({
      status: "Success",
      message: "Task deleted",
      data: filteredTasks,
    });
  });
});

// run server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
