import axios from 'axios';
import { useState, useEffect } from 'react';
const ListPage = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((res) => {
            setPosts(res.data);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    //getPosts();

    return(
        <div>{posts.map((data) => {
            return <div>{data.title}</div>
        })}</div>
    );
}
export default ListPage;