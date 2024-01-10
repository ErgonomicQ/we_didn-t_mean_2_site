import React from 'react';
import bannerImage from '..style/images/WDM2_LOGO_POCKET.png';

const Banner = () => {
    return (
        <header className='banner-container'>
            <img src={bannerImage} alt="Banner Image" />

            <div className='specialFont text-container'>
                <p>We Didn't Mean 2</p>
            </div>
        </header>
    );
};

export default Banner;