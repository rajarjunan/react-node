import React, { Component } from 'react';
import './std_register.css';
// import HelloWorldList from './HelloWorldList';

class Std_Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    registrationHandler = () => {
        console.log('registrationHandler');
    }

    render() {
        return (
           <div>
            <section>
                <nav>
                    <ul>
                    <li><a onClick={this.registrationHandler} className="std-registration">Registration</a></li>
                    <li><a href="#news" className="std-profile">News</a></li>
                    <li><a href="#contact" className="std-registration">Contact</a></li>
                    <li><a href="#about" className="std-profile">About</a></li>
                    </ul>
                </nav>

                <article>
                <form>
                    <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                        <hr />
                        <p>By creating an account you agree to our <a href="#fsf">Terms Privacy</a>.</p>

                        <button type="submit" className="registerbtn">Register</button>
                    </div>

                    <div className="container signin">
                        <p>Already have an account? <a href="#ghg">Sign in</a>.</p>
                    </div>
                </form>
                </article>
            </section>
</div>

        );
    }
};

export default Std_Register;