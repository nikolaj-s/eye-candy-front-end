
import React from 'react'

import "./SideBar.css"

import {useDispatch, useSelector} from 'react-redux'
import { selectFeaturedTags, selectIcon } from './SideBarFeature'
import { setInputValue } from '../navigation/NavigationFeature'
import { selectTitle } from '../results/ResultsFeature'

export const SideBar = () => {

    const dispatch = useDispatch()

    const featuredTags = useSelector(selectFeaturedTags);

    const icon = useSelector(selectIcon)

    const title = useSelector(selectTitle);

    const goToTag = (tag) => {
        if (title === tag) {
            return
        }

        const mobileMenuActive = document.getElementById('close-mobile-menu-button');
        
        if (mobileMenuActive !== undefined && mobileMenuActive !== null) {
            mobileMenuActive.click()

            setTimeout(() => {
                
                dispatch(setInputValue(tag))
                setTimeout(() => {
                    document.getElementsByClassName('search-button')[0].click()
                }, 100)
            }, 200)

            return;
        }

        dispatch(setInputValue(tag))
        setTimeout(() => {
            document.getElementsByClassName('search-button')[0].click()
        }, 100)
        
    }

    const goHome = () => {
        window.location.pathname = "/"
        window.location.search = ""
    }

    const goTo = () => {
        window.open('https://norxwestdesigns.ca/')
    }

    return (
        <>
            <div className="side-bar">
                <div className="side-bar-title-container" onClick={goHome}>
                    <h1>EYE Candy</h1>
                </div>
                {
                featuredTags.map((tag, i) => {
                    return (
                        <div onClick={(e) => {goToTag(tag)}} style={title === tag ? {filter: "invert()", cursor: 'default'} : null} key={i} className="tag-button">
                            <h1>#{tag}</h1>
                        </div>
                    )
                })
                }    
            </div>
            <div onClick={goTo} className="info-tab">
                <div className="icon-wrapper">
                    <img src={icon} alt="norxwest" />
                </div>
                <p>Built By Nor. X West Designs</p>
            </div>
        </>
    )
}
