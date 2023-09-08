import { useEffect, useState } from "react";
import { getPost } from "../services/postsService";
import { useParams } from "react-router-dom"; 

const AppSinglePost = () => {
    const {id} = useParams(); 
    const [currentPost, setCurrentPost] = useState({}); 
    useEffect(() => {
        getPost(id).then(({data}) => setCurrentPost(data));
    }, [id]);

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: "green", borderRadius: "5px" }}>
            <h1 style={{ marginBottom: "10px" }}>{currentPost.title}</h1>
            <p style={{ fontSize: "16px" }}>{currentPost.text}</p>
        </div>
    )
}

export default AppSinglePost;

