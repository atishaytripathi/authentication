import React, { useState } from 'react'
import useFetch from '../useFetch/useFetch';
import Loader from '../Loader/Loader';
import './LoginSignup.css'
import { FaUser, FaEnvelope, FaEye } from "react-icons/fa";


const LoginSignup = () => {
    const [action, setAction]=useState('');
    const [userName,setUserName]=useState('')
    const [name,setName]=useState('')
    const [pwd, setPwd] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [type, setType]=useState(false);
   

    const { isLoading, error } = useFetch ('',false);
    
    const registerLink = () =>{
        setAction('active');
    };

    const loginLink = () =>{
        setAction('');
    };

    const hidePass = ()=> {
        setType(!type)
    }



    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoggingIn(true);
        
        console.warn({userName, pwd});
        try {
          // Make a fetch request to authenticate user
          const response = await fetch('http://localhost:8002/api/signin', {
            method: 'POST',
            headers: {
                "Content-Type":'application/json',
                accept: 'application/json',
            },
            body: JSON.stringify({ email: userName, password: pwd }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to authenticate');
          }
    
          // Assuming the server returns some data upon successful authentication
          const userData = await response.json();
          // Now you can do something with the userData, like storing it in state or context
        } catch (error) {
          // Handle authentication error
          console.error('Authentication error:', error);
        } finally {
          setIsLoggingIn(false);
        }
      };
    
      const handleSignup = async (e) => {
        e.preventDefault();
        setIsSigningUp(true);
        try {
          // Make a fetch request to register user
          const response = await fetch('http://localhost:8002/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type":'application/json',
                accept: 'application/json',
            },
            body: JSON.stringify({ name, email:userName, password:pwd }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to sign up');
          }
    
          // Assuming the server returns some data upon successful registration
          const userData = await response.json();
          // Now you can do something with the userData, like storing it in state or context
        } catch (error) {
          // Handle signup error
          console.error('Signup error:', error);
        } finally {
          setIsSigningUp(false);
        }
      };
    


  return (
    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" required onChange={(e)=>{setUserName(e.target.value)}}/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type={type ? "text" : "password"} placeholder="Password" required onChange={(e)=>{setPwd(e.target.value)}}/>
                    <FaEye className='icon'onClick={hidePass}/>
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" disabled={isLoggingIn}>{isLoggingIn ? 'Logging In...' : 'Login'}</button>
                <div className="register-link">Don't have an account?<a href="#" onClick={registerLink}> Register Here</a></div>
            </form>
        </div>

        <div className="form-box register">
            <form action="" onSubmit={handleSignup}>
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Username" required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="Email" required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type={type ? "text" : "password"} value={pwd} onChange={(e)=>{setPwd(e.target.value)}} placeholder="Password" required/>
                    <FaEye className='icon'onClick={hidePass}/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>I agree to the terms and conditions.
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" disabled={isSigningUp}>{isSigningUp ? 'Signing Up...' : 'Sign Up'}</button>
                <div className="register-link">Already have an account?<a href="#" onClick={loginLink}> Login Here</a></div>
            </form>
            {isLoading && <Loader />}
            {error && <div>Error: {error.message}</div>}
        </div>
    </div>
  )
}

export default LoginSignup
