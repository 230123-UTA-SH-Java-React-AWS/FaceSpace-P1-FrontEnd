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
import CreatePost from './components/CreatePost/CreatePost';
import UserProfile from './components/UserProfile/UserProfile';
import { Provider } from 'react-redux';
import { store } from './shared/Redux/store';
import SearchFriends from './components/SearchFriends/SearchFriends';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path = "/" element = {<App />} />
        <Route path = "/Login" element = {<LoginBox />} />
        <Route path = "/Post" element = {<Post />} />
        <Route path = "/Register" element = {<RegistrationForm />} />
        <Route path = "/CreatePost" element = {<CreatePost />}/>
        <Route path = "/MyProfile" element = {<UserProfile />}/>
        <Route path = "/SearchFriends" element = {<SearchFriends />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
