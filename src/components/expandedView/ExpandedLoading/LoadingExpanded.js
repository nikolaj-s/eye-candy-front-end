

import React from 'react'

import "./LoadingExpanded.css"

export const LoadingExpanded = () => {
    return (
        <div className="loading-expanded-container">
            <div className="inner-loading-expanded-container">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.3964 8.75C17.0993 7.00345 16.1937 5.41838 14.84 4.2755C13.4862 3.13262 11.7718 2.50567 10.0001 2.50567C8.22848 2.50567 6.51399 3.13262 5.16028 4.2755C3.80656 5.41838 2.90097 7.00345 2.60387 8.75H1.33887C1.64173 6.66902 2.6837 4.76665 4.27416 3.39092C5.86461 2.01518 7.89722 1.25806 10.0001 1.25806C12.103 1.25806 14.1356 2.01518 15.7261 3.39092C17.3165 4.76665 18.3585 6.66902 18.6614 8.75H17.3964Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
}
