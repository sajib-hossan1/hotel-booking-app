import React from 'react';
import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className='search-item-container'>
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" />
                    </div>
                    <div className="col-md-5 p-0 pe-3">
                        <div className="mid-desc">
                            <h1>Tower Street Apartments</h1>
                            <span className="siDistance">500m from center</span>
                            <span className="siTaxiOp">Free airport taxi</span>
                            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                            <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
                            <span className="siCancelOp">Free cancellation </span>
                            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
                        </div>
                    </div>
                    <div className="col-md-3 p-0 pe-2">
                        <div className="right-dec">
                            <div className="siRating">
                                <span>Excellent</span>
                                <button>8.9</button>
                            </div>
                            <div className="siDetailTexts">
                                <span className="siPrice">$112</span>
                                <span className="siTaxOp">Includes taxes and fees</span>
                                <button className="siCheckButton">See availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;