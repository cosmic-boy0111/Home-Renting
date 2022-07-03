import logo from './logo.svg';
import './App.css';
import React,{createContext,useState,useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './components/Home';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import ArealHomes from './components/ArealHomes';
import HomeInfo from './components/HomeInfo';



export const userContext = createContext();


function App() {


  const [rootUser, setRootUser] = useState({
    _id : null
  })

  const getUser = async() =>{
    try {
      const res = await fetch('/aboutUser',{
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      const data = await res.json();
      setRootUser(data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <>
      <BrowserRouter>
        <div style={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          height:'100vh'

        }}>

        
        <Navbar rootUser={rootUser} setRootUser={setRootUser}/>
        <userContext.Provider value={{
          setRootUser,
          rootUser
        }}>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/area/:area' element={<ArealHomes />} />
          <Route path='/home/:id' element={<HomeInfo />} />
        </Routes>
        </userContext.Provider>
        </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
