import React from 'react';
import './Activity.css';
const Activity = (props) => {
    // console.log(props.activitityData);
    const {id,picture,name,time,age,about}=props.activitityData;
    // console.log(name);
    return (
        <div className="activity-card">
            <img src={picture} alt="" srcset="" />
            <h3>{name}</h3>
            <small>{about}</small>
            <p>Age:{age}</p>
            <p>Time:{time}</p>
            <button className="addAcBtn">Add to list</button>
        </div>
    );
};

export default Activity;