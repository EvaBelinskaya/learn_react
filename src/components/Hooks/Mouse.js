import React, { useState, useEffect } from 'react';

export const Mouse =() => {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
        });
    const [clickCount, setClickCount] = useState(0);

    const handleMouseMove = ({ clientX, clientY }) => {
      setMouse({
          x: clientX,
          y: clientY,
      });
    };

    const handleClick = () => {
        setClickCount(prevValue => prevValue + 1);
    };

    useEffect(  function () {
        document.body.addEventListener('mousemove',handleMouseMove);
        document.body.addEventListener('click',handleClick);

        return () => {
            document.body.removeEventListener('mousemove',handleMouseMove);
            document.body.removeEventListener('click',handleClick);
        };
        },[]);


    return (
        <div
        onClick={() => {
        setClickCount(clickCount + 1);
        }}
        onMouseMove={({ clientX, clientY}) => {
        setMouse({
        x: clientX,
        y: clientY,
        });
        }}
        >
            <h1>X: {mouse.x}</h1>
            <h1>Y: {mouse.y}</h1>
            <h1>click count: {clickCount}</h1>
        </div>
    );

}

