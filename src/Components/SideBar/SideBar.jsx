import React from 'react';
import './SideBar.css';
const SideBar = (props) => {
    // console.log("from:",props.time);
    const { time } = props;
    console.log(time);
    let totalTime = 0;
    for (const t of time) {
        totalTime += t;
        console.log(totalTime);
    }
    return (
        <div>
            <h3>Exercise Details:</h3>
            <p>Exercise Time: {totalTime} Seconds</p>

        </div>
    );
};

export default SideBar;