import { ReactNode } from "react";
import { Redirect } from "wouter";
import { isLoggedIn } from "../utils/auth";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
}