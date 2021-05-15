import React from 'react';
import PropTypes from 'prop-types';
import SlideList from './components/SildeList';

SlideFeature.propTypes = {
    
};

function SlideFeature(props) {
    const slideList = [
        {
            id: 1,
            images: "https://www.sotonyc.com/wp-content/uploads/2020/10/logo-liverpool.jpg",
        },
        {
            id: 2,
            images: "http://www.lolasrestaurants.com/wp-content/uploads/2020/02/logo-chelsea.jpg",
        },
        {
            id: 3,
            images: "https://www.sotonyc.com/wp-content/uploads/2020/10/logo-arsenal.jpg",
        },
        {
            id: 4,
            images: "https://www.sotonyc.com/wp-content/uploads/2020/10/logo-mu.jpg",
        },
        {
            id: 5,
            images: "https://www.sotonyc.com/wp-content/uploads/2020/10/logo-man-city.jpg",
        },
    ];
    return (
        <div>
            < SlideList slideList={slideList}/>
        </div>
    );
}

export default SlideFeature;