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
{/* ----- */}
            <div className="status">
                <div className="box">
                    <h2>74<span className="kg">Kg</span></h2>
                    <p>Weight</p>
                </div>
                <div className="box">
                    <h2>5.11<span className="kg">inch</span></h2>
                    <p>height</p>
                </div>
                <div className="box">
                    <h2>22<span className="kg">yrs</span></h2>
                    <p>Age</p>
                </div>
            </div>

            {/* ----- */}
            <h3>Add a break</h3>
            <div className="break-box">
                <div className="circle">
                    <p className='b-time'>30s</p>
                </div>
                <div className="circle">
                    <p className='b-time'>60s</p>
                </div>
                <div className="circle">
                    <p className='b-time'>120s</p>
                </div>
                <div className="circle">
                    <p className='b-time'>140s</p>
                </div>
            </div>

{/* ----- */}
            <h3>Exercise Details:</h3>
            <p>Exercise Time: {totalTime} Seconds</p>

        </div>
    );
};

export default SideBar;