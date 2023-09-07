import { Link } from "react-router-dom"; 

const AppPost = ({post, handleDelete}) => {
    return (
        <p>{post.text} <Link to={`/post/${post.id}`}>View Post</Link>  <Link to={`/edit/${post.id}`}><button>Edit</button></Link> <button onClick={() => handleDelete(`${post.id}`)}>Delete</button> </p> 
    )
}

export default AppPost;





