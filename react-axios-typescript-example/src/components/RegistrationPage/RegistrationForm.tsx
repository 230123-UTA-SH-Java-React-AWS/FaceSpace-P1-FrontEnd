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
import { UserProfile } from "../../models/UserProfile";

function Registration() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleInputFName= (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(event.target.value);
    }
    const handleInputLName = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(event.target.value);
    }
   const handleInputEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
   }
   const handleInputPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    }
 
   const handleSubmitForm = () => {
    const newUser = {
        givenName: firstName,
        surname: lastName,
        userEmail: email,
        userPassword: password,
    }
    axios.post<UserProfile>(`http://localhost:3000/signup`, newUser).then(response => {console.log(response.data);})
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

            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control  required type="text" placeholder="First name" value={firstName} onChange={handleInputFName}/>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" value={lastName} onChange={handleInputLName}/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address </Form.Label>
                <Form.Control required type="email" placeholder="Email" value={email} onChange={handleInputEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create a Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={password} onChange={handleInputPassword}/>
            </Form.Group>

            {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Your Picture</Form.Label>
                <Form.Control type="file" />
            </Form.Group> */}

            <br></br>
            <Button variant="primary" type="submit" onClick={handleSubmitForm}>
                Register
            </Button>

        </Form>
    </div>
}

export default Registration;