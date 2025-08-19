import type { CarmelBData } from '../interfaces/CarmelBData';

type CarmelBProps = {
    data: CarmelBData[];
};

export default function CarmelA({ data }: CarmelBProps) {
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
                    <br />
                </p>

            )}
        </div>
    );

}