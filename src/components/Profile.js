import React from "react";

export default function Profile({user}) {
  return (
    <div className="mx-auto mt-5 w-25">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center card-title">Usuario</h2>
          <p className="card-text">Nombre de usuario: {user.username}</p>
          <p className="card-text">Correo: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
