import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { studentsList } from "../public/db";

const Student = ()=>{
    return (
        <div>
            <Navbar/>
            <ol>
                {studentsList.map((student)=> (
                    <li>
                        <Link to="">{student.name}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default Student;