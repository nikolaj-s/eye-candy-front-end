import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { search } from '../../results/ResultsFeature';
import { resetStateChanged, selectAllState, selectStateChanged, setInputValue } from '../NavigationFeature'

import  "./Search.css";

export const Search = () => {

    const dispatch = useDispatch();

    const allState = useSelector(selectAllState);
    
    const history = useHistory();

    const stateChanged = useSelector(selectStateChanged);

    const searchButton = () => {

        dispatch(resetStateChanged());
        
        dispatch(search({...allState, count: 30, newSearch: true}));

        history.push(`?nsfw=${allState.nsfw}&height=${allState.height}&width=${allState.width}&gte=${allState.gte}&sorting=${allState.sorting}&query=${allState.inputValue}`)
        
        document.getElementById('search-input').blur();

    }
    

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            searchButton()
        }
    }

    return (
        <div className="input-container">
            <input id="search-input" onKeyUp={handleEnterKey} value={allState.inputValue} onChange={(e) => {dispatch(setInputValue(e.target.value))}} placeholder="Search..." type="text" />
            <div style={stateChanged ? {opacity: 1, cursor: 'pointer'} : {opacity: 0.3, cursor: 'default'}} onClick={searchButton} className="search-button">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.9062 27.586L22.1182 20.034C23.9897 17.8553 24.923 15.0608 24.7239 12.2319C24.5247 9.40296 23.2085 6.75738 21.0491 4.84551C18.8896 2.93363 16.0532 1.90267 13.1298 1.96708C10.2065 2.03149 7.42124 3.18632 5.35357 5.19133C3.2859 7.19635 2.09498 9.89717 2.02855 12.732C1.96213 15.5667 3.02531 18.3172 4.99693 20.4112C6.96856 22.5052 9.69681 23.7816 12.6141 23.9747C15.5315 24.1678 18.4133 23.2628 20.6601 21.448L28.4481 29L29.9062 27.586ZM4.125 13C4.125 11.22 4.66933 9.4799 5.68917 7.99986C6.70901 6.51982 8.15854 5.36627 9.85447 4.68508C11.5504 4.00389 13.4165 3.82566 15.2169 4.17293C17.0173 4.52019 18.6711 5.37736 19.9691 6.63603C21.2671 7.89471 22.151 9.49835 22.5092 11.2442C22.8673 12.99 22.6835 14.7996 21.981 16.4441C21.2785 18.0887 20.0889 19.4943 18.5626 20.4832C17.0363 21.4722 15.2419 22 13.4062 22C10.9455 21.9973 8.58641 21.0483 6.84643 19.361C5.10645 17.6738 4.12773 15.3861 4.125 13Z" fill="black" fillOpacity="1"/>
                </svg>
            </div>
        </div>
    )
}
