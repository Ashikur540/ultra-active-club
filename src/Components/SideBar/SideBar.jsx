
import React, { useState } from 'react';
// toast
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loc from '../../Img/locIcon.png';
import profile from '../../Img/profile.png';
import './SideBar.css';



const SideBar = (props) => {
    let [breakTime, setBreak] = useState(0);
    

const addtimeLS= (e)=>{
    setBreak(e);
    localStorage.setItem ("break-time",e )
    
}

// function to show toast

const showToast =()=>{
    toast('✌ Congratulations..  you have done your todays exercises');

    
}


// get breaktime from local storage
 breakTime=localStorage.getItem('break-time');

if(!breakTime){
    breakTime=0;
}
console.log(breakTime);


  

    // array of buttons 
    const btimes = [30, 60, 120, 140];


    // console.log("from:",props.time);
    const { time } = props;
    // console.log(time);
    let totalTime = 0;
    for (const t of time) {
        totalTime += t;
        console.log("total:", totalTime);
    }
    return (
        <div>

            <div className="profile">
                <img src={profile} alt="" />
                <div className="names">
                    <h4>Ashikur Rahman</h4>
                    <small><img src={loc} alt="" /> Ashulia,Savar,Dhaka</small>
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
                    {/* <button onClick={()=>setBreak(30)} className='b-time'>30s</button> */}
                </div>
                <div className="circle">
                    {/* <button onClick={()=>setBreak(60)} className='b-time'>60s</button> */}
                </div>
                <div className="circle">
                    {/* <button onClick={()=>setBreak()} className='b-time'>120s</button> */}
                </div>
                <div className="circle">
                    {/* <button onClick={()=>setBreak()} className='b-time'>140s</button> */}
                </div>


                {/* {
                    breakTime
                } */}
{/* loaded the break time data dynamically  */}
                {
                    btimes.map((bt,index) =>

                        <div className="circle" key = {index}>
                            <button  onClick={() => addtimeLS(bt)} className='b-time' >{bt}</button>
                        </div>)
                }
            </div>



            {/* ----- */}
            <h3>Exercise Details:</h3>
            <p className="label">Exercise Time: {totalTime} Seconds</p>
            
            <p className="label">Break Time: {breakTime} Seconds</p>

            {/* last */}
            <button className="completebtn"  onClick={showToast}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default SideBar;