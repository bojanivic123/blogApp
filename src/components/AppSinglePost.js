import { useEffect, useState } from "react";
import { getPost } from "../services/postsService";
import { useParams } from "react-router-dom";

const AppSinglePost = () => {
    const {id} = useParams(); 
    const [currentPost, setCurrentPost] = useState({});
    useEffect(() => {
        getPost(id).then(({data}) => setCurrentPost(data));
    });

    return (
        <div>
            <h1>{currentPost.title}</h1>
            <p>{currentPost.text}</p>
        </div>
    )
}

export default AppSinglePost;




