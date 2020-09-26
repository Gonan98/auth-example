import React, { useState } from "react";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const { token } = await res.json();
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="mx-auto mt-5 w-25">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Inicio de Sesion</h2>
          <form onSubmit={signIn}>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
