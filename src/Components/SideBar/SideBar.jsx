import React from 'react';
import loc from '../../Img/locIcon.png';
import profile from '../../Img/profile.png';
import './SideBar.css';
const SideBar = (props) => {
    // console.log("from:",props.time);
    const { time } = props;
    // console.log(time);
    let totalTime = 0;
    for (const t of time) {
        totalTime += t;
        console.log("total:",totalTime);
    }
    return (
        <div>

            <div className="profile">
                <img src={profile} alt="" srcset="" />
                <div className="names">
                    <h4>Ashikur Rahman</h4>
                    <small><img src={loc} alt="" srcset="" /> Ashulia,Savar,Dhaka</small>
                </div>
            </div>
            <h3>Exercise Details:</h3>
            <p>Exercise Time: {totalTime} Seconds</p>

        </div>
    );
};

export default SideBar;