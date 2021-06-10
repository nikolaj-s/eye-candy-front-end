import React from 'react'

import "./MobileMenuButton.css"

export const MobileMenuButton = (props) => {
    return (
        <div onClick={props.toggleMobileMenuFunc} className="mobile-navigation-button">
            <div className="inner-mobile-nav-button">
                <svg width="42" height="39" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 3.25C0 2.38805 0.31607 1.5614 0.87868 0.951904C1.44129 0.34241 2.20435 0 3 0H39C39.7957 0 40.5587 0.34241 41.1213 0.951904C41.6839 1.5614 42 2.38805 42 3.25C42 4.11195 41.6839 4.9386 41.1213 5.5481C40.5587 6.15759 39.7957 6.5 39 6.5H3C2.20435 6.5 1.44129 6.15759 0.87868 5.5481C0.31607 4.9386 0 4.11195 0 3.25Z" fill="black" fillOpacity="1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 19.5C0 18.638 0.31607 17.8114 0.87868 17.2019C1.44129 16.5924 2.20435 16.25 3 16.25H39C39.7957 16.25 40.5587 16.5924 41.1213 17.2019C41.6839 17.8114 42 18.638 42 19.5C42 20.362 41.6839 21.1886 41.1213 21.7981C40.5587 22.4076 39.7957 22.75 39 22.75H3C2.20435 22.75 1.44129 22.4076 0.87868 21.7981C0.31607 21.1886 0 20.362 0 19.5Z" fill="black" fillOpacity="1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 35.75C0 34.888 0.31607 34.0614 0.87868 33.4519C1.44129 32.8424 2.20435 32.5 3 32.5H39C39.7957 32.5 40.5587 32.8424 41.1213 33.4519C41.6839 34.0614 42 34.888 42 35.75C42 36.612 41.6839 37.4386 41.1213 38.0481C40.5587 38.6576 39.7957 39 39 39H3C2.20435 39 1.44129 38.6576 0.87868 38.0481C0.31607 37.4386 0 36.612 0 35.75Z" fill="black" fillOpacity="1"/>
                </svg>
            </div>
        </div>
    )
}
