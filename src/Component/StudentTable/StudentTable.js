import React from 'react';

const StudentTable = (props) => (<React.Fragment>
    <div className="std_admin"><table>
        <tr className="table-header">
            <th>Student_Id </th>
            <th>Student_Name</th>
            <th>Student_Email </th>
            <th>Student_Delete </th>
        </tr>
        {props.all_student_records.map((val, i) => {
            return <tr key={i}>
                <td>{val.std_id}</td>
                <td>{val.std_name}</td>
                <td>{val.std_email}</td>
                <td><button type="submit" onClick={(e) => props.onDeleteStudent(e, val.std_id)} className="delete-std" >delete</button></td>
            </tr>
        })}
    </table></div></React.Fragment>
);

export default StudentTable;