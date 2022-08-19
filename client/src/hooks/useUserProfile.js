import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useUserProfile = () => {
  const { user, dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [socialFormData, setSocialFormData] = useState({
    facebook: "",
    instagram: "",
    tiktok: "",
    patreon: "",
    youtube: "",
    snapchat: "",
    about: "",
    website: "",
  });

  useEffect(() => {
    const fetchUserData = async (username) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/api/user/${username}`);

        if (response.data) {
          dispatch({ type: "FETCH_DATA", payload: response.data });
          setIsLoading(false);
          setSocialFormData({
            ...response.data.socials,
            about: response.data.about,
            website: response.data.website,
          });
        }
      } catch (error) {
        setError("Unable to fetch user data.");
        setIsLoading(false);
      }
    };

    fetchUserData(user.username);
  }, [dispatch, user.username]);

  return { socialFormData, setSocialFormData, user, isLoading, error };
};
