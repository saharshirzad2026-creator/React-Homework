import { useState } from "react"
import SecondPractice from "./SecondPractice";

function Practice(){
    const [value, setValue] = useState(0);
    return (
        <div className="w-full flex justify-between px-12 my-40">
            <button onClick={()=> setValue(value+1)} className="border-2 px-4 py-4 bg-green-400 rounded-md border-green-600 font-bold">Increment</button>
            <h1 className="border rounded-full bg-green-400 border-green-600 px-6 py-4 font-bold text-xl">{value}</h1>
            <button onClick={()=> setValue(value-1)} className="border-2 px-4 py-4 bg-green-400 rounded-md border-green-600 font-bold">Decrement</button>
            <SecondPractice/>
        </div>
    )
}
export default Practice;