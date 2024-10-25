import React, { useEffect } from 'react';

const Countdown = ({ endDate }) => {
    useEffect(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        const countDown = endDate.getTime(); // Use the passed endDate prop
        const x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

            // If the countdown is finished, clear the interval
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerText = 0;
                document.getElementById("hours").innerText = 0;
                document.getElementById("minutes").innerText = 0;
                document.getElementById("seconds").innerText = 0;
            }
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(x);
    }, [endDate]); // Depend on endDate to recalculate if it changes

    return (
        <div className='countdown-main'>
            <ul>
                <li>
                    <div className='coundown-box'>
                        <span id="days"></span> days
                    </div>
                </li>
                <li>
                    <div className='coundown-box'><span id="hours"></span> Hours </div></li>
                <li>
                    <div className='coundown-box'> <span id="minutes"></span> Minutes</div>
                </li>
                <li>
                    <div className='coundown-box'> <span id="seconds"></span> Seconds</div>
                </li>
            </ul>
        </div>
    );
};

export default Countdown;
