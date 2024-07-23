import React from 'react';
import './loader.css'; // CSS file for loader styling

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