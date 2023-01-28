import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const CircularLoading = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
            }}
        >
            <CircularProgress />
        </div>
    )
}

export default CircularLoading