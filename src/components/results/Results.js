
import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { toggleSorting, selectAllState, setHeight, setInputValue, setWidth, toggleGTE, toggleNSFW, resetStateChanged } from '../navigation/NavigationFeature'
import { Card } from './Card/Card'
import { Error } from './Error/Error'

import {useHistory} from "react-router-dom"

import "./Results.css"
import { search, selectError, selectImageCount, selectImages, selectLoading, selectLoadingMore, selectMaxState, selectTitle } from './ResultsFeature'
import { LoadingMore } from './LoadingMore/LoadingMore'

export const Results = () => {

    const dispatch = useDispatch();

    const title = useSelector(selectTitle);

    const loading = useSelector(selectLoading);

    const images = useSelector(selectImages);

    const error = useSelector(selectError);

    const history = useHistory()

    const loadingMore = useSelector(selectLoadingMore);

    const {nsfw, height, width, gte, inputValue, sorting} = useSelector(selectAllState)

    const imageCount = useSelector(selectImageCount);

    const hitMax = useSelector(selectMaxState);

    React.useEffect(() => {

        if (window.location.search === "") {
            dispatch(search({nsfw: nsfw, height: height, width: width, gte: gte, inputValue: inputValue, count: imageCount, newSearch: true, sorting: sorting}))
            history.push(`?nsfw=${nsfw}&height=${height}&width=${width}&gte=${gte}&sorting=${sorting}&query=${inputValue}`)
        } else {
            try {
                const s = window.location.search;

                const n = s.match(/nsfw=(false|true)/)[0].split('=')[1] === 'true'
                const h = Number(s.match(/&height=[0-9]+/)[0].split('=')[1])
                const w = Number(s.match(/&width=[0-9]+/)[0].split('=')[1])
                const g = s.match(/gte=(false|true)/)[0].split('=')[1] === 'true'
                const q = s.match(/query=.*/)[0].split('=')[1]
                const sort = s.match(/sorting=(false|true)/)[0].split('=')[1] === 'true'

                dispatch(setInputValue(q))

                if (n === true) {
                    dispatch(toggleNSFW())
                }

                dispatch(setHeight(h))

                dispatch(setWidth(w))

                if (q === false) {
                    dispatch(toggleGTE())
                }

                if (sort === false) {
                    dispatch(toggleSorting())
                }

                dispatch(search({nsfw: n, height: h, width: width, gte: g, inputValue: q, count: imageCount, newSearch: true, sorting: sort}))
            } catch (error) {
                window.location.search = "";
            }
        }   
        
        dispatch(resetStateChanged())
    // eslint-disable-next-line
    }, [])

    const handleScroll = (e) => {
        
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        
        if (bottom && hitMax === false && loadingMore === false) {
            
            dispatch(search({nsfw: nsfw, height: height, width: width, gte: gte, inputValue: title, count: imageCount, sorting: sorting}))
        }
    }

    return (
        <>
            <div onScroll={handleScroll} className="results-container">
                {error ? <Error /> : null}
                <div className="title-container">
                    <h1>{title}</h1>
                </div>
                <div  className="images-container">
                    {images.map((image, i) => (
                        <Card key={i} image={image} loading={loading} />
                    ))}
                    
                </div>
                
            </div>

            {loadingMore ?
                    <LoadingMore />
            : null}
        </>
    )
}
