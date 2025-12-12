import type { UserListProps } from "../types/UserListProps";

const UserList = ({ users, loading }: UserListProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Lista de Empleados
      </h2>
      {loading && (
        <div className="text-center text-gray-500 mb-4">
          Cargando empleados...
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {user.nombre}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{user.nombre}</p>
            <p className="text-sm text-gray-600 mb-4">{user.dni}</p>
            <p className="text-sm text-gray-600 mb-4">{user.direccion}</p>
            <p className="text-sm text-gray-600 mb-4">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
