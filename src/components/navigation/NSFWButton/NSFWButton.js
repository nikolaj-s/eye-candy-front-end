
import { useAnimation, motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectNSFWState, toggleNSFW } from '../NavigationFeature';

import "./NSFWButton.css"

export const NSFWButton = ({mobile}) => {

    const dispatch = useDispatch();

    const NSFW = useSelector(selectNSFWState);

    const nsfwAnim = useAnimation()

    const handleNsfwAction = () => {
        nsfwAnim.start({
            translateY: "150%",
            opacity: 0
        }).then(() => {
            dispatch(toggleNSFW())
        }).then(() => {
            nsfwAnim.start({
                translateY: "0%",
                opacity: 1
            })
        })
    }

    return (
        <motion.div transition={{delay: 0.5}} initial={!mobile ? {} : {scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} onClick={handleNsfwAction} className="nsfw-toggle-container">
            <div>
                <motion.h1 animate={nsfwAnim}>{NSFW ? "nsfw" : "sfw"}</motion.h1>
            </div>
        </motion.div>
    )
}
