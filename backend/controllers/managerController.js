import Manager from '../models/employee.model.js'

export default function test(){
    console.log('Manager Controller is working');
}

Manager.create({
    name: 'Alvaro Esparza',
    email: 'alvaro@gmail.com',
    position: 'Manager',
    department: 'Management',
    salary: 100000
})
