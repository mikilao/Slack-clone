import {useState, useEffect} from 'react';
import './App.css';
import 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './components/chat';
import Login from './components/login';
import Header from './components/header';
import Sidebar from './components/sidebar';
import styled from 'styled-components';
import db from './firebase';
import {auth, provider} from './firebase';

function App() {

  const [rooms, setRooms]= useState([])//creates a new database of just rooms using useState
  const [user, setUser]= useState(JSON.parse(localStorage.getItem('user')))//store user data in tags, local storage keeps user logged in
  const getChannels= () =>{
    db.collection('rooms').onSnapshot((snapshot) =>{
      setRooms(snapshot.docs.map((doc) =>{
          return {id: doc.id, name: doc.data().name };
      }))
    })

  }
  useEffect(() => { 
   getChannels();
    
  }, [])
 
  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
      alert("Logout?")
    })
  }


  console.log(rooms);
  return (
    <div className="App">
      <Router >
        {
          !user ? //takes you to login if no user is set
             <Login setUser={setUser}/>
          :
        
        <Container>
          <Header user={user} signOut={signOut}/>
            <Main >
              <Sidebar rooms={rooms} />
        <Switch>
          <Route path="/room">
             <Login />
          </Route>
          <Route path='/'>
            <Chat />
            
          
          </Route>
        </Switch>
        </Main>
        </Container>
}
      </Router>
    </div>
  );
}

export default App;
//style components use backticks
const Container = styled.div`
  width: 100%;
  height:100vh;
  background: white;
  display:grid;
  grid-template-rows:38px auto;
  `
  const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
  `