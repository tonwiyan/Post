import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Post = (props) => {
    const { title, id } = props.post;
    const postStyle = {
        border: '1px solid gray',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={postStyle}>
            <h2>Title:{title}</h2>
            <Link to={`/post/${id}`}>
                <Button variant="contained" color="primary">
                    Details of {id}
                </Button>

            </Link>
        </div>
    );
};

export default Post;