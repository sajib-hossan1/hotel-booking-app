import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { faBed, faCalendarDays, faCar, faMagnet, faPerson, faPlane, faSearch, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Header.css'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult : 1,
        children: 0,
        room: 1
    });
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const handleOptions = (name, operation) => {
          setOptions((prev) => {
              return {
                  ...prev,
                  [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
              }
          });
      }
    return (
        <div className={ type === "list" ? 'header-container list-mode' : 'header-container'}>
            <div className="container">
                <div className="header-list active">
                    <span className='active'><FontAwesomeIcon className='me-1' icon={faBed} /> Stays</span>
                    <span className=''><FontAwesomeIcon className='me-1' icon={faPlane} /> Flights</span>
                    <span className=''><FontAwesomeIcon className='me-1' icon={faCar} /> Car Rentals</span>
                    <span className=''><FontAwesomeIcon className='me-1' icon={faMagnet} /> Attractions</span>
                    <span className=''><FontAwesomeIcon className='me-1' icon={faTaxi} /> Airport Taxis</span>
                </div>
                { type !== "list" && <>
                    <div className="header-desc">
                        <h1>A lifetime of discounts? It's Genius.</h1>
                        <p>Get rewarded for your travels - unlock instant savings of 10%  or more with a free BookingMania account.</p>
                    </div>
                    <div className="header-search">
                        <div className='header-search-item'>
                            <FontAwesomeIcon className='header-icon' icon={faSearch} />
                            <input type="text" className='header-search-input' placeholder='Where are you going?' />
                        </div>
                        <div className='header-search-item'>
                            <FontAwesomeIcon className='header-icon' icon={faCalendarDays} />
                            <span onClick={() => setOpenDate(!openDate)} className='header-search-text'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />}
                        </div>
                        <div className='header-search-item'>
                            <FontAwesomeIcon className='header-icon' icon={faPerson} />
                            <span onClick={() => setOpenOptions(!openOptions)} className='header-search-text'>{`${options.adult} adults - ${options.children} children - ${options.room} room`}</span>
                            {openOptions && <div className="options">
                                <div className="option-item">
                                    <span className="option-text">Adult</span>
                                    <div className="option-counter">
                                        <button disabled={options.adult === 1} className="option-counter-btn" onClick={() => handleOptions("adult", "d")}>-</button>
                                        <span className="option-counter-number">{options.adult}</span>
                                        <button className="option-counter-btn" onClick={() => handleOptions("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Children</span>
                                    <div className="option-counter">
                                        <button disabled={options.children === 0} className="option-counter-btn" onClick={() => handleOptions("children", "d")}>-</button>
                                        <span className="option-counter-number">{options.children}</span>
                                        <button className="option-counter-btn" onClick={() => handleOptions("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Room</span>
                                    <div className="option-counter">
                                        <button disabled={options.room === 1} className="option-counter-btn" onClick={() => handleOptions("room", "d")}>-</button>
                                        <span className="option-counter-number">{options.room}</span>
                                        <button className="option-counter-btn" onClick={() => handleOptions("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="header-search-item">
                            <button>Search</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default Header;