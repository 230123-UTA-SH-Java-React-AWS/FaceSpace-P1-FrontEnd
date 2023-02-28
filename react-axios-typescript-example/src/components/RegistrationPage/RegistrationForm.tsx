import { createContext, useContext, useState, Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./RegistrationForm.css"
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import { type } from "os";
import axios from 'axios';
import React from "react";
import { UserInfo } from "../../models/UserInfo";
import { Alert } from "react-bootstrap";

function Registration() {

    //Use useState hook to set the values
    const [givenName, setgivenName] = useState('');
    const [surname, setsurname] = useState('');
    const [emailAddress, setemailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
 
    //get the value by onchange and use set from useState to change the value
    const handleInputFName= (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setgivenName(event.target.value);
    }
    const handleInputLName = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setsurname(event.target.value);
    }
   const handleInputEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setemailAddress(event.target.value);
   }
   const handleInputPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
   }
   const rehandleInputPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setRePassword(event.target.value);
   }

    
   //Validation for empty and same password
   const handleSubmitForm = () => {

    if(givenName == "" || undefined){
        return alert("First Name cannot be empty!");
    }
    if(surname == "" || undefined){
        return alert("Last Name cannot be empty!");
    }
    if(emailAddress == "" || undefined){
        return alert("Email cannot be empty!");
    }
    if(password == "" || undefined){
        return alert("Password cannot be empty!");
    }
    if(password != rePassword){
        return alert("Password and re-entered password cannot be different");
    }

    //set backend variable to input value in frontend Ex: givenName is from backend model, firstName is from frontend useState
    const newUser = {
        givenName: givenName,
        surname: surname,
        emailAddress: emailAddress,
        password: password,
    }
    //axios used to connect backend, check backend controller to get the url. respone will hold the object of the data.
    axios.post<UserInfo>(`http://localhost:8080/api/users`, newUser).then(response => {console.log(response.data);})
   }

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
  };

    return <div className= "center">
        
        <Form className= "formFormat" noValidate validated={validated} onSubmit={handleSubmit}>
            <div id="createAccountMessage">CREATE AN ACCOUNT</div>

            <Row id="firstAndLastName" className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control  required type="text" placeholder="First name" value={givenName} onChange={handleInputFName}/>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" value={surname} onChange={handleInputLName}/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address </Form.Label>
                <Form.Control required type="email" placeholder="Email" value={emailAddress} onChange={handleInputEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create a Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={password} onChange={handleInputPassword }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Re-enter your Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={rePassword} onChange={rehandleInputPassword}/>
            </Form.Group>

            {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Your Picture</Form.Label>
                <Form.Control type="file" />
            </Form.Group> */}

            <br></br>
            <Button className="registerButton" variant="primary" type="submit" onClick={handleSubmitForm}>
                Register
            </Button>

        </Form>
    </div>
}

export default Registration;