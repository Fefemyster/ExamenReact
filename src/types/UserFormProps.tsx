import {
  type ChangeEvent,
  type FormEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { FormData } from "../types/FormData";
import type { Empleado } from "../types/User";

export interface UserFormProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  userToEdit: Empleado | null;
  setUserToEdit: Dispatch<SetStateAction<Empleado | null>>;
  loading: boolean;
}
