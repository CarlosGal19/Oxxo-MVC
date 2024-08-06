import Employee from '../models/employee.model.js'

export default function test(){
    console.log('Employee Controller is working');
}

Employee.create({
    name: 'John Doe',
    email: 'john@gmail.com',
    position: 'Software Engineer',
    department: 'Engineering',
    salary: 50000
})
