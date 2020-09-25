import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const PostDetail = () => {
    const { postId, title, body } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])
    return (
        <Container maxWidth="sm">
            <div>
                <h2>Details: {postId}</h2>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
            </div>
        </Container>
    );
};

export default PostDetail;