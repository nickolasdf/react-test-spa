import React from 'react';
import useTimer from '../../../../hooks/useTimer';

const Timer = () => {
    const time = useTimer(250);

    return (
        <div className="timer">
            <span>Time - </span>
            <span>{time.getHours()}</span>:
            <span>{time.getMinutes()}</span>:
            <span>{time.getSeconds()}</span>
        </div>
    );
};

export default Timer;
