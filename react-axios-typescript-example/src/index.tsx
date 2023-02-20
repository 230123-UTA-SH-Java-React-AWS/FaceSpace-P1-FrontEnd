import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginBox from './components/LoginPage/LoginBox';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Post from './components/Post/Post';
import RegistrationForm from './components/RegistrationPage/RegistrationForm';
import Login from './Data/Login';
import CreatePost from './components/CreatePost/CreatePost';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NavigationBar />
    <Routes>
      <Route path = "/" element = {<App />} />
      <Route path = "/Login" element = {<LoginBox />} />
      <Route path = "/Post" element = {<Post />} />
      <Route path = "/Register" element = {<RegistrationForm />} />
      <Route path = "/CreatePost" element = {<CreatePost />}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
