import { Navigate } from "react-router-dom";
import { type ReactElement } from "react";
import { useAuth } from "./auth/AuthContext";

export default function RoleRoute({
  children,
  role,
}: {
  children: ReactElement;
  role: "admin" | "user";
}) {
  const { user } = useAuth();

  if (!user || user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}
