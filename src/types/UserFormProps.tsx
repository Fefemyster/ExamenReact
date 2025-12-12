import {
  type ChangeEvent,
  type FormEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { FormData } from "../types/FormData";

export interface UserFormProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  userToEdit: any;
  setUserToEdit: Dispatch<SetStateAction<any>>;
  loading: boolean;
}
