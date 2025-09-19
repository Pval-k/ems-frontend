import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            console.log('Employees data:',response.data);
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

    console.log(listEmployees);

    // const employees = [
    //     {
    //     "id": 1,
    //     "firstNmae": "First",
    //     "lastName": "Last",
    //     "email": "gmail"
    //     },
    //     {
    //         "id": 2,
    //         "firstNmae": "First2",
    //         "lastName": "Last2",
    //         "email": "gmail2"
    //     },
    //     {
    //         "id": 3,
    //         "firstNmae": "First3",
    //         "lastName": "Last3",
    //         "email": "gmail3"
    //     }
    // ]
        
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>

                </tr>)
            }
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
