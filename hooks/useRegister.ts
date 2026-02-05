import { useState } from "react";
import api from "../lib/axios";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/users/register", data);
      localStorage.setItem("auth_token", response.data.token);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
