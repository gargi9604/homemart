import React,{useRef, useState} from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const[user, setUser] = useState(null);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const emailRef = useRef();
    
    // login by gmail and password 
    const handleLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);

        // validation
        setError('');
        setSuccess('');


        // if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        //     setError('Please add at least two uppercase');
        //     return
        // }
        // else if(!/(?=.*[!@#$&*])/.test(password)){
        //   setError('Please add a special character');
        //   return
        // }
        // else if(password.length < 6){
        //   setError('Password must be 6 characters long');
        //   return
        // }
    

        // using firebase for loging 
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User login successfully')
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    }
     // Reset for Password 
     const handleResetPassword = event =>{
        const email = emailRef.current.value;
        if(!email){
            alert('Please provide your email address to reset password');
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(() =>{
            alert('Please check your email')
        })
        .catch(error =>{
            setError(error.message);
        })
     }

   
    return (
        <div className='register'>
            <div className="register-container">
            <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                        <div className="register-fields">
                            
                            <input type="email" placeholder='Email Address' name='email' ref={emailRef} required/>
                            <input type="password" placeholder='Password' name='password' required/>
                        </div>
                        <div className='reset-div'>
                            <p><small className='reset-description'>Forget Password?<button onClick={handleResetPassword} className='Reset-btn'>Reset Password</button></small></p>
                        </div>
                        <p className="register-login">
                            <div className="register-agree">
                                <input type="checkbox" name="" id="" />
                                <p>By continuing,I agree to the terms of use & privacy policy</p>
                            </div>
                        </p>
                           <button className='continue'>Log In</button>
                        <div className='register-div'>
                           <p><small className='register-description'>New to this website? Please <Link className='register-link' to='/register'>Register Here</Link></small></p>
                        </div>

                        <p className='error'>{error}</p>
                        <p className='success'>{success}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;