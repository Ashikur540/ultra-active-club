
import React, { useEffect, useState } from 'react';
import Activity from '../Acitivity/Activity';
import SideBar from '../SideBar/SideBar';
import "./Club.css";
const Club = () => {

const [activities, setActivities] = useState([])
const [time, setTime]= useState([])
const [STATE , setSTATE]= useState(false);

useEffect(()=>{
fetch('clubData.json').then(res=>res.json()).then(data=> setActivities(data))
},[]);



// function to handle time addings
const handleAdd_TimetoList= (activity)=>{
    console.log('activity:',activity);
    const newTime= [...time,activity];
    setTime(newTime);
    console.log(newTime);
    

    setSTATE(true);

}

console.log("state", STATE);

  return (
    <div>
      <h2>   &nbsp;  Select your today's exercise!</h2>
      <div className="club-container">
        <div className="exercises-container">
           {
               activities.map(activity=> <Activity
               key={activity.id}
               activityData={activity}
               handleAdd_TimetoList={handleAdd_TimetoList}
               ></Activity>)
           }
        </div>
        <div className="sidebar-container">
        <SideBar time={time} ></SideBar>
        </div>
      </div>
    </div>
  );
};

export default Club;
