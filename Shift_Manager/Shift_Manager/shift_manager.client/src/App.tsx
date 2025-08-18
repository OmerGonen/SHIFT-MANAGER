import { useEffect, useState } from 'react';
import './App.css';
import PositionsTable from './components/PositionsTable';
import { getPositionsAndTimesTableTestData } from './testData/testDataGenerator';
import { getCurrentTime } from './utilities/time';

function App() {
    const [positionsAndTimesTableData, setPositionsAndTimesTableData] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date);

    useEffect(() => {
        //getting test data for positions and times table
        const positionAndTimesData = getPositionsAndTimesTableTestData();
        setPositionsAndTimesTableData(positionAndTimesData);
    }, []);

    useEffect(() => {
        getCurrentTime(setCurrentTime);
    }, []);



    return (
        <div>
            <div id='TitleDiv'>
                <h1 id="tableLabel">Shift Manager</h1>
                <h2 id="TimeToday">Time Now: {currentTime.toLocaleTimeString()} </h2>
                <p>Mananging shifts,platoons,missions and crap like that</p>
            </div>
            <div id='TopMainDiv'>
                {/*Postions Table */}
                <PositionsTable data={ positionsAndTimesTableData} />
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