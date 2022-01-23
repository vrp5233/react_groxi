import React, { Children } from 'react';
import FooterComponent from '../component/Footer';
import NavigationComponent from '../component/Navigation';

const Base = ({ children }) => {
    return (
        <div>
            <NavigationComponent />
            {children}
            <FooterComponent />
        </div>
    )
}

export default Base;
