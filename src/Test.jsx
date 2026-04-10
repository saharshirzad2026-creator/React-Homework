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
            {list.length > 0 &&(
                <div className="max-w-6xl mx-auto">
                    <table className="border w-full">
                        <tr>
                            <th className="border py-1 px-3 text-center">Name</th>
                            <th className="border py-1 px-3 text-center">Email</th>
                            <th className="border py-1 px-3 text-center">Phone Number</th>
                        </tr>
                        {list.map(user=>(
                            <tr>
                                <td className="border py-1 px-3 text-center">{user.name}</td>
                                <td className="border py-1 px-3 text-center">{user.email}</td>
                                <td className="border py-1 px-3 text-center">{user.phone}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}
        </div>
    )
}