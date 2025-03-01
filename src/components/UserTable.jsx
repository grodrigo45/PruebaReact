import react from "react";

const UserTable = ({ users, onUserClick }) => {
    return (
        <div className="container mt-4">
            <div className="table-responsive">
                <table className="table table-hover table-striped table-bordered shadow-sm">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Correo Electrónico</th>
                            <th>Compañía</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                onClick={() => onUserClick(user)}
                                style={{ cursor: "pointer" }}
                                className="align-middle"
                            >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.company?.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="table-footer text-muted text-center mt-2">
                        Mostrando {users.length} registros
                </div>
            </div>
        </div>
    );
};

export default UserTable;
