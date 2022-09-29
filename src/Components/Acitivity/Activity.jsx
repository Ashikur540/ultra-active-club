import React from 'react';
import './Activity.css';
const Activity = (props) => {
    // console.log(props)
    const {handleAdd_TimetoList,activityData}=props;
    // console.log(handleAddtoList);
    // console.log(props.activitityData);
    const {id,picture,name,time,age,about}=props.activityData;
    // console.log(name);
    
    return (
        <div className="activity-card">
            <img src={picture} alt="" />
            <div className="card-desc">
            <h3>{name}</h3>
            <small>{about}</small>
            <p>Age: {age}</p>
            <p>Time: {time} Sec</p>
            </div>
            <button  onClick={()=>handleAdd_TimetoList(activityData.time)} className="addAcBtn">Add to list</button>
        </div>
    );
};

export default Activity;