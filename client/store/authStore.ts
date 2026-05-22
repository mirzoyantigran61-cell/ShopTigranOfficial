import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

interface AuthState {
  user: any | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  updateProfile: (data: any) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      login: async (email, password) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          email,
          password,
        });
        
        const { token, user } = response.data;
        set({ user, token });
        
        // Set default axios header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Store token in localStorage
        localStorage.setItem('token', token);
      },

      register: async (userData) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, userData);
        const { token, user } = response.data;
        set({ user, token });
        localStorage.setItem('token', token);
      },

      logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
      },

      updateProfile: async (data) => {
        const { token } = get();
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
          data,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        set({ user: response.data });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
