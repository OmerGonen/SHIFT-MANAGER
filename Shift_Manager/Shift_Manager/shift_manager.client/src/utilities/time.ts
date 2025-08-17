import * as React from 'react';

export function getCurrentTime(setCurrentTime: React.Dispatch<React.SetStateAction<Date>>) {
    const timer = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
}