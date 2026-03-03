import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
    <h1>hi</h1>
    <form onSubmit={handleLogin}>
        <button type="submit">click</button>
    </form>
    </>
  )
}