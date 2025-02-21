import { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // ✅ Fetch tasks when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        console.log("Fetched Tasks:", response.data);
        setTasks(response.data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // ✅ Function to add a task
  const handleAddTask = async () => {
    if (!newTask.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    try {
      console.log("Adding Task:", newTask); // Debugging log

      const response = await axios.post("http://localhost:5000/api/tasks", {
        title: newTask,
        description: "No description provided", // ✅ Add default description
      });

      console.log("Task Added Successfully:", response.data); // Debugging log

      setTasks([...tasks, response.data]); // ✅ Update UI with new task
      setNewTask(""); // ✅ Clear input field
    } catch (error) {
      console.error("Error adding task:", error.response.data || error.message);
      alert(error.response.data.message || "Error adding task.");
    }
  };

  return (
    <div>
      <h2> Task List </h2>
      {/* ✅ Task input and add button */}{" "}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}> Add Task </button>
      {/* ✅ Task List Display */}{" "}
      <ul>
        {" "}
        {tasks.length > 0 ? (
          tasks.map((task) => <li key={task._id}> {task.title} </li>)
        ) : (
          <p> No tasks yet.Add one! </p>
        )}{" "}
      </ul>{" "}
    </div>
  );
};

export default TaskList;