import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/user/register", {
        username,
        email,
        password,
      });

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "LOGIN", payload: { ...response.data } });
        setIsLoading(false);
      }
    } catch (error) {
      setError("Unable to register at this time.");
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
