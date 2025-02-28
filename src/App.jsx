import React, { useState } from 'react';
import useUsers from './hooks/useUser';
import UserTable from './components/UserTable';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserClick = (user) => {
    console.log("Usuario Seleccionado: ", user);
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row mb-4 align-items-center">
        <div className="col-12 col-md-8">
          <h1 className="text-left">Gestión de Usuarios</h1>
        </div>
        <div className="col-12 col-md-4">
          <input
            type="text"
            placeholder="Buscar Usuario por nombre"
            className="form-control shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}

      {error && (
        <p className="text-center text-danger mt-3">
          <strong>Error: {error}</strong>
        </p>
      )}

      {!loading && !error && <UserTable users={filteredUsers} onUserClick={handleUserClick} />}

      <Modal show={showModal} handleClose={handleClose} user={selectedUser} />
    </div>
  );
};

export default App;
