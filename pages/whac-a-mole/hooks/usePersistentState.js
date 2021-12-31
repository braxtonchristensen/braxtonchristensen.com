import { useState, useEffect } from "react";

const usePersistentState = (key, initialValue) => {
  const [state, setState] = useState(initialValue);
  useEffect(() => {
    setState(
      window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue
    );
  }, [initialValue, key]);
  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};

export default usePersistentState;
