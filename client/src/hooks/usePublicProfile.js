import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const usePublicProfile = () => {
  let { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserData = async (username) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/api/user/${username}`);

        if (response.data) {
          setProfile(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        setError("Unable to fetch user data.");
        setIsLoading(false);
      }
    };

    fetchUserData(username);
  }, [username]);

  return { profile, isLoading, error };
};
