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
  const [recordsPerPage, setRecordsPerPage] = useState(10); // 🔹 Estado para cantidad de registros a mostrar

  const handleUserClick = (user) => {
    console.log("Usuario Seleccionado: ", user);
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  // Filtrar usuarios 
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedUsers = filteredUsers.slice(0, recordsPerPage);

  return (
    <div className="container mt-4">
      <div className="row mb-3 align-items-center">
        <div className="col-md-6">
          <h1 className="text-left">Gestión de Usuarios</h1>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="form-control shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <label className="me-2">Mostrar:</label>
          <select
            className="form-select"
            value={recordsPerPage}
            onChange={(e) => setRecordsPerPage(Number(e.target.value))}
          >
            <option value="3">3 registros</option>
            <option value="5">5 registros</option>
            <option value="10">10 registros</option>
          </select>
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

      {!loading && !error && <UserTable users={displayedUsers} onUserClick={handleUserClick} />}

      <Modal show={showModal} handleClose={handleClose} user={selectedUser} />
    </div>
  );
};

export default App;
