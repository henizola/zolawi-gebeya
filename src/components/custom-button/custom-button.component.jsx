import React from 'react';
import './custom-button.styles.scss';


const CoustoButton = ({children,isGoogleSignIn,...otherProps}) =>{
    return(
        <div className={`${isGoogleSignIn? 'google':''} custom-button`} {...otherProps}>
                    {children}
        </div>
    )
}
export default CoustoButton;