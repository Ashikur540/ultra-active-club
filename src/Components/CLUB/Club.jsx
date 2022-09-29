
import React, { useEffect, useState } from 'react';
import Activity from '../Acitivity/Activity';
import "./Club.css";
const Club = () => {
const [activities, setActivities] = useState([])

useEffect(()=>{
fetch('clubData.json').then(res=>res.json()).then(data=> setActivities(data))
},[]);

const handleAddtoList= (activity)=>{
    console.log(activity);
}

  return (
    <div>
      <h2>   &nbsp;  Select your today's exercise!</h2>
      <div className="club-container">
        <div className="exercises-container">
           {
               activities.map(activity=> <Activity
               key={activity.id}
               activityData={activity}
               handleAddtoList={handleAddtoList}
               ></Activity>)
           }
        </div>
        <div className="sidebar-container">This is sidebar</div>
      </div>
    </div>
  );
};

export default Club;
