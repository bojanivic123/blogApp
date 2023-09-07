import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "lightgrey", padding: "10px" }}>
            <Link style={{ textDecoration: "none" }} to={"/posts"}>Posts</Link>
            <Link style={{ textDecoration: "none" }} to={"/add"}>Add</Link> 
        </div>
    )
}

export default Header;





