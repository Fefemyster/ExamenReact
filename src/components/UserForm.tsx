import Swal from "sweetalert2";
import type { UserFormProps } from "../types/UserFormProps";

const UserForm = ({
  formData,
  setFormData,
  handleInputChange,
  handleSubmit,
  userToEdit,
  setUserToEdit,
  loading,
}: UserFormProps) => {
  const validateForm = (): boolean => {
    let errorMessage = "";

    // Validar nombre
    if (!formData.nombre || formData.nombre.trim() === "") {
      errorMessage += "El nombre es requerido\n";
    } else if (formData.nombre.trim().length < 3) {
      errorMessage += "El nombre debe tener al menos 3 caracteres\n";
    }

    // Validar DNI
    if (!formData.dni || formData.dni.trim() === "") {
      errorMessage += "El DNI es requerido\n";
    } else if (!/^\d{8}[A-Z]?$/.test(formData.dni)) {
      errorMessage += "El DNI debe tener 8 dígitos y opcionalmente una letra\n";
    }

    // Validar direccion
    if (!formData.direccion || formData.direccion.trim() === "") {
      errorMessage += "La dirección es requerida\n";
    } else if (formData.direccion.trim().length < 5) {
      errorMessage += "La dirección debe tener al menos 5 caracteres\n";
    }

    // Validar email
    if (!formData.email || formData.email.trim() === "") {
      errorMessage += "El email es requerido\n";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errorMessage += "El email no tiene un formato válido\n";
    }

    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Errores en la validación",
        text: errorMessage.trim(),
        confirmButtonText: "Aceptar",
      });
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        {userToEdit ? "Editar Usuario" : "Añadir Nuevo Usuario"}
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">DNI</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!!userToEdit}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Direccion
          </label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion || ""}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Cargando..." : userToEdit ? "Actualizar" : "Guardar"}
          </button>
          {userToEdit && (
            <button
              type="button"
              onClick={() => {
                setUserToEdit(null);
                setFormData({
                  nombre: "",
                  email: "",
                  direccion: "",
                  dni: "",
                });
              }}
              className="w-full md:w-auto ml-4 px-6 py-3 bg-gray-400 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-500 transition-colors duration-300"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
