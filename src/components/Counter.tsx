import { useState, useEffect } from 'react';

interface CounterProps {
  target: number;
}

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalDuration = 5000;
    const incrementTime = (totalDuration / target);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <div className="counter">{count}%</div>;
};

export default Counter;

