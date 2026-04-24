import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'admin' | 'member' | 'pending';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for mock session on mount
    const storedUser = localStorage.getItem('kbn_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let mockUser: User = {
      id: 'mock-user-1',
      name: 'Test Member',
      email: email,
      role: 'member'
    };

    if (email === 'admin@kbn.org') {
      mockUser = { ...mockUser, role: 'admin', name: 'Admin KBN' };
    }

    setUser(mockUser);
    localStorage.setItem('kbn_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kbn_user');
  };

  const signup = async (data: any) => {
    // Mock signup flow - sets as pending
    await new Promise(resolve => setTimeout(resolve, 1000));
    const pendingUser: User = {
      id: `new-${Date.now()}`,
      name: data.name,
      email: data.email,
      role: 'pending'
    };
    setUser(pendingUser);
    localStorage.setItem('kbn_user', JSON.stringify(pendingUser));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
