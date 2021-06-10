
import React from 'react'
import { useSelector } from 'react-redux'
import { selectInitialLoad } from '../ExpandedViewFeature'

import {motion} from 'framer-motion'

import "./ExpandedWidthHeight.css"

export const ExpandedWidthHeight = ({width, height}) => {

    const loading = useSelector(selectInitialLoad);



    return (
        <>
        {loading ? null :
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="width-height-expanded-container">
            <p>w {width} / h {height}</p>
        </motion.div>}
        </>
    )
}
