import { useParams } from "react-router-dom"
import { schoolsList } from "../public/db"
import School from "./School";
export default function SchoolDetails(){
    const {name} = useParams();
    const information = schoolsList.find(schools => schools.name == name);
    return (
        <div className="justify-center items-center mx-auto">
            <School/>
            <h1 className="text-center text-green-700 text-3xl font-bold my-8">This is the details page of schools.</h1>
            <h1 className="w-6/12 items-center justify-center mx-[396px] bg-linear-60 from-green-500 to-green-700 text-transparent bg-clip-text text-2xl font-bold py-2">SchoolName: {information.name}</h1>
            <h1 className="w-6/12 items-center justify-center mx-[396px] bg-linear-60 from-green-500 to-green-700 text-transparent bg-clip-text text-2xl font-bold py-2">ManagerName: {information.manager}</h1>
            <h1 className="w-6/12 items-center justify-center mx-[396px] bg-linear-60 from-green-500 to-green-700 text-transparent bg-clip-text text-2xl font-bold py-2">Details: {information.details}</h1>
        </div>
    )
}