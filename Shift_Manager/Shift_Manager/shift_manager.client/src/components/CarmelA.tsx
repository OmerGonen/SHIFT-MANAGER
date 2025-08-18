import type { CarmelAData } from '../interfaces/CarmelAData';

type CarmelAProps = {
    data: CarmelAData[];
};

export default function CarmelA({ data } : CarmelAProps ){
    return (
        <div>
            {data.map(CarmelAData =>
                <p>

                    

                    Time Shift:
                    

                    <br></br>
                    {' ' + CarmelAData.time}
                    <br></br>
                    <br />
                    Crew Members:
                    <br></br>

                    {CarmelAData.names.map(name =>

                        name + ', '

                    )}
                    <br/>

                
                </p>
               
            )}
        </div>
    );

}