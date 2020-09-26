import React, { useState } from "react";

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/signup',{
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify({username, email, password})
            });
            const json = await res.json();
            console.log(json);

        } catch (error) {
            console.log(error);
        }

        setUsername('');
        setEmail('');
        setPassword('');
    }

  return (
    <div className="mx-auto mt-5 w-25">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Registro de usuario</h2>
          <form onSubmit={signUp}>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            <button className="btn btn-primary" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
