import SearchBar from "../SearchBar/SearchBar";
import { resetCharacter } from "../../Redux/Action/Actions";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


const Nav = ({ onSearch }) => {
    const dispatch = useDispatch();
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to='/about' > ABOUT</Link>
            </button>
            <button onClick={() => dispatch(resetCharacter())}>
                <Link to='/home' > HOME</Link>
            </button>
            <button>
            <Link to='/favorites' > FAVORITES</Link>
            </button>
        </nav>
    )
}
export default Nav;