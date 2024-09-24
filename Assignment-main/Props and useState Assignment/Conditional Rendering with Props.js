import React from 'react';

const StatusMessage = ({ status }) => {
    return (
        <div>
            {status === 'success' ? 'Operation was successful' : 
             status === 'error' ? 'There was an error' : 
             'Unknown status'}
        </div>
    );
};

export default StatusMessage;
