import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllState, setHeight, setWidth } from '../NavigationFeature'

import "./WHInput.css"

export const WHInput = ({mobile}) => {

    const dispatch = useDispatch();

    const allState = useSelector(selectAllState);

    return (
        <motion.div transition={{delay: 0.3}} animate={{scale: 1, opacity: 1}} initial={mobile ? {scale: 0, opacity: 0} : {}} className="width-height-container">    
            <input value={allState.width === 0 ? "" : allState.width} onChange={e => {dispatch(setWidth(e.target.value))}} className="width-input" placeholder="Width" type="number" />
            <div className="divider-line"></div>
            <input value={allState.height === 0 ? "" : allState.height}  onChange={e => {dispatch(setHeight(e.target.value))}} className="height-input" placeholder="Height" type="number" />
        </motion.div>
    )
}
