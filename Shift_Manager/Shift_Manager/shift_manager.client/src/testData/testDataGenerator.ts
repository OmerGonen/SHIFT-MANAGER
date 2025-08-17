import { PositionsAndTimesRaw } from '../interfaces/PositionsAndTimesRaw'; 

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

