import logo from './logo.svg';
import './App.css';
import './components/myexternal.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MultiMedia from './components/MultiMedia';
import UserForm from './components/UserForm';
import ToggleImg from './components/ToggleImg';
import MyClassComp from './components/MyClassComp';
import SmileToggComp from './components/SmileToggComp';
import MyColorComp from './components/MyColorsComp';
import RefComp from './components/RefComp';
import PageNotFound from './components/PageNotFound';
import {Card,Button} from 'react-bootstrap';
import NavComp from './components/NavComp';
import MyFavColor from './components/MyFavColor';
import UseStateComp from './components/UseStateComp';
import DashBoard from './CRUD/DashBoard';
import AddComp from './CRUD/Add';
import EditComp from './CRUD/Edit'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className='myHeading'>Welcome Kusumak</h1>
      <BrowserRouter>
      <div className='container'>
      <Card className="text-center border-primary">
      <Card.Header className='border-primary'>
        <NavComp/>
      </Card.Header>
      <Card.Body>
      <Routes>
          {/* default routing */}
        <Route path='' element={<MultiMedia/>} />
          {/* naming routing */}
          <Route path='multimedia' element={<MultiMedia/>} />
          <Route path='userfrm' element={<UserForm/>}/>
          <Route path='myfavcolor' element={<MyFavColor color="Green"/>}/>
          <Route path='smiletogg' element={<SmileToggComp/>}/>
          <Route path='mycolor' element={<MyColorComp/>}/>
          <Route path='usestate' element={<UseStateComp/>}/>
          <Route path='dashboard' element={<DashBoard/>}/>
          <Route path='add' element={<AddComp/>}/>
          <Route path='edit/:id' element={<EditComp/>}/>
          {/* parameterize rounting */}
          <Route path='userfrm/:id' element={<UserForm/>}/>
          <Route path='myclasscomp' element={<MyClassComp name="Ashu" post="Student"/>}/>
          {/* Child routing */}
          <Route path='toggleimg' element={<ToggleImg/>}>
              <Route path='ref' element={<RefComp/>}/> 
          </Route>
         
         {/* whild card rounting */}
         <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Card.Body>
      <Card.Footer className="text-muted border-primary mb-2">
        <p className='text-primary'>This App Is Design And Developed By: <strong>Ashutosh</strong></p>
      </Card.Footer>
      </Card>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
