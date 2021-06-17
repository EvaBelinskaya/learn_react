import React, {useState, useEffect} from 'react';


function StopWatch(props) {
    const [time, setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);

    useEffect(()=>{
        if(isRunning) {
            const intervalId = setInterval(() => {
                setTime(prevValue => prevValue + 1);
            }, 1000);
            return () => {
                clearInterval(intervalId);
            };
        }
    },[isRunning]);


    return (
        <article>
            <h1>{time}</h1>
            <button onClick={() => void setIsRunning(!isRunning)}>
                {isRunning?'stop':'start'}</button>
            <button
            onClick={() => {
                setTime(0);
            }}
            >reset</button>
        </article>
    );
}



export default StopWatch;