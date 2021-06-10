import React from 'react'

import "./ExpandedView.css"

import {motion, useAnimation} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { SubNav } from './SubNav/SubNav'
import { selectCurrentImage, getImageById, incrementClickValue, selectError, selectErrorMessage, selectCopiedState, toggleLinkedCopyState, setCurrentImage } from './ExpandedViewFeature'
import { setInputValue } from '../navigation/NavigationFeature'
import { ExpandedImage } from './ExpandedImage/ExpandedImage'
import { ExpandedWidthHeight } from './ExpandedWidthHeight/ExpandedWidthHeight'


export const ExpandedView = (props) => {

    const [mobileTagsOpen, toggleMobileTags] = React.useState(false)


    const dispatch = useDispatch()

    const image = useSelector(selectCurrentImage)

    const history = useHistory()

    const error = useSelector(selectError);

    const errorMessage = useSelector(selectErrorMessage);

    const copied = useSelector(selectCopiedState);

    const tagsMenuAnimation = useAnimation();


    React.useEffect(() => {

        const id = window.location.pathname.split('/')[2];
        
        dispatch(getImageById(id)) 

        dispatch(incrementClickValue(id))

        tagsMenuAnimation.start({
            scale: 1
        })
    // eslint-disable-next-line   
    }, [])

    const closeExpanded = () => {
        dispatch(setCurrentImage({}))
        history.push("/" + window.location.search)
    }

    const copiedAnim = useAnimation();

    const handleCopyAnimation = () => {
        
        dispatch(toggleLinkedCopyState());
        setTimeout(() => {
            copiedAnim.start({
                opacity: 1,
                scale: 1,
                translateX: '-50%',
                translateY: '-50%'
            }).then(() => {
                setTimeout(() => {
                    copiedAnim.start({
                        opacity: 0,
                        scale: 0
                    }).then(() => {
                        dispatch(toggleLinkedCopyState());
                    })
                }, 20)
            })
        }, 50)
            
    }

    const goToTag = (tag) => {
        closeExpanded()
        dispatch(setInputValue(tag))
        setTimeout(() => {
            document.getElementsByClassName('search-button')[0].click()
        }, 200)
    }

    const toggleMobileTagsMenu = () => {
        if (mobileTagsOpen) {
            tagsMenuAnimation.start({
                width: "90px",
                height: "90px",
                overflowX: 'hidden',
                overflowY: 'hidden'
            })
            toggleMobileTags(false)
        } else {
            tagsMenuAnimation.start({
                width: "95%",
                height: "95%",
                overflowY: 'auto'
            })
            toggleMobileTags(true)
        }
    }

    return (
        <motion.div exit={{scale: 0, translateY: '-50%', translateX: '50%'}} className="expanded-view-outer-container">
            <motion.div initial={{scale: 0}} animate={tagsMenuAnimation} className="tags-expanded-container">
                <div onClick={toggleMobileTagsMenu} className="open-tags-button-container">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 2.5V8.2325L12.5 16.9825L18.2325 11.25L9.4825 2.5H3.75ZM2.5 2.5C2.5 2.16848 2.6317 1.85054 2.86612 1.61612C3.10054 1.3817 3.41848 1.25 3.75 1.25H9.4825C9.81399 1.25007 10.1319 1.38181 10.3663 1.61625L19.1163 10.3663C19.3506 10.6007 19.4822 10.9185 19.4822 11.25C19.4822 11.5815 19.3506 11.8993 19.1163 12.1337L13.3837 17.8663C13.1493 18.1006 12.8315 18.2322 12.5 18.2322C12.1685 18.2322 11.8507 18.1006 11.6163 17.8663L2.86625 9.11625C2.63181 8.88188 2.50007 8.56399 2.5 8.2325V2.5Z" fill="black"/>
                    <path d="M6.875 6.25C6.70924 6.25 6.55027 6.18415 6.43306 6.06694C6.31585 5.94973 6.25 5.79076 6.25 5.625C6.25 5.45924 6.31585 5.30027 6.43306 5.18306C6.55027 5.06585 6.70924 5 6.875 5C7.04076 5 7.19973 5.06585 7.31694 5.18306C7.43415 5.30027 7.5 5.45924 7.5 5.625C7.5 5.79076 7.43415 5.94973 7.31694 6.06694C7.19973 6.18415 7.04076 6.25 6.875 6.25ZM6.875 7.5C7.37228 7.5 7.84919 7.30246 8.20083 6.95083C8.55246 6.59919 8.75 6.12228 8.75 5.625C8.75 5.12772 8.55246 4.65081 8.20083 4.29917C7.84919 3.94754 7.37228 3.75 6.875 3.75C6.37772 3.75 5.90081 3.94754 5.54917 4.29917C5.19754 4.65081 5 5.12772 5 5.625C5 6.12228 5.19754 6.59919 5.54917 6.95083C5.90081 7.30246 6.37772 7.5 6.875 7.5V7.5ZM1.25 8.8575C1.25007 9.18899 1.38181 9.50688 1.61625 9.74125L10.9375 19.0625L10.8837 19.1163C10.6493 19.3506 10.3315 19.4822 10 19.4822C9.66854 19.4822 9.35066 19.3506 9.11625 19.1163L0.36625 10.3663C0.131813 10.1319 7.07968e-05 9.81399 0 9.4825L0 3.75C0 3.41848 0.131696 3.10054 0.366117 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5V8.8575Z" fill="black"/>
                    </svg>
                </div>
                {image.tags !== undefined ? image.tags.split(" ").map((tag, i) => {
                   return tag === " " || tag === "" ? null : <motion.h2 onClick={() => {goToTag(tag)}} initial={{scale: 0}} animate={{scale: 1}} transition={{delay: i / 5}} key={i}>#{String(tag)}</motion.h2>
                }): null}
            </motion.div>
            <motion.div initial={{scale: 0}} animate={{scale: 1}} className="image-expanded-container">
                <ExpandedWidthHeight height={image.height} width={image.width} />
                <div onClick={closeExpanded} className="close-expanded-container">
                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.0625 29.1312C51.3627 28.8513 51.6048 28.5151 51.7751 28.1416C51.9453 27.7682 52.0403 27.3648 52.0547 26.9547C52.069 26.5445 52.0025 26.1355 51.8588 25.7511C51.7151 25.3666 51.4971 25.0142 51.2172 24.714C50.9373 24.4138 50.601 24.1717 50.2276 24.0015C49.8541 23.8312 49.4508 23.7362 49.0406 23.7219C48.6305 23.7075 48.2215 23.7741 47.837 23.9178C47.4526 24.0615 47.1002 24.2795 46.8 24.5593L37.6562 33.0843L29.1312 23.9375C28.5608 23.3532 27.7844 23.0155 26.9681 22.9964C26.1518 22.9774 25.3605 23.2786 24.7635 23.8356C24.1664 24.3926 23.8111 25.1612 23.7736 25.9768C23.736 26.7925 24.0192 27.5905 24.5625 28.2L33.0875 37.3437L23.9406 45.8687C23.6298 46.1458 23.3775 46.4821 23.1985 46.858C23.0195 47.2339 22.9175 47.6418 22.8983 48.0577C22.8792 48.4736 22.9433 48.8892 23.087 49.28C23.2307 49.6707 23.451 50.0288 23.7351 50.3333C24.0191 50.6377 24.3611 50.8823 24.7409 51.0527C25.1208 51.2231 25.5309 51.3159 25.9472 51.3256C26.3634 51.3353 26.7774 51.2618 27.1648 51.1092C27.5522 50.9567 27.9052 50.7283 28.2031 50.4375L37.3469 41.9156L45.8719 51.0593C46.1471 51.3759 46.4833 51.6338 46.8604 51.8176C47.2374 52.0015 47.6476 52.1075 48.0665 52.1294C48.4854 52.1514 48.9045 52.0888 49.2986 51.9453C49.6928 51.8019 50.0541 51.5805 50.3609 51.2945C50.6678 51.0084 50.9138 50.6635 51.0845 50.2803C51.2552 49.8972 51.347 49.4835 51.3545 49.0641C51.3619 48.6447 51.2848 48.2281 51.1278 47.8391C50.9708 47.4501 50.7371 47.0967 50.4406 46.8L41.9187 37.6562L51.0625 29.1312Z" fill="black" fillOpacity="1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.125 37.5C3.125 18.5156 18.5156 3.125 37.5 3.125C56.4844 3.125 71.875 18.5156 71.875 37.5C71.875 56.4844 56.4844 71.875 37.5 71.875C18.5156 71.875 3.125 56.4844 3.125 37.5ZM37.5 65.625C33.8066 65.625 30.1493 64.8975 26.737 63.4841C23.3247 62.0707 20.2243 59.999 17.6126 57.3874C15.001 54.7757 12.9293 51.6753 11.5159 48.263C10.1025 44.8507 9.375 41.1934 9.375 37.5C9.375 33.8066 10.1025 30.1493 11.5159 26.737C12.9293 23.3247 15.001 20.2243 17.6126 17.6126C20.2243 15.001 23.3247 12.9293 26.737 11.5159C30.1493 10.1025 33.8066 9.375 37.5 9.375C44.9592 9.375 52.1129 12.3382 57.3874 17.6126C62.6618 22.8871 65.625 30.0408 65.625 37.5C65.625 44.9592 62.6618 52.1129 57.3874 57.3874C52.1129 62.6618 44.9592 65.625 37.5 65.625Z" fill="black" fillOpacity="1"/>
                    </svg>
                </div>
                {error ? 
                <div className="expanded-error-container">
                    <h1>{errorMessage}</h1>
                </div>
                : 
                <ExpandedImage image={image} />
                }
                

                <SubNav imageLoadingError={error} copiedAnim={handleCopyAnimation} clicks={image.clicks} url={image.full_image} />
                {copied ? 
                <motion.div initial={{opacity: 0, scale: 0, translateX: '-50%', translateY: '-50%'}} animate={copiedAnim} className="copied-container">
                    <h1>Copied</h1>
                </motion.div>
                :null}
            </motion.div>
        </motion.div>
    )
}
