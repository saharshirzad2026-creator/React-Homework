import { useEffect, useState } from "react"

export default function Testing(){
    let [list, setList] = useState([]);
    useEffect(() => {
        async function getData(){
            const data = await fetch("");
            const jsonData = await data.json();
        }
        getData();
    },[list]);
    return (
        <div>
            {bg.length === 0 && (
                <div>
                    <h1 className="text-5xl text-red-600 font-bold">No user exists</h1>
                </div>
            )}