import React from 'react';

import { useSelector } from 'react-redux';

const Header = () => {

    const selector = useSelector(state => state.theme);

    return (
        <header className="sombra">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="form-check form-switch mt-3 mt-lg-0">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
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