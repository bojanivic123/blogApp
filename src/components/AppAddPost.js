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
        navigate("/posts");
    }

    const handleReset = () => {
        setTitle("");
        setText("");
        setCreatedAt(""); 
    }

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}> 
            <form onSubmit={e => handleSubmit(e)} style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginBottom: "8px" }}>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={{ padding: "8px", marginBottom: "12px", border: "1px solid red", borderRadius: "3px" }} required />
                <label style={{ marginBottom: "8px" }}>Text</label>
                <input type="text" maxLength={300} value={text} onChange={e => setText(e.target.value)} style={{ padding: "8px", marginBottom: "12px", border: "1px solid red", borderRadius: "3px" }} required />
                <label style={{ marginBottom: "8px" }}>Created at</label>
                <input type="text" value={createdAt} onChange={e => setCreatedAt(e.target.value)} style={{ padding: "8px", marginBottom: "12px", border: "1px solid red", borderRadius: "3px" }} required />
                <button style={{ padding: "10px 20px", backgroundColor: "pink", border: "none", borderRadius: "3.5px", marginBottom: "12px" }} type="submit">Add post</button> 
                <button style={{ padding: "10px 20px", backgroundColor: "pink", border: "none", borderRadius: "3.5px", marginBottom: "12px" }} type="reset" onClick={() => handleReset()}>Reset</button> 
            </form>
        </div>
    )
}

export default AppAddPost;

