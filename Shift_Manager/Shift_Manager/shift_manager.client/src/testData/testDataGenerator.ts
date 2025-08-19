import { PositionsAndTimesRaw } from '../interfaces/PositionsAndTimesRaw'; 
import { CarmelAData } from '../interfaces/CarmelAData';
import { CarmelBData } from '../interfaces/CarmelBData';

export function getPositionsAndTimesTableTestData(): PositionsAndTimesRaw[] {
    const testData: PositionsAndTimesRaw[] =
        [
            {
                id: `firstShift`,
                positionA: `Gadi`,
                positionB: `Shmuel`,
                Times: `00:00 - 04:00`
            },
            {
                id: `secondShift`,
                positionA: `David`,
                positionB: `Yael`,
                Times: `04:00 - 08:00`
            },
            {
                id: `thirdShift`,
                positionA: `Yoel`,
                positionB: `Dan`,
                Times: `08:00 - 12:00`
            },
            {
                id: `fourShift`,
                positionA: `Ron`,
                positionB: `Rami`,
                Times: `12:00 - 16:00`
            },
            {
                id: `fiveShift`,
                positionA: `Avi`,
                positionB: `Omer`,
                Times: `16:00 - 20:00`
            }
        ];

    return testData;

}


    export function getCarmelATestData(): CarmelAData[] {
        const testData: CarmelAData[] =
            [
                {
                    id: 'Morning-Shift',
                    names: ['Omer', 'Iztik', 'Ronen', 'Mohhamad def'],
                },
                {
                    id: 'Noon-Shift',
                    names: ['Avi', 'Kobi', 'Shalom', 'Ben Laden'],
                },
                {
                    id: 'Night-Shift',
                    names: ['Leon', 'Kobi', 'Shalom', 'Ben Laden'],
                }

            ];

        return testData;
};


export function getCarmelBTestData(): CarmelBData[] {
    const testData: CarmelBData[] =
        [
            {
                id: 'Morning-Shift',
                names: ['Omer', 'Iztik', 'Ronen', 'Mohhamad def'],
            },
            {
                id: 'Noon-Shift',
                names: ['Avi', 'Kobi', 'Shalom', 'Ben Laden'],
            },
            {
                id: 'Night-Shift',
                names: ['Leon', 'Kobi', 'Shalom', 'Ben Laden'],
            }

        ];

    return testData;
};


