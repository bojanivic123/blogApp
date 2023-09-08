import { API } from "../shared/api";

export const getAll = () => {
    return API.get("/posts");
}

export const getPost = (id) => {
    return API.get(`/posts/${id}?filter={"include" : ["comments"]}`); 
}

export const add = (post) => {
    return API.post("/posts", post);
}

export const edit = (post, id) => {
    return API.put(`/posts/${id}`, post);
}

export const deletePost = (id) => {
    return API.delete(`/posts/${id}`);
}

export const addComment = (comment, postId) => {
    return API.post(`/posts/${postId}/comments`, comment);  
}

