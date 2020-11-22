import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/info">About</Link></li>
                <li><Link to="/footer">Footer</Link></li>
                
            </ul>
        </nav>
    );
};

export default Sidebar;
