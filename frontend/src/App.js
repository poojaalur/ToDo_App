import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
  
  import Home from "./pages/Home";
  import Dashboard from "./pages/Dashboard";
  import Login from "./components/login";
  import Register from "./components/Register";
  
  import TaskList from "./components/TaskList";
  
  const PrivateRoute= ({ children }) => {
  
  return localStorage.getItem("user") ? children: <Navigate to="/" />;
  };
  
  function App() {
  
  return (
  
  <Router>
  
  <Routes>
  
  <Route path="/" element={<Home />} />{""}
  
   <Route path="/dashboard" element={<Dashboard />} />{" "}
  
  <Route path="/register" element={<Register />} />{" "}
  <Route path="/login" element={<Login />} />{" "}
<Route
 path="/tasks"
 element={
<PrivateRoute>
{" "}

< TaskList />{""}

</PrivateRoute>
 }
 />

</Routes>{" "}

</Router>

);

}

 export default App;