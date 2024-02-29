import axios from "axios";
import { useState } from "react";
import { api } from "../api/Axios";
import { Credential } from "../interfaces/Credential";
import { authenticateUser } from "../services/LoginService";
import { useToast } from "@/components/ui/use-toast";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleLogin = async (credentials: Credential) => {
    try {
      setIsLoading(true);
      await authenticateUser(credentials);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        toast({
          variant: "destructive",
          title: "Erro ao logar",
          description: e.response?.data,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading };
};
