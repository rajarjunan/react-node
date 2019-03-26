import React from 'react';
import './Std_Register.css'
const Std_Register = (props) => (<React.Fragment>
    <article>
        <form>
            <div className="container">
                <h1>Student Register</h1>
                <p>Please fill in this form to create an student account.</p>
                <hr />
                <label for="name"><b>Name</b></label>
                <input type="text" onChange={props.onNameHandler} placeholder="Enter name" name="name" required />
                <label for="std-id"><b>Std.Id</b></label>
                <input type="text" onChange={props.onStdIdHandler} placeholder="Enter std-id" name="stud-id" required />
                <label for="email"><b>Email</b></label>
                <input type="text" onChange={props.onEmailHandler} placeholder="Enter Email" name="email" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" onChange={props.onPwdHandler} placeholder="Enter Password" name="psw" required />

                <hr />
                <p>By creating an account you agree to our <a href="#fsf">Terms Privacy</a>.</p>

                <button type="submit" onClick={(e) => props.onSubmitHandler(e)} className="registerbtn">Register</button>
            </div>

            <div className="container signin">
                <p>Already have an account? <a href="#ghg">Sign in</a>.</p>
            </div>
        </form>
    </article>
</React.Fragment>);

export default Std_Register;
