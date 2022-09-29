
import React, { useEffect, useState } from 'react';
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
        <div className="exercises-container">This is excercises</div>
        <div className="sidebar-container">This is sidebar</div>
      </div>
    </div>
  );
};

export default Club;
