import React from 'react';

import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice'; 

const Header = ({selector}) => {

    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        dispatch(changeTheme());
    }


    return (
        <header className="sombra">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="form-check form-switch mt-3 mt-lg-0">
                            <input onChange={toggleTheme} checked={selector.isChecked} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{selector.mode} Mode</label>
                        </div>
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