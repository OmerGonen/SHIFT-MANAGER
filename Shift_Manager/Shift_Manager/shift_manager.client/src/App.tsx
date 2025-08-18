import { useEffect, useState } from 'react';
import './App.css';
import PositionsTable from './components/PositionsTable';
import CarmelA from './components/CarmelA';
import CarmelB from './components/CarmelB';
import { getPositionsAndTimesTableTestData, getCarmelATestData, getCarmelBTestData } from './testData/testDataGenerator';
import { getCurrentTime } from './utilities/time';


function App() {
    const [positionsAndTimesTableData, setPositionsAndTimesTableData] = useState([]);
    const [carmelATableData, setCarmelAData] = useState([]);
    const [carmelBTableData, setCarmelBData] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date);

    useEffect(() => {
        //getting test data for positions and times table
        const positionAndTimesData = getPositionsAndTimesTableTestData();
        setPositionsAndTimesTableData(positionAndTimesData);
    }, []);
    useEffect(() => {
        //getting test data for Carmel A and times table
        const CarmelAData = getCarmelATestData();
        setCarmelAData(CarmelAData);
    }, []);

    useEffect(() => {
        //getting test data for Carmel B and times table
        const CarmelBData = getCarmelBTestData();
        setCarmelBData(CarmelBData);
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
                <br></br>
                <h2>Shift List</h2>
                <PositionsTable data={ positionsAndTimesTableData} />
                {/* Carmel A */}
                <br></br>
                <h2>Carmel A</h2>
                <CarmelA data={carmelATableData} />
                {/*Carmel  B */}
                <br></br>
                <h2>Carmel B</h2>
                <CarmelB data={carmelBTableData} />
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