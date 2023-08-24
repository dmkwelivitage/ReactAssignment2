import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import "./Register.css";
import { useNavigate, Navigate } from 'react-router-dom';
import Select from "react-select";



export default function Register() {
    const navigate = useNavigate();
    const[FirstName, setFirstName] = useState('');
    const[LastName, setLastName] = useState('');
    const[Email, setEmail] = useState('');
    const[Address, setAddress] = useState('');
    const[FirstNameErr, setFirstNameErr] = useState(false);
    const[LastNameErr, setLastNameErr] = useState(false);
    const[EmailErr, setEmailErr] = useState(false);
    const [AddressErr, setAddressErr] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState();

    const optionList = [
        { value: "ComputerScience", label: "Computer Science" },
        { value: "GraphicDesigning", label: "Graphic Designing" },
        { value: "Multimedia", label: "Multimedia" },
        { value: "ChildPsychology", label: "Child Psychology" },
        { value: "CyberSecurity", label: "Cyber Security" },
        { value: "Networking", label: "Networking" },
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ComputerScience", label: "Computer Science" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setFirstNameErr(false);
        setLastNameErr(false);
        setEmailErr(false);
        setAddressErr(false);

        if(FirstName === ''){
            setFirstNameErr(true)
        }
        if(LastName === ''){
            setLastNameErr(true)
        }
        if(Email === ''){
            setEmailErr(true)
        }
        if(Address === ''){
            setAddressErr(true)
        }

        if (FirstName && LastName && Email && Address){
             fetch(' http://localhost:8000/UserData' , {
                 method: "POST",
                 headers: {"Content-type" : "application/json"},
                 body: JSON.stringify({ FirstName,  LastName, Email,  Address})
             }).then(() => navigate("/Data"))
        }
    }

    function handleSelect(data) {
        setSelectedOptions(data);
    }
    const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("authenticated"));
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);
    if (authenticated) {
        return (
            <div className="register">
                <div className="register-form">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <div className="title">Register</div>
                            <TextField
                                onChange={(e) => setFirstName(e.target.value)}
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={1}
                                error={FirstNameErr}
                            />
                            <TextField
                                onChange={(e) => setLastName(e.target.value)}
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={1}
                                required

                                error={LastNameErr}
                            />
                            <TextField
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={1}
                                error={EmailErr}
                            />
                            <TextField
                                onChange={(e) => setAddress(e.target.value)}
                                label="Address"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={4}
                                error={AddressErr}
                            />
                        </div>
                        <div className="select">
                            <Select
                                options={optionList}
                                placeholder="Select Course"
                                value={selectedOptions}
                                onChange={handleSelect}
                                isSearchable={true}
                                isMulti
                            />
                        </div>
                        <Button
                            type="submit"
                            color="inherit"
                            variant="contained">Submit</Button>
                    </form>
                </div>
            </div>

        );
    }
    else {
        return (<Navigate replace to="/Login" />);
    }
    
}