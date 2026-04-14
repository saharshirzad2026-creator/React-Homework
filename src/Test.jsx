import { useEffect, useState } from "react"

export default function Testing(){
    let [list, setList] = useState([]);
    useEffect(() => {
        async function getData(){
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData = await data.json();
            setList(jsonData);
        }
        getData();
    },[list]);
    return (
        <div>
            {list.length === 0 && (
                <div>
                    <h1 className="text-5xl text-red-600 font-bold">No user exists</h1>
                </div>
            )}
            {list.length > 0 &&(
                <div className="max-w-6xl mx-auto rounded-md shadow-2xl shadow-gray-400">
                    <table className="border rounded-xl w-full shadow-2xl shadow-gray-500">
                        <tr>
                            <th className="border py-1 px-3 rounded-md text-center">Name</th>
                            <th className="border py-1 px-3 rounded-md text-center">Email</th>
                            <th className="border py-1 px-3 rounded-md text-center">Phone Number</th>
                        </tr>
                        {list.map((user)=>(
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