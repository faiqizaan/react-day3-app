import { NavLink, Link } from 'react-router-dom'
import { House, ArrowDownRight, SquareDashedBottomCode, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import '../css/navbar.css';

function Navbar(){
    const [collapsed, setCollapsed] = useState(false);

    const homeIcon = () => <House size={14} style={{paddingRight:"5px"}}/>
    const arrowIcon = () => <ArrowDownRight size={14} style={{paddingRight:"5px"}}/>
    const specialIcon = () => <SquareDashedBottomCode size={14} style={{paddingRight:"5px"}}/>

    return (
        <>
        <nav className={`navbar ${collapsed ? "collapsed" : ""}`}>
            <div className="navbar-header">
                {!collapsed && <span className="navbar-title">🌐 My Day 3 App</span>}
            </div>

            <ul className="navbar-menu">
                <li><NavLink to="/">{homeIcon()}{!collapsed && "Home"}</NavLink></li>
                <li><NavLink to="/about">{arrowIcon()}{!collapsed && "About"}</NavLink></li>
                <li><NavLink to="/contact">{arrowIcon()}{!collapsed && "Contact"}</NavLink></li>
                <li><NavLink to="/pokemon">{specialIcon()}{!collapsed && "Pokemon"}</NavLink></li>
                <li><NavLink to="/superhero">{specialIcon()}{!collapsed && "Superheroes"}</NavLink></li>
                <li><NavLink to="/cat">{specialIcon()}{!collapsed && "Cats"}</NavLink></li>
                <li><NavLink to="/color">{specialIcon()}{!collapsed && "Color"}</NavLink></li>
                <li><NavLink to="/ghibli">{specialIcon()}{!collapsed && "Ghibli Films"}</NavLink></li>
                <li><Link to="/about">{specialIcon()}{!collapsed && "Test Link"}</Link></li>
                <li><NavLink to="/news">{specialIcon()}{!collapsed && "News"}</NavLink></li>
                <li><NavLink to="/counter">{specialIcon()}{!collapsed && "Counter"}</NavLink></li>
                <li><NavLink to="/name-saver">{specialIcon()}{!collapsed && "Name Saver"}</NavLink></li>
                <li><NavLink to="/window-size">{specialIcon()}{!collapsed && "Window Size"}</NavLink></li>
                <li><NavLink to="/fetch-user">{specialIcon()}{!collapsed && "Fetch Users"}</NavLink></li>
                
            </ul>
        </nav>

        <button
        className={`navbar-toggle-floating ${collapsed ? "collapsed" : ""}`}
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle Sidebar"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
      </>
    )
}

export default Navbar