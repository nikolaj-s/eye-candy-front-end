import { useAnimation, motion } from 'framer-motion';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGTEState, toggleGTE } from '../NavigationFeature'

import "./GTEButton.css"

export const GTEButton = (props) => {

    
    const gteAnim = useAnimation();

    const dispatch = useDispatch()

    const GTE = useSelector(selectGTEState)

    const handleGteAction = () => {
        gteAnim.start({
            translateY: "150%"
        }).then(() => {
            dispatch(toggleGTE())
        }).then(() => {
            gteAnim.start({
                translateY: "0%"
            })
        })  
    }

    return (
        <motion.div transition={{delay: 0.4}} animate={{scale: 1, opacity: 1}} initial={props.mobile ? {scale: 0, opacity: 0} : {scale: 1, opacity: 1}} className="greater-than-equal-to-container">
            <div onClick={handleGteAction} >
                {GTE ? 
                <motion.svg animate={gteAnim} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                <path d="M2.15703 4.20664L9.01484 6.86641L2.16172 9.52461C1.44336 9.76016 1.07266 10.4773 1.33359 11.1262L1.80586 12.3012C2.0668 12.95 2.86016 13.2852 3.57852 13.0492L15.3523 8.36719C15.8902 8.19063 16.25 7.71836 16.25 7.18868V6.56524C16.25 6.03555 15.8902 5.56329 15.3523 5.38672L3.56641 0.700005C2.85195 0.46563 2.06211 0.798833 1.80273 1.44454L1.33281 2.61329C1.07344 3.25899 1.44258 3.97227 2.15703 4.20664ZM16.5625 15.625H0.9375C0.419922 15.625 0 16.0445 0 16.5625V18.4375C0 18.9551 0.419922 19.375 0.9375 19.375H16.5625C17.0801 19.375 17.5 18.9551 17.5 18.4375V16.5625C17.5 16.0445 17.0801 15.625 16.5625 15.625Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="17.5" height="20" fill="white"/>
                </clipPath>
                </defs>
                </motion.svg>
                :
                <motion.svg animate={gteAnim} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                <path d="M16.25 11.875H1.25C0.559766 11.875 0 12.4348 0 13.125V14.375C0 15.0652 0.559766 15.625 1.25 15.625H16.25C16.9402 15.625 17.5 15.0652 17.5 14.375V13.125C17.5 12.4348 16.9402 11.875 16.25 11.875ZM16.25 4.375H1.25C0.559766 4.375 0 4.93477 0 5.625V6.875C0 7.56523 0.559766 8.125 1.25 8.125H16.25C16.9402 8.125 17.5 7.56523 17.5 6.875V5.625C17.5 4.93477 16.9402 4.375 16.25 4.375Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="17.5" height="20" fill="white"/>
                </clipPath>
                </defs>
                </motion.svg>

                }
            </div>
        </motion.div>
    )
}
