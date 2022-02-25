
import { useEffect, useState } from "react";
import "./index.css"
import Weathercard from "./Weathercard";

const Temprature =()=>{
    const [searchval,setsearchval]=useState("khatima");
    const [objinfo,setobjinfo]=useState({});

    const inputfun =(e)=>{
         setsearchval(e.target.value)
    };

   const getweatherfun = async()=>{
   try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=068808c6344ea0933513a3d10e0b26de`;

    const res=await fetch(url);
    const data = await res.json();

    const {temp,pressure,humidity}=data.main;
    const {main:weatherr}=data.weather[0];
    const {name}=data;
    const {speed}=data.wind;
    const{country,sunset}=data.sys;

    const myobj={
        temp,
        pressure,
        humidity,
        weatherr,
        name,
        speed,
        country,
        sunset,
    };

    setobjinfo(myobj);
   }
   catch(error){
     console.log(error);
   }
    };

  useEffect(()=>{
    getweatherfun();
  },[]
);

    return(
        <>
        <div className="wrap">
        <div className="sbox">
    <div className="searchbox">
        <input type="search" placeholder="Check for your City" autoFocus className="searchterm"
            value={searchval}
            onChange={inputfun}
        />

        <button className="btsearch" onClick={getweatherfun}>Search</button>
    </div> 
    </div>

{/* imported card */}
<Weathercard objinfo={objinfo}/>

 </div>
        </>
    );

};

export default Temprature;
