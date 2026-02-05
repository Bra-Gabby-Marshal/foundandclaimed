import api from "../lib/axios";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    await api.post("/users/logout");
    localStorage.removeItem("auth_token");
    router.push("/login");
  };

  return { logout };
};
