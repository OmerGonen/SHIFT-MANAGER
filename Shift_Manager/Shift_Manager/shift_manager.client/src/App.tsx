import { useEffect, useState } from 'react';
import './App.css';
import { setInterval } from 'timers';
import PostionsTable from './components/PostionsTable';

//interface Forecast {
//    date: string;
//    temperatureC: number;
//    temperatureF: number;
//    summary: string;
//}

function App() {
/*    const [forecasts, setForecasts] = useState<Forecast[]>();
    const [currentTime, setCurrentTime] = useState(new Date);*/

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

    //useEffect(() => {
    //    const timer = setInterval(() => {
    //            setCurrentTime(new Date());
    //        }, 1000);

    //return () => clearInterval(timer);
    //}, []);



    return (
        <div>
            {/*<h1 id="tableLabel">Shift Manager</h1>*/}
            {/*<h2 id="TimeToday">Time Now: {currentTime.toLocaleTimeString() } </h2>*/}
            
            {/*<p>Mananging shifts,platoons,missions and crap like that</p>*/}
            {/*{contents}*/}
            <div id='TitleDiv'>
                {/*Time line */}
                {/* Title */}
                {/*Current Time */}
            </div>
            <div id='TopMainDiv'>
                {/*Postions Table */}
                PostionsTable.PostionsTable(null);
                {/* Carmel A */}
                {/*Carmel  B */}
                {/* Shifts Button*/}
                {/*Shifts Settings  Button */}
            </div>
            <div id='BottomMainDiv'>
                {/*Mission Table */}
                {/* Kitchen  */}
            </div>
            <div id='FootingDiv'>
            </div>
        </div>
    );

    //async function populateWeatherData() {
    //    //call to backend 
    //    const response = await fetch('weatherforecast');
    //    if (response.ok) {
    //        const data = await response.json();
    //        setForecasts(data);
    //    }
    //}

}

export default App;