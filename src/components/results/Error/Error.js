import React from 'react'

import {motion} from "framer-motion"

import "./Error.css"
import { useSelector } from 'react-redux'
import { selectErrorMessage } from '../ResultsFeature'

export const Error = () => {

    const errorMessage = useSelector(selectErrorMessage)

    return (
        <motion.div initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} className="error-container">
            <div className="inner-error-container">
                <h3>{errorMessage}</h3>
            </div>
        </motion.div>
    )
}
