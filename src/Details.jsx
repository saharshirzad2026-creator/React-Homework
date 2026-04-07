import { useParams } from "react-router-dom"
import { studentsList } from "../public/db"
export default function Details(){
    const {id} = useParams();
    const data = studentsList.find(student => student.id == id);
    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Score: {data.score}</p>
            <p>Grade: {data.grade}</p>
            <p>Detaills: {data.details}</p>
        </div>
    )
}