import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../chatPage/components/Footer';
import Navbar from '../chatPage/components/Navbar';
import './styles/auth-page.css';

const SignIn = () => {
    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const {userName, password} = user;
    //     if(userName !== '' && password.length > 7)
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    return (
        <div className='authPage'>
            <Navbar />
                <main className='authPage__main'>
                    <div className='authPage__div' >
                        <h2>Sign In</h2>
                        <form className='authPage__form'>
                            <div className='authPage__input-div'>
                                <label>User Name</label>
                                <input name='useName' onChange={(e) => handleChange(e)} />
                            </div>
                            <div className='authPage__input-div'>
                                <label>Password</label>
                                <input type='password' name='password' onChange={(e) => handleChange(e)} />
                            </div>
                            <button className='authPage__button' type='submit' onSubmit={(e) => handleSubmit(e)} >Sign In</button>
                        </form>
                        <Link to='/' className='authPage__link' > Click here to sign up </Link>
                    </div>
                </main>
            <Footer />
        </div>
    );
}

export default SignIn;
