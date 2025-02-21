import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // For navigation
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            if (response.data) {
                console.log(" Login Successful:", response.data);
                alert(" Login successtul!");

                //save user data in local storage
                localStorage.setItem("user", JSON.stringify(response.data.user));

                // Navigate to TaskLists page
                navigate("/tasks");
            } else {
                console.error(" Unexpected Response Format", response);
                alert("Unexpected error. Please try again.");
            }
        } catch (error) {
            console.error(" Login Failed:", error.response?.data || error.message); 
            alert(error.response.data.message || "Login failed. Please try again");
        }
    };

    return (
        <div>
            <h2> Login </h2>{" "}
            <form onSubmit={handleLogin} >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"

                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit"> Login </button>{" "}

            </form>{" "}
        </div>
    );
};
 export default Login;