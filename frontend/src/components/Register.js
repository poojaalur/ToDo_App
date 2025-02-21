import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/register", {
                name,
                email,
                password,
            });

            if (response.data) {
                console.log("Registration Successful:", response.data);
                alert("Registration successfull");
                navigate("/login");
            } else {
                console.error(" Unexpected Response Format", response);
                alert("Unexpected error. Please try again.");
            }
        } catch (error) {
            console.error(
                "Registration Failed:", error.response.data || error.message,);
            alert(
                error.response.data.message || "Registration failed. Please try again.",

            );
        }
    };

    return (
        <div>
            <h2> Register </h2> {" "}
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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

                <button type="submit"> Register </button>{" "}

            </form>{" "}

        </div>

    );

}
export default Register;