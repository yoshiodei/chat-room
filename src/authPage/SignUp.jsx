import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../chatPage/components/Footer';
import Navbar from '../chatPage/components/Navbar';
import './styles/auth-page.css';

const SignUp = () => {
    return (
        <div className='authPage'>
            <Navbar />
                <main className='authPage__main'>
                    <div className='authPage__div' >
                        <h2>Sign Up</h2>
                        <form className='authPage__form'>
                            <div className='authPage__input-div'>
                                <label>First Name</label>
                                <input />
                            </div>
                            <div className='authPage__input-div'>
                                <label>Last Name</label>
                                <input  />
                            </div>
                            <div className='authPage__input-div'>
                                <label>User Name</label>
                                <input  />
                            </div>
                            <div className='authPage__input-div'>
                                <label>Password</label>
                                <input type='password' />
                            </div>
                            <button className='authPage__button' type='submit'>Sign Up</button>
                        </form>
                        <Link to='/signin' className='authPage__link' > Click here to sign in </Link>
                    </div>
                </main>
            <Footer />
        </div>
    );
}

export default SignUp;
