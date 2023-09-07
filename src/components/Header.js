import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={"/posts"}>Posts</Link>
            <Link to={"/add"}>Add</Link> 
        </div>
    )
}

export default Header;



