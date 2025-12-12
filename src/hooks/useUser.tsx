import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import type { FormData } from "../types/FormData";
import type { UserApi } from "../types/UserApi";

export const useUser = () => {
  const [users, setUsers] = useState<UserApi[]>([]);
  const [userToEdit, setUserToEdit] = useState<UserApi | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const API_URL =
    "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado ";

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<UserApi[]>(API_URL);
      setUsers(response.data);
    } catch (err) {
      errorAlert(
        "No se pudo cargar los usuarios. Por favor, intente de nuevo más tarde."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const successAlert = (mensaje: string) => {
    Swal.fire({
      title: mensaje,
      icon: "success",
    });
  };

  const errorAlert = (mensaje: string) => {
    Swal.fire({
      title: mensaje,
      icon: "error",
    });
  };

  useEffect(() => {
    fetchUsers();
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hanldleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (userToEdit) {
        await axios.put(`${API_URL}/${userToEdit.id}`, {
          nombre: formData.nombre,
          dni: formData.dni,
          direccion: formData.direccion,
          email: formData.email,
        });
        successAlert("Usuario actualizado correctamemnte.");
      } else {
        await axios.post(API_URL, {
          ...formData,
          role: "customer",
        });
        successAlert("Usuario creado correctamente.");
      }

      setFormData({
        nombre: "",
        dni: "",
        direccion: "",
        email: "",
      });
      setUserToEdit(null);
      await fetchUsers();
    } catch (error) {
      errorAlert("Error al guardar el usuario. Verifique los datos.");
      console.error(error);
    }
  };

  return {
    users,
    userToEdit,
    setUserToEdit,
    loading,
    formData,
    setFormData,
    handleInputChange,
    hanldleSubmit,
  };
};

export default useUser;
