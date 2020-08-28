import React from 'react';
import './index.scss';

const Preloader = () => {
    return (
        <div className="preloader-wrapper">
            <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Preloader;
