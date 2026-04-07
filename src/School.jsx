import { Link } from "react-router-dom";
import { schoolsList } from "../public/db";

export default function School(){
    return (
        <div className="w-full flex justify-between bg-linear-60 from-green-600 to-green-800 p-3">
            <h1 className="text-2xl text-white my-4 font-bold">This is the Schools That I know there names, managers and some details about them.</h1>
            <ul className="text-xl text-white font-bold">
                {schoolsList.map(school => (
                    <li>
                        <Link key={school.id} to={`/school/${school.name}`}>{school.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}