//import useUser from "../hooks/useUser";
import UserForm from "./UserForm";
import UserList from "./userList";
import useUser from "../hooks/useEmpleados";

const GestorEmpleados = () => {
  const {
    empleados,
    userToEdit,
    setUserToEdit,
    loading,
    formData,
    setFormData,
    handleInputChange,
    hanldleSubmit,
  } = useUser();
  return (
    <div className="container mx-auto max-w-7xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10 tracking-tight">
        Gestión de Empleados
      </h1>

      <UserForm
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        handleSubmit={hanldleSubmit}
        userToEdit={userToEdit}
        setUserToEdit={setUserToEdit}
        loading={loading}
      />

      <UserList users={empleados} loading={loading} />
    </div>
  );
};

export default GestorEmpleados;
