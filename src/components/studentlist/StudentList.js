import { useEffect, useState } from "react";

function StudentList(props) {

    // setup state to hold the list of students
    const [students, setStudents] = useState([])

    // this will run our getStudents method when the component loads on the screen
    useEffect(() => {

        //get the students from the API by callig the getStudents method 
        // defined below
        getStudents();


    }, [])

    const getStudents = () => {
        // make a fetch request to the endpoint for all the students
        fetch('http://localhost:5000/api/students')
            .then((result) => result.json())
            // pass setStudents the new list from the API
            .then((students) => {
                setStudents(students)
            })
    }

    return (
        <div className="StudentList">
            <ul>
                
                {students.map((student) => {

                    // create the <li> wth the students id and name
                   return <li> {student.id} - {student.first_name} {student.last_name}</li>
                
                })}
            </ul>
        </div>

    );
}

export default StudentList;