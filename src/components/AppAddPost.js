import { useEffect, useState } from "react";
import { add } from "../services/postsService";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../services/postsService"; 
import { edit } from "../services/postsService"; 

const AppAddPost = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    const navigate = useNavigate();

    const {id} = useParams(); 

    useEffect(() => {
        if (id) {
            getPost(id);
        }
    });

    const handleSubmit = e => {
        if (id) {
            e.preventDefault();
            edit({title, text, createdAt}, id);
            navigate("/posts");
            return;
        }
        e.preventDefault();
        add({title, text, createdAt}); 
        navigate("/posts") 
    }

    const handleReset = () => {
        setTitle("");
        setText("");
        setCreatedAt(""); 
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                <label>Text</label>
                <input type="text" maxLength={300} value={text} onChange={e => setText(e.target.value)} required />
                <label>Created at</label>
                <input type="text" value={createdAt} onChange={e => setCreatedAt(e.target.value)} required />
                <button type="submit">Add post</button> 
                <button type="reset" onClick={() => handleReset()}>Reset</button> 
            </form>
        </div>
    )
}

export default AppAddPost;

