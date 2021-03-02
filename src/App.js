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

function App() {

  const [rooms, setRooms]= useState([])//creates a new database of just rooms using useState
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
 
  console.log(rooms);
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
            <Main >
              <Sidebar />
        <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route path='/'>
           <Login />
          </Route>
        </Switch>
        </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;
//style components use backticks
const Container = styled.div`
  width: 100%;
  height:100vh;
  background: blue;
  display:grid;
  grid-template-rows:38px auto;
  `
  const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
  `