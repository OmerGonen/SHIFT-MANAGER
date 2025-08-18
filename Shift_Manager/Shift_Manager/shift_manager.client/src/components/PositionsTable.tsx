import type { PositionsAndTimesRaw } from '../interfaces/PositionsAndTimesRaw';

type PostionsTableProps = {
    data: PositionsAndTimesRaw[];
};

export default function PositionsTable({ data }: PostionsTableProps) {
    return (
        <div>
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Blue</th>
                        <th>White</th>
                        <th>Times</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(positionAndTimes =>
                        <tr key={positionAndTimes.id}>
                            <td>{positionAndTimes.positionA}</td>
                            <td>{positionAndTimes.positionB}</td>
                            <td>{positionAndTimes.Times}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
