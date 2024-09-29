import { useState, useEffect } from "react";

function useLocalStorage(key: string) {
  const isClient = typeof window !== "undefined";

  const [storedValue, setStoredValue] = useState(() => {
    if (!isClient) return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  useEffect(() => {
    if (!isClient) return;

    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : null);
      } catch (error) {
        console.error(error);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("localStorageChange", handleStorageChange); // Listen for custom event
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localStorageChange", handleStorageChange); // Clean up custom event listener
    };
  }, [key, isClient]);

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      window.dispatchEvent(new Event("localStorageChange")); // Dispatch custom event
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;