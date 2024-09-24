import React from 'react';

const ProfileCard = ({ name, age, location }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};

export default ProfileCard;
