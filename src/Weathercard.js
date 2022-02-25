const Weathercard =({objinfo})=>{
    const  {temp,
    pressure,
    humidity,
    weatherr,
    name,
    speed,
    country,
    sunset,
    }=objinfo;

    // converting sunset time
    let sec=sunset;
    let date=new Date(sec*1000);
    let time=`${date.getHours()}:${date.getMinutes()}`
    return (
        <>
        
{/* temprature card section */}
<div className="wcard">
<article className="widget">
<div className="wicon">
<div className="icon">
    <i className={"wi wi-day-sunny"}></i>
    </div>
    </div>
     
<div className="weatherinfo">
     <div className="temprature">
         <span>{temp}</span>
     </div>

  <div className="description">
     <div className="weather">
         {weatherr}
         </div>
         <div className="place">
             {name}, {country}
         </div>
 </div>
</div>

<div className="time_date">
    {new Date().toLocaleString()}
</div>



{/* last  section(4column) */}
<div className="extra_info">
<div className="minmax">
    <div className="twoside_section">
        <p><i className={"wi wi-sunset"}></i></p>
        <p className="e_left">
            {time}Pm <br/>
            Sunset
        </p>
    </div>

    <div className="twoside_section">
        <p><i className={"wi wi-humidity"}></i></p>
        <p className="e_left">
            {humidity}<br/>
            Humidity
        </p>
    </div>
  
    <div className="twoside_section">
        <p><i className={"wi wi-rain"}></i></p>
        <p className="e_left">
            {pressure} <br/>
            Pressure
        </p>
    </div>

    <div className="twoside_section">
        <p><i className={"wi wi-wind"}></i></p>
        <p className="e_left">
            {speed}
             <br/>
            Speed
        </p>
    </div>

    
</div>

</div>
</article>
</div>
        </>
    )
}

export default Weathercard;
