import React from 'react';

import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

const Header = ({selector}) => {

    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        dispatch(changeTheme());
    }


    return (
        <header className='sombra'>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <label className={`${selector.isChecked ? "" : "opcTheme"} form-check-label mt-3`} htmlFor="flexSwitchCheckDefault"><FontAwesomeIcon icon={faSun} size='xl' /></label>
                        <div className="form-check form-switch mt-3 mt-lg-0 ms-2">
                            
                            <input onChange={toggleTheme} checked={selector.isChecked} className="sombra_btn form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            
                        </div>
                        <label className={`${selector.isChecked ? "opcTheme" : ""} form-check-label mt-3`} htmlFor="flexSwitchCheckDefault"><FontAwesomeIcon icon={faMoon} size='xl' /></label>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-4">
                        <h1 className='py-4 text-center'>My Earrings</h1>
                    </div>
                </div>    
            </div>
        </header>
    )
}

export default Header;