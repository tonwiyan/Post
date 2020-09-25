import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Container from '@material-ui/core/Container';


const Home = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));

    })
    return (
        <Container maxWidth="sm">
            <div>
                <h1>length: {posts.length}</h1>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </Container>
    );
};

export default Home;