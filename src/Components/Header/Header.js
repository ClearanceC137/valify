import "./Header.css";      //importing style sheet
import MenuIcon from '@mui/icons-material/Menu';
import { useContext} from 'react';            //importing required artifacts from react
import { EmailContext } from '../../context';           //importing global email context for user logged in
import { useNavigate } from 'react-router-dom';             //importing required artifacts from react-router-dom
function Header(email) {
    let navigate = useNavigate();               //navigator used to navigate between pages
    const { userEmail, setUserEmail } = useContext(EmailContext);           //global state to be set to user after successful login
    const routeLogout = () => {             //logs out the user
        navigate('/');           //passes state of user logged in
    }
  return (
    <div className="header-p">
        <h1 className="logo-header" >VALIFY</h1>
        <div class="dropdown">
            <button className="d-button"><MenuIcon/></button>
            <div class="dropdown-options">
                <a  href="#">{userEmail}</a>
                <a href="#">About</a>
                <a href="#"  onClick={routeLogout}>Logout</a>
            </div>
        </div>
    </div>
  );
}

export default Header;