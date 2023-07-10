import React ,{useState} from 'react';
// import ReactDOM  from 'react';

import './App.css';

const App= ()=>{
   let url = "https://api.openweathermap.org/data/2.5/weather?q="

    const[query,setQuery] = useState('');
    const[weather,setweather] = useState({});


    const request = (event) => {
      if (event.key==="Enter") {
        fetch(`${url}${query}&units=metric&appid=d795cc48a52d296fab9a83debedab718`)
        .then(res => res.json())
        .then(result => {
          setweather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
      
    
      const InputQ = (event) => {
      let value = event.target.value;
      setQuery(value);
      console.log(value);
      // request(event);
    };

    let date=date=>{
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      let m=months[date.getMonth()];
      let d = days[date.getDay()];
      let y = date.getFullYear();
      return `${d}, ${m}, ${y}`;
    }
      


    // the conditon for backgournd  >>  (weather.main!=="undefined")?((weather.main.temp>16)?"app-worm":"app"):"app"
  
  return( 
      <div className="app">
      <main>
        <div className="searchBar">
          <input 
            type="search" 
            placeholder='Search By Name'
            onChange={InputQ}
            onKeyPress={request}
            />
        </div>
        {(typeof weather.main != "undefined")? 
              (<><div className="DateTime">
            <label className='date'>{date(new Date())}</label>
          </div><div className="TempLoc">
              <div className='Tw'>
                <h1 className='temp'>{parseInt(weather.main.temp)}<span>°C</span></h1>
                <label className='weather'>{weather.weather.main}</label>
              </div>
              <h1 className='loc'>{weather.name} </h1>
            </div><footer>
              <div className='container'>
                <div className="feelsLike">
                  <h4>feels like</h4>
                  <h3>{parseInt(weather.main.feels_like)}°C</h3>
                </div>
                <div className="humidity">
                  <h4>Humidity</h4>
                  <h3>{weather.main.humidity}%</h3>
                </div>
                <div className="windSpeed">
                  <h4>Wind speed</h4>
                  <h3> {weather.wind.speed}mph</h3>
                </div>
              </div>
            </footer></>):('')}
          </main>
        </div>
    
  );
}

export default App;
