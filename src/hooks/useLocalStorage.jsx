// react
import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      // look at localStorage value
      const localValue = window.localStorage.getItem(key);

      // if there's then parse if not return intialValue
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    // set the key and initialValue if theres is value to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
