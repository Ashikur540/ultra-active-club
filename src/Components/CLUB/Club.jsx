
import React, { useEffect, useState } from 'react';
import Activity from '../Acitivity/Activity';
import "./Club.css";
const Club = () => {
const [activities, setActivities] = useState([])

useEffect(()=>{
fetch('clubData.json').then(res=>res.json()).then(data=> setActivities(data))
},[])

  return (
    <div>
      <h2>Select your today's exercise! from {activities.length}</h2>
      <div className="club-container">
        <div className="exercises-container">
           {
               activities.map(activitity=> <Activity
               key={activitity.id}
               activitityData={activitity}
               ></Activity>)
           }
        </div>
        <div className="sidebar-container">This is sidebar</div>
      </div>
    </div>
  );
};

export default Club;
