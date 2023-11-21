

const Table = () =>{
    return (
        <div className="table">
            <table>
            <caption>Confira nossos planos</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>1234567890</td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>jane@example.com</td>
                        <td>9876543210</td>
                    </tr>
                    <tr>
                        <td>Joe Public</td>
                        <td>joe@example.com</td>
                        <td>9876543210</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table;