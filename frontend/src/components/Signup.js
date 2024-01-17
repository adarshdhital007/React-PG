import React from "react";
import { Link } from "react-router-dom";

const Signup = ({ formType, handleAuth }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = async () => {
    // Check if username and password are not empty
    if (!username || !password) {
      alert("Can't continue with empty fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">
          {formType === "login" ? "Login" : "Signup"}
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor={`${formType}-username`}
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              id={`${formType}-username`}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor={`${formType}-password`}
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              id={`${formType}-password`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={handleSignup}
            className={`w-full ${
              formType === "login" ? "bg-blue-500" : "bg-green-500"
            } text-white p-2 rounded-md hover:${
              formType === "login" ? "bg-blue-600" : "bg-green-600"
            } focus:outline-none focus:shadow-outline-blue`}
          >
            {formType === "login" ? "Login" : "Signup"}
          </button>

          <Link
            to={formType === "login" ? "/signup" : "/login"}
            className="block text-center mt-4 text-blue-500"
          >
            {formType === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
