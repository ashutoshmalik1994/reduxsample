import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import updateUserDetail from '../../action/index';

const AddUser = () => {
    const [open, setOpen] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    // const [registerFormError, setRegisterFormError] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     address:""
    // });
 //   const currentUser = useSelector(state => state.updateUserDetailReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let allData = { firstName: firstName, lastName: lastName, email: email, password: password, address: address };
        console.log(allData);
        dispatch(updateUserDetail(allData));
        debugger;
        setAllEntry([...allEntry, allData]);
        setOpen(true);
        handleClose();


        // let error = {
        //     ...registerFormError
        // };
        // let check = true;
        // if (firstName === "") {
        //     error = { ...error, firstName: "Please enter card number" }
        //     check = false;
        // }
        // if (lastName === "") {
        //     error = { ...error, lastName: "Please enter card expiry date" }
        //     check = false;
        // }
        // if (email=== "") {
        //     error = { ...error, email: "Please enter card cvv" }
        //     check = false;
        // }
        // if (password=== "") {
        //     error = { ...error, password: "Please enter cardholder name" }
        //     check = false;
        // }
        // if (address=== "") {
        //     error = { ...error, address: "Please enter cardholder name" }
        //     check = false;
        // }


        // if (check) {
        //     error = { ...error, firstName: "", lastName: "", email: "", password: "",  address: "" };
        // }
        // setRegisterFormError({
        //     ...error
        // })
    }

    const handleClickOpen = () => {
        setOpen(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAddress("");
    };

    const handleClose = () => {
        setOpen(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAddress("");
    };

    return (
        <>
            <div className='sign-btn form-tabl '>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add User
                </Button>
            </div>

            <Dialog open={open} onClose={handleClose} className="form-modal" >
                <div className='form-data' >
                    <DialogTitle>Add User </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="exampleEmail">
                                FirstName
                            </label>

                            <input
                                name="FirstName"
                                placeholder="firstName"
                                type="text"
                                value={firstName}
                                className="form-control"
                                onChange={(e) => 
                                    setFirstName(e.target.value)}
                                    required
                            />
                            {/* <div className="invalid-feedback" style={{ color: "red" }}>{registerFormError.firstName}</div> */}
                            <br></br>

                            <label htmlFor="exampleEmail">
                                LastName
                            </label>

                            <input
                                name="lastName"
                                placeholder="lastName"
                                type="text"
                                value={lastName}
                                className="form-control"
                                onChange={(e) => setLastName(e.target.value)
                                }
                                required
                            />
                            <br></br>
                            <label htmlFor="exampleEmail">
                                Email
                            </label>

                            <input
                                name="email"
                                placeholder="email"
                                type="email"
                                value={email}
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <br></br>
                            <label htmlFor="examplePassword">
                                Password
                            </label>

                            <input
                                id="examplePassword"
                                name="password"
                                placeholder="password"
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <br></br>
                            <label htmlFor="exampleEmail">
                                Address
                            </label>

                            <input
                                name="address"
                                placeholder="address"
                                type="text"
                                value={address}
                                className="form-control"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <div className='form-bt'>
                                <button style={{ textAlign: "center" }} onClick={handleClose} className="btn btn-danger">
                                    Close
                                </button>
                                <button style={{ textAlign: "center", marginLeft: "10px" }} className="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    )
}

export default AddUser;