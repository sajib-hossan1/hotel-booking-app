import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Top from '../Home/Top/Top';
import './List.css'
import SearchItem from '../SearchItem/SearchItem';

const List = () => {
    const location = useLocation();
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    return (
        <div>
            <Top></Top>
            <Header type="list"></Header>
            <div className="container list-search-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="list-search">
                            <h3>Search</h3>
                            <div className="search-items">
                                <div className="search-item">
                                    <label>Destination</label>
                                    <br />
                                    <input type="text" placeholder={destination} />
                                </div>
                                <div className="search-item">
                                    <label>Check in Date</label>
                                    <br />
                                    <p onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
                                    { openDate && <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                    ></DateRange>}
                                </div>
                                <div className="list-options mt-3">
                                    <h5>Options</h5>
                                    <div>
                                        <span className='m-0'>Min Price Per Night</span>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <span className='m-0'>Max Price Per Night</span>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <span>Adult</span>
                                        <input type="number" min={1} placeholder={options.adult}/>
                                    </div>
                                    <div>
                                        <span>Children</span>
                                        <input type="number" min={0} placeholder={options.children}/>
                                    </div>
                                    <div>
                                        <span>Room</span>
                                        <input type="number" min={1} placeholder={options.room}/>
                                    </div>
                                </div>
                                <button className='list-search-btn'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;