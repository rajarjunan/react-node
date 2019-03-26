import React, { Component } from 'react';
import axios from 'axios';
import './Std_Application.css';
import Nav_Menu from '../Nav_Menu/Nav_Menu';
import Std_Register from '../Std_Register/Std_Register'
import StudentTable from '../StudentTable/StudentTable';

class Std_Application extends Component {
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
        return (
            <div>
                <section>
                    <Nav_Menu registrationHandler={this.registrationHandler} studentAdminHandler={this.studentAdminHandler} />
                    {isRegisterPage && <Std_Register onSubmitHandler={this.onSubmitHandler}
                        onNameHandler={this.onNameHandler}
                        onStdIdHandler={this.onStdIdHandler}
                        onEmailHandler={this.onEmailHandler}
                        onPwdHandler={this.onPwdHandler}
                    />}
                    {(all_student_records.length > 0 && !isAdmin) && <StudentTable onDeleteStudent={this.onDeleteStudent} all_student_records={all_student_records} />}
                    {isAdmin && <div className="std_admin"><button type="submit" onClick={(e) => this.getStudentDetails(e)} className="all_std_details">All Student Details</button></div>}
                    {std_records.length > 0 && !isRegisterPage && <div id="success-msg">{std_records[0].std_name} details submitted successfully</div>}
                </section>
            </div>

        );
    }
};

export default Std_Application;