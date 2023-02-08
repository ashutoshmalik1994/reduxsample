import { useSelector } from 'react-redux';
import { AiFillEye } from 'react-icons/ai';
const UserList = () => {
    const currentUser = useSelector(state => state.updateUserDetailReducer);
  console.log("current",currentUser.user)
 
    return (
        <>
       {/* <a href='/tab'>hello</a> */}
        <div className='form-tabl'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
               { currentUser.user.map((x) => {
                  return (
                   <tr>
                      <td>{x.firstName}</td>
                      <td>{x.lastName}</td>
                      <td>{x.email}</td>
                      <td>{x.password}</td>
                      <td>{x.address}</td>
                      <td><AiFillEye /></td>
                    </tr>
                    )
                     }) }
                    </tbody>
                </table>
            </div>
        </>
        );
};

export default UserList;