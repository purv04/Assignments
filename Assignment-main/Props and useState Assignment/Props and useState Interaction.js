import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
    const [count, setCount] = useState(likeCount);

    return (
        <div>
            <p>Likes: {count}</p>
            <button onClick={() => setCount(count + 1)}>Like</button>
        </div>
    );
};

export default LikeButton;
