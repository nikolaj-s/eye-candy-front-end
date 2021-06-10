import React from 'react'

import {motion} from 'framer-motion'

import "./Tags.css"
import { useDispatch } from 'react-redux'
import { setInputValue } from '../../../navigation/NavigationFeature'

export const Tags = ({tags, animation}) => {

    const dispatch = useDispatch()

    const gotToTag = (e, tag) => {
        e.stopPropagation()

        dispatch(setInputValue(tag))
        
        setTimeout(() => {
            document.getElementsByClassName('search-button')[0].click();
        }, 100)
        
    } 

    return (
        <motion.div animate={animation} className="tags-container">
           {tags.split(" ").map((tag, i) => {
               return i > 5 ? null : <p onClick={(e) => {gotToTag(e, tag)}} key={i}>#{tag}</p>
           })}
        </motion.div>
    )
}
