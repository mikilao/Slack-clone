import React from 'react'
import styled from 'styled-components';
import {auth, provider} from '../firebase';



function Login(props) {
    const signIn = () => {
        auth.signInWithPopup(provider) //renders popup with chosen  provider
        .then((result)=> {
            const newUser ={
                name: result.user.displayName,
                photo: result.user.photoURL
            } 
            localStorage.setItem('user', JSON.stringify(newUser)); //storing user data in browser, needs to use JSON.stringify
            props.setUser(newUser)
          
        })
        .catch((error) => {
            alert(error.message)}
        )}
    return (
        <Container>
            <Content>
                <h1>Slack Sign in</h1>
                <SlackImg src="https://image.flaticon.com/icons/png/512/2111/2111615.png"/>
                <SignInButton onClick={() => signIn()}>
                    Sign In with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login;


const Container =styled.div`
 width: 100%;
 background-color: #f8f8f8;
 height: 100vh;
 justify-content: center;
 display: flex;
 align-items: center;
`
const SlackImg =styled.img`
 height: 200px;

`
const Content =styled.div`
 background-color: white;
 padding: 100px;
 justify-content: center;
 display: flex;
 flex-direction: column;
 border-radius: 2px;
 box-shadow: 0 1px rgb(0 0 0 / 12%), 0 1px rgb(0 0 0/ 12%); 
`
const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    text-color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
`