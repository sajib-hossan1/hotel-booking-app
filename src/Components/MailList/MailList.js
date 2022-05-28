import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
        <div className='mail-container'>
            <div className='container'>
                <div className="mail-details">
                    <div className='text-center'>
                        <h3>Save time, save money!</h3>
                        <p>Sign up and we'll send the best deals to you</p>
                    </div>
                    <form>
                        <input type="email" placeholder='Your Email' />
                        <input type="submit" value="Subscribe" />
                        <br />
                        <input type="checkbox" id="mail-chechbox" />
                        <label className='ms-1' htmlFor="mail-chechbox">Send me a link to get the FREE Booking.com app!</label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MailList;