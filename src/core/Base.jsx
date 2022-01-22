import React, { Children } from 'react';
import FooterComponent from '../component/footer';
import NavigationComponent from '../component/navigation';

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
