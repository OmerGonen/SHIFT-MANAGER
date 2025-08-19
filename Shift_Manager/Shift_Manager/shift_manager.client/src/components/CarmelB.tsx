import type { CarmelBData } from '../interfaces/CarmelBData';

type CarmelBProps = {
    data: CarmelBData[];
};

export default function CarmelA({ data }: CarmelBProps) {
    return (
        <div>
            <h2>Carmel B</h2>
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