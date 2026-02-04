import { Navigate } from "react-router-dom";
import { type ReactElement } from "react";
import { useAuth } from "./auth/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: ReactElement;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="spinner">
        <p>Loading...</p>;
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
