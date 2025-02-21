import { useState } from "react";
import axios from "axios";
function TaskForm({ fetchTasks, deleteTask }) {
    const [title, setTitle] = useState("");
    const addTask = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/tasks", { title }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setTitle("");
            fetchTasks();
        } catch (error) {
            console.error(error.response.data.message);
        }
    };
    return (
        <div style={{ textAlign: "left", padding: "20px" }} >
        <h1 > To-Do-List </h1>
        <input
          type="text"
          placeholder = "New Task" 
        value = {title} onChange={(e) => setTitle (e.target.value)} required />
        <button onSubmit={addTask} >Add</button>
        <ul>
          {title.map((Task) => (
            <li key={title}>
              <button onClick={() => deleteTask(title)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default TaskForm;