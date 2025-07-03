import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">IRC Chat</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/rooms" className="nav-link">Rooms</Link>
            <Link to="/logoff" className="nav-link">Logoff</Link>
        </div>
    </nav>
}

export default NavBar