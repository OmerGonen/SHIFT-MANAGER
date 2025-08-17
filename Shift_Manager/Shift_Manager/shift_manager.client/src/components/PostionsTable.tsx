
interface PostionsAndTimes  {
    id: string;
    postionA: string;
    postionB: string;
    Times: string;
} 


export default function PostionsTable(data: PostionsAndTimes[]) {
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
                {data.map(postionAndTimes =>
                    <tr key={postionAndTimes.id}>
                        <td>{postionAndTimes.postionA}</td>
                        <td>{postionAndTimes.postionB}</td>
                        <td>{postionAndTimes.Times}</td>
                    </tr>
                )}
            </tbody>
           </table>
        </div>
    )

}