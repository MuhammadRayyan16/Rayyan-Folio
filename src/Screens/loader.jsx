import React from 'react';
import '../Screens/Css/loader.css';

const Loader = () => {
    return (

        <div className="loader-container">
            <div className="loader">
                <div className="intern">
                </div>
                <div className="external-shadow">
                    <div className="central">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;