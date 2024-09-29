import React from 'react';

const RizzScoreBox = ({ score }: { score: number }) => {
    const boxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: 'gray',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        borderRadius: '5px',
        marginRight: '10px'
    };

    return <div style={boxStyle}>{score}</div>;
};

export default RizzScoreBox;