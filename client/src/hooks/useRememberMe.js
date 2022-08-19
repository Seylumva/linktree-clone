import { useEffect, useState } from "react";

const useRememberMe = (setEmail) => {
  const [rememberMe, setRememberMe] = useState(false);

  const storeEmail = (emailToStore) => {
    localStorage.setItem("remember-me", emailToStore);
  };

  useEffect(() => {
    const getStoredUsername = (setEmail) => {
      const localStorageName = localStorage.getItem("remember-me");
      if (localStorageName) {
        setEmail(localStorageName);
        setRememberMe(true);
      }
    };

    getStoredUsername(setEmail);
  }, [setEmail]);

  return { rememberMe, setRememberMe, storeEmail };
};

export default useRememberMe;
