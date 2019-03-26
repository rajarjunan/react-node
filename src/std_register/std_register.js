import React, { Component } from 'react';
import axios from 'axios';
import './std_register.css';
// import HelloWorldList from './HelloWorldList';

class Std_Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegisterPage: false,
            isAdmin: false,
            std_name: '',
            std_id: '',
            std_email: '',
            std_pwd: '',
            std_records: [],
            all_student_records: [],
        }
    }

    registrationHandler = () => {
        this.setState({ isRegisterPage: !this.state.isRegisterPage, isAdmin: false, all_student_records: [] });
    }
    studentAdminHandler = () => {
        this.setState({ isAdmin: !this.state.isAdmin, isRegisterPage: false, std_records: [] });
    }
    onNameHandler = (e) => {
        this.setState({ std_name: e.target.value })
    }
    onStdIdHandler = (e) => {
        this.setState({ std_id: e.target.value })
    }
    onEmailHandler = (e) => {
        this.setState({ std_email: e.target.value })
    }
    onPwdHandler = (e) => {
        this.setState({ std_pwd: e.target.value })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const { std_name, std_id, std_email, std_pwd } = this.state;
        console.log('Submit:::::::::::::', std_name, std_id, std_email, std_pwd)
        axios.post(`http://localhost:5000/registration`, { std_name, std_id, std_email, std_pwd })
            .then(res => {
                const persons = res.data;
                this.registrationHandler();
                this.setState({ std_records: persons });
            });
    }

    getStudentDetails = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/student`)
            .then(res => {
                this.setState({ all_student_records: res.data, isAdmin: false });
            });
    }
    onDeleteStudent = (e, val) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/delete/${val}`).then(res => {
            let { all_student_records } = this.state;
            all_student_records = all_student_records.filter(val => val.std_id !== res.data.std_id)
            this.setState({ all_student_records });
        }).catch(error => alert(error))
    }

    render() {
        const { isRegisterPage, std_records, all_student_records, isAdmin } = this.state;
        console.log('all_student_records:::::::::::', all_student_records);
        return (
            <div>
                <section>
                    <nav>
                        <ul>
                            <li><a onClick={() => this.registrationHandler()} className="std-registration">Registration</a></li>
                            <li><a onClick={() => this.studentAdminHandler()} className="std-profile">School Admin</a></li>
                            <li><a className="std-registration">Contact</a></li>
                            <li><a className="std-profile">About</a></li>
                        </ul>
                    </nav>

                    {isRegisterPage && <article>
                        <form>
                            <div className="container">
                                <h1>Student Register</h1>
                                <p>Please fill in this form to create an student account.</p>
                                <hr />
                                <label for="name"><b>Name</b></label>
                                <input type="text" onChange={this.onNameHandler} placeholder="Enter name" name="name" required />
                                <label for="std-id"><b>Std.Id</b></label>
                                <input type="text" onChange={this.onStdIdHandler} placeholder="Enter std-id" name="stud-id" required />
                                <label for="email"><b>Email</b></label>
                                <input type="text" onChange={this.onEmailHandler} placeholder="Enter Email" name="email" required />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" onChange={this.onPwdHandler} placeholder="Enter Password" name="psw" required />

                                <hr />
                                <p>By creating an account you agree to our <a href="#fsf">Terms Privacy</a>.</p>

                                <button type="submit" onClick={(e) => this.onSubmitHandler(e)} className="registerbtn">Register</button>
                            </div>

                            <div className="container signin">
                                <p>Already have an account? <a href="#ghg">Sign in</a>.</p>
                            </div>
                        </form>
                    </article>}
                    {(all_student_records.length > 0 && !isAdmin) && (<div className="std_admin"><table>
                        <tr className="table-header">
                            <th>Student_Id </th>
                            <th>Student_Name</th>
                            <th>Student_Email </th>
                            <th>Student_Delete </th>
                        </tr>
                        {all_student_records.map((val, i) => {
                            return <tr key={i}>
                                <td>{val.std_id}</td>
                                <td>{val.std_name}</td>
                                <td>{val.std_email}</td>
                                <td><button type="submit" onClick={(e) => this.onDeleteStudent(e, val.std_id)} className="delete-std" >delete</button></td>
                            </tr>
                        })}
                        </table></div>)}
                    {isAdmin && <div className="std_admin"><button type="submit" onClick={(e) => this.getStudentDetails(e)} className="all_std_details">All Student Details</button></div>}
                    {std_records.length > 0 && !isRegisterPage && <div id="success-msg">{std_records[0].std_name} details submitted successfully</div>}
                </section>
            </div>

        );
    }
};

export default Std_Register;