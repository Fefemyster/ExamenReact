import type { Empleado } from "./User";

export interface UserListProps {
  users: Empleado[];
  loading: boolean;
}
