
import React from 'react'

import "./WidthHeight.css"

export const WidthHeight = ({width, height}) => {
    return (
        <div className="width-height-info-container">
            <p>w {width} / h {height}</p>
        </div>
    )
}
