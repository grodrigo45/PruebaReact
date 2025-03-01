import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalUser = ({ show, handleClose, user }) => {
  if (!user) return null;

  return (
    <Modal
      className="modal-dialog-centered rounded-4 shadow-lg" // Mejora de diseño: bordes redondeados y sombra
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton={false} className="border-0">
        <Modal.Title className="text-center text-primary font-weight-bold">
          Datos de {user.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <div className="mb-3">
          <p className="mb-1"><strong>Nombre:</strong> <span className="text-muted">{user.name}</span></p>
          <p className="mb-1"><strong>Correo:</strong> <span className="text-muted">{user.email}</span></p>
          <p className="mb-1"><strong>Teléfono:</strong> <span className="text-muted">{user.phone}</span></p>
          <p className="mb-1"><strong>Compañía:</strong> <span className="text-muted">{user.company.name}</span></p>
          <p className="mb-1"><strong>Dirección:</strong> <span className="text-muted">{user.address.street}, {user.address.city}</span></p>
          <p className="mb-1"><strong>Sitio web:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-primary">{user.website}</a></p>
        </div>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={handleClose} className="shadow-sm">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUser;

