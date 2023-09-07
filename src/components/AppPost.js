import { Link } from "react-router-dom"; 

const AppPost = ({post, handleDelete}) => {
    return (
        <p style={{ marginBottom: "10px", padding: "10px", border: "1.5px solid white", backgroundColor: "yellow" }}>{post.text} <Link to={`/post/${post.id}`}><button style={{ padding: "6px 14px", backgroundColor: "red", border: "none", borderRadius: "3.5px", marginBottom: "12px" }}>View Post</button></Link>  <Link to={`/edit/${post.id}`}><button style={{ padding: "6px 14px", backgroundColor: "red", border: "none", borderRadius: "3.5px", marginBottom: "12px" }}>Edit</button></Link> <button style={{ padding: "6px 14px", backgroundColor: "red", border: "none", borderRadius: "3.5px", marginBottom: "12px" }} onClick={() => handleDelete(`${post.id}`)}>Delete</button> </p> 
    )
}

export default AppPost;

