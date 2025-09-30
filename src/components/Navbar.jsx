import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">UDEMY COURSE FOR KALI LINUX</Link>
    </nav>
  );
}

export default Navbar;
