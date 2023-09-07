import { useEffect, useState } from "react";
import { getAll } from "../services/postsService";
import AppPost from "./AppPost";
import { deletePost } from "../services/postsService";

const AppPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAll().then(({data}) => setPosts(data));
    });

    const handleDelete = id => {
        deletePost(id);
    }

    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
            {posts.map((post, index) => {
                return (
                    <AppPost 
                        key={index}
                        post={post}
                        
                        handleDelete={handleDelete} 
                    />
                )
            })}
        </div>
    )
}

export default AppPosts;

