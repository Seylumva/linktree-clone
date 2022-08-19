import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useUpdateProfile = () => {
  const { user, dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateInfo = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `/api/user/${user._id}`,
        {
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.data) {
        dispatch({ type: "FETCH_DATA", payload: response.data });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Unable to update your data.");
    }
  };

  return { updateInfo, isLoading, error };
};
