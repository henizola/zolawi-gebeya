import React from 'react';
import './custom-button.styles.scss';


const CoustoButton = ({children,isGoogleSignIn,inverted,...otherProps}) =>{
    return(
        <div className={`${inverted? 'inverted':''} ${isGoogleSignIn? 'google':''} custom-button`} {...otherProps}>
                    {children}
        </div>
    )
}
export default CoustoButton;