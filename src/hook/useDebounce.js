import { useEffect } from 'react';
import { useState } from 'react';

// функция, которая позволяет не отправлять запросы на каждое нажатие
// клавиши путем создания и, когда надо, обнуления setTimeout
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;