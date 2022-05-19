import React from 'react';
import './Top.css'

const Top = () => {
    return (
        <div className='top-container'>
            <div className="container">
                <div className='top-inside'>
                    <p className='m-0'>BookingMania</p>
                    <div className="top-btn">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;