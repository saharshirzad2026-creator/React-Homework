import { Link } from "react-router-dom";

const Navbar = ()=>{
    const navList = [
        {
            text: "Home",
            href: "/"
        },
        {
            text: "About",
            href: "/about"
        },
        {
            text: "Contact",
            href: "/contact"
        },
        {
            text: "Services",
            href: "/services"
        },
    ]
    return (
        <nav className="w-full flex justify-between py-4 px-5 bg-linear-60 from-red-700 to-red-900">
            <h1 className="text-white font-bold text-3xl">Logo</h1>
            <ul className="flex gap-3 text-xl text-white items-center">
               {navList.map((item)=>(
                <li key={item.href}>
                    <Link
                    to={item.href}
                    >
                    {item.text}
                  </Link>
                </li>
               ))}
            </ul>
        </nav>
    )
}
export default Navbar;