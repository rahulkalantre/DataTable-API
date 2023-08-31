
const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {userId, id, title,completed} = curUser;

                    return (
                        <tr key = { id }>
                            <td> {userId} </td>
                            <td> { id }</td>
                            <td> { title }</td>
                            <td> { completed.toString() }</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData;