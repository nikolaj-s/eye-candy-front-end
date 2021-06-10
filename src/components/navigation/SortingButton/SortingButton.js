
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSortingState, toggleSorting } from '../NavigationFeature'

import "./SortingButton.css"

export const SortingButton = (props) => {

    const dispatch = useDispatch();

    const sortingState = useSelector(selectSortingState)

    return (
        <div onClick={() => {dispatch(toggleSorting())}} className="sorting-button-container">
            <div className="inner-sorting-button-container">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={sortingState ? {opacity: 0.5} : {opacity: 1}} d="M34.3782 8.68544C34.7298 8.24653 35.2064 8 35.7032 8C36.2001 8 36.6767 8.24653 37.0282 8.68544L43.9032 17.2792C44.0874 17.4938 44.2352 17.7525 44.3377 18.04C44.4402 18.3275 44.4953 18.6379 44.4997 18.9526C44.5042 19.2673 44.4578 19.5798 44.3635 19.8717C44.2692 20.1635 44.1289 20.4286 43.9508 20.6512C43.7728 20.8737 43.5607 21.0492 43.3272 21.1671C43.0938 21.2849 42.8437 21.3428 42.5919 21.3373C42.3402 21.3317 42.0919 21.2629 41.8619 21.1348C41.6319 21.0067 41.4249 20.822 41.2532 20.5917L37.5782 15.9979V43.1542C37.5782 43.7758 37.3807 44.3719 37.0291 44.8115C36.6774 45.251 36.2005 45.4979 35.7032 45.4979C35.206 45.4979 34.729 45.251 34.3774 44.8115C34.0258 44.3719 33.8282 43.7758 33.8282 43.1542V15.9979L30.1532 20.5917C29.7978 21.0057 29.3277 21.2311 28.8419 21.2204C28.3562 21.2096 27.8927 20.9637 27.5492 20.5343C27.2056 20.1048 27.0089 19.5255 27.0003 18.9183C26.9917 18.3111 27.172 17.7235 27.5032 17.2792L34.3782 8.68544V8.68544Z" fill="black"/>
                <path style={sortingState ? {opacity: 1} : {opacity: 0.5}} d="M16.7228 44.3125C17.1622 44.7514 17.7579 44.9979 18.379 44.9979C19.0001 44.9979 19.5958 44.7514 20.0353 44.3125L28.629 35.7188C28.8593 35.5042 29.044 35.2454 29.1721 34.9579C29.3002 34.6704 29.3691 34.3601 29.3746 34.0454C29.3802 33.7307 29.3223 33.4181 29.2044 33.1263C29.0865 32.8344 28.9111 32.5693 28.6885 32.3468C28.466 32.1242 28.2009 31.9487 27.909 31.8309C27.6172 31.713 27.3046 31.6551 26.9899 31.6607C26.6752 31.6662 26.3649 31.7351 26.0774 31.8632C25.7899 31.9913 25.5311 32.176 25.3165 32.4063L20.7228 37V9.84375C20.7228 9.22215 20.4759 8.62601 20.0363 8.18647C19.5968 7.74693 19.0006 7.5 18.379 7.5C17.7574 7.5 17.1613 7.74693 16.7218 8.18647C16.2822 8.62601 16.0353 9.22215 16.0353 9.84375V37L11.4415 32.4063C10.9972 31.9923 10.4096 31.7669 9.8024 31.7776C9.19521 31.7883 8.61588 32.0343 8.18647 32.4637C7.75705 32.8931 7.51108 33.4724 7.50037 34.0796C7.48965 34.6868 7.71504 35.2745 8.12904 35.7188L16.7228 44.3125V44.3125Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
}
