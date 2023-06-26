import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFcCom from './components/MyFcComp';
import MyClassComp from './components/MyClassComp';
import CountComp from './components/CountComp';
import CounterComp from './components/CounterComp';
import CondRendComp from './components/CondRendComp';
import MultiMedia from './components/MultiMedia';
import ImgToggComp from './components/ImgToggComp';
import ToggleImg from './components/ToggleImg';
import SmileToggComp from './components/SmileToggComp';
import ParentComp from './components/ParentComp';
import ChildComp from './components/ChildComp';
import MyColorsCopm from './components/MyColorsComp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Comp1 from './components/Comp1';
import CounterIncrement from './components/CounterIncrement';
import CounterHover from './components/CounterHover';
import RefComp from './components/RefComp';
import UserComp from './components/UserComp';
import ErrorBoundary from './components/ErrorBoundary';
import UserForm from './components/UserForm';
import MyFavColor from './components/MyFavColor';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyFcCom name="Ashutosh" post="Student" />
    <MyClassComp name="Ashutosh" post="Student" />
    <CountComp institute="YCP CDAC"/>
    <CounterComp/>
    <CondRendComp/>
    <MultiMedia/>
    <ImgToggComp/>
    <ToggleImg/>
    <SmileToggComp/> */}
    {/* <ParentComp/> */}
    {/* <MyColorsCopm/> */}
    {/* <Comp1/> */}
    {/* <CounterIncrement/>
    <CounterHover/> */}
    {/* <RefComp/> */}
    {/* <ErrorBoundary>
    <UserComp name="Ashutosh"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <UserComp name="Anmol"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <UserComp name="Rupesh"/>
    </ErrorBoundary>
    <ErrorBoundary>
    <UserComp name="Rahul"/>
    </ErrorBoundary> */}
    {/* <UserForm/> */}
    {/* <MyFavColor/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
