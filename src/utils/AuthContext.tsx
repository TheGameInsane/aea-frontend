import React, { createContext, useState, useContext } from "react";
// TypeScript: Import ReactNode as a type-only import
import type { ReactNode } from "react";

// Define the shape of the user object from the JWT
export interface User {
  name: string;
  email: string;
  picture: string;
  sub: string; // This is the unique Google ID
  given_name?: string;
  family_name?: string;
  iat?: number;
  exp?: number;
}

// Define the type for our context value
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Type the props for the provider
interface AuthProviderProps {
  children: ReactNode; // This is now correctly typed
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook with type safety
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
