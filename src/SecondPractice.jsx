import { useState } from "react";

function SecondPractice(){
    const [value, setValue] = useState("");
    return (
        <div className="flex flex-col gap-2.5">
            <input value={value} onChange={(e)=>setValue(e.target.value)} className="border-2 border-green-500 focus:outline-0 rounded-md py-2 px-4 w-full" type="text" />
            <h1 className="text-2xl text-red-600 font-bold">{value}</h1>
        </div>
    );
}
export default SecondPractice;