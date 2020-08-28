import { useEffect, useState } from 'react';

let timerId = null;

const useTimer = (delay = 1000) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        timerId = setInterval(() => {
            setTime(new Date());
        }, delay);

        return () => {
            clearInterval(timerId);
        };
    }, [delay]);

    return time;
};

export default useTimer;
