import TaskForm from "../components/Taskform";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";
function Dashboard() {
const navigate = useNavigate();
const logout= () => {
localStorage.removeItem("token");
navigate("/");
};

return (
<div>
<h1> Dashboard </h1> <TaskForm fetchTasks={TaskList.fetchTasks} />{" "}
<TaskList />
<button onClick={logout}> Logout </button>{" "}
</div>
);
}

export default Dashboard;