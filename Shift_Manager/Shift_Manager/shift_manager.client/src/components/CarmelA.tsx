import type { CarmelAData } from '../interfaces/CarmelAData';

type CarmelAProps = {
    data: CarmelAData[];
};

export default function CarmelA({ data } : CarmelAProps ){
    return (
        <div>
            <h2>Carmel A</h2>
            {data.map(CarmelAData =>
                <p>
                    {' ' + CarmelAData.id + ': '}
                    {CarmelAData.names.map(name =>
                        name + ', '
                    )}
                </p>
            )}
        </div>
    );
}