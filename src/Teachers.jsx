import { Link, useNavigate } from "react-router-dom";
import { teachersList } from "../public/db";

function Teacher(){
    const navigate = useNavigate();
    function tec(){
        navigate('/');
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-3 bg-linear-60 from-pink-600 to-pink-800 p-8 text-white">This is the list of intelegent Teachers.</h1>
            <div className="py-3 px-5">
                <ul className="w-full flex justify-between">
                    {teachersList.map(teacher => (
                        <li key={teacher.id} className="p-2">
                            <Link className="text-2xl font-bold" to={`/details/${teacher.name}`}>{teacher.name}</Link>
                        </li>
                    ))}
                    <button className="bg-pink-600 p-4 text-white text-2xl font-bold rounded-md hover:cursor-pointer" onClick={tec}>Go to Home page</button>
                </ul>
            </div>
        </div>
    )
}
export default Teacher;