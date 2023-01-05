import { useEffect, useState } from 'react';

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(currentValue => currentValue + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <span className="bg-blue-200 p-2 font-semibold">{value}</span>;
}
