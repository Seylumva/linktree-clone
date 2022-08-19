import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/user/login", { email, password });

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "LOGIN", payload: { ...response.data } });
        setIsLoading(false);
      }
    } catch (error) {
      setError("Unable to login at this moment.");
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
