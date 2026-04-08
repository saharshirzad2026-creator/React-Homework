import { useNavigate, useParams } from "react-router-dom"
import { teachersList } from "../public/db";

export function Detailspage(){
    const navigate = useNavigate();
    function detail(){
        navigate('/teachers');
    }
    const {name} = useParams();
    const findTeacher = teachersList.find((t) =>{
        return t.name === name
    })
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-3 bg-linear-60 from-pink-600 to-pink-800 p-8 text-white">This is the details page of Teachers.</h1>
            <button className="text-center text-2xl font-bold bg-pink-700 p-3 rounded-md text-white hover:cursor-pointer mx-96" onClick={detail}>Go to Teachers page</button>
            <h1 className="text-2xl font-bold mx-12 text-justify text-pink-600">{findTeacher.name}</h1>
            <h1 className="text-2xl font-bold mx-12 text-justify text-pink-600">{findTeacher.lastName}</h1>
            <h1 className="text-2xl font-bold mx-12 text-justify text-pink-600">{findTeacher.age}</h1>
            <h1 className="text-2xl font-bold mx-12 text-justify text-pink-600">{findTeacher.description}</h1>
        </div>
    )
}