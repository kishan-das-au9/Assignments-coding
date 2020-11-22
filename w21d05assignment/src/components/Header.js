import './Header.css';
import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
        <header>
            <h2>{props.title}</h2>
            <Link to="/home">Home  </Link>
                <Link to="/info">About </Link>
                <Link to="/Footer">Footer</Link>
            
        </header>
    );
};

export default Header;
