import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useSelector, useDispatch} from 'react-redux'

import "./Navigation.css"
import { selectMobileMenuState,  toggleMobileMenu } from './NavigationFeature'

import { SideBar } from '../sideBar/SideBar'
import { SortingButton } from './SortingButton/SortingButton'
import { GTEButton } from './GTEButton/GTEButton'
import { NSFWButton } from './NSFWButton/NSFWButton'
import { WHInput } from './WHInput/WHInput'
import { MobileMenuButton } from './MobileMenuButton/MobileMenuButton'
import { Search } from './Search/Search'

export const Navigation = (props) => {

    const dispatch = useDispatch();

    const mobileMenu = useSelector(selectMobileMenuState);

    const mobileMenuAnim = useAnimation()
    
    const toggleMobileMenuFunc = () => {
        
        if (mobileMenu === true) {
            setTimeout(() => {
                mobileMenuAnim.start({
                    scale: 0,
                    translateX: '50%',
                    translateY: '-50%'
                }).then(() => {
                    dispatch(toggleMobileMenu())
                })
            }, 10)
        } else {
            dispatch(toggleMobileMenu())
            setTimeout(() => {
                mobileMenuAnim.start({
                    translateY: 0, 
                    translateX: 0,
                    scale: 1
                })
            }, 100)   
        }  
    }

    const goHome = () => {
        window.location.pathname = "/"
    }
    
    return (
        <>
            <nav>
                <Search />
                <WHInput />
                <GTEButton />
                <NSFWButton />
                <SortingButton />
                <MobileMenuButton toggleMobileMenuFunc={toggleMobileMenuFunc} />
            </nav>

            {
                mobileMenu ? 
                <motion.div initial={{translateY: '-50%', scale: '0', translateX: '50%'}} animate={mobileMenuAnim} className="mobile-menu-container">
                    <motion.div onClick={goHome} animate={{scale: 1, opacity: 1}} transition={{delay: 0.1}} initial={{scale: 0, opacity: 0}} className="eye-candy-title-container">
                        <h1>EYE Candy</h1>
                    </motion.div>
                    <motion.div id="close-mobile-menu-button" onClick={toggleMobileMenuFunc} transition={{delay: 0.2}} animate={{scale: 1, opacity: 1}} initial={{scale: 0, opacity: 0}} className="close-mobile-menu-container">
                        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.0625 29.1312C51.3627 28.8513 51.6048 28.5151 51.7751 28.1416C51.9453 27.7682 52.0403 27.3648 52.0547 26.9547C52.069 26.5445 52.0025 26.1355 51.8588 25.7511C51.7151 25.3666 51.4971 25.0142 51.2172 24.714C50.9373 24.4138 50.601 24.1717 50.2276 24.0015C49.8541 23.8312 49.4508 23.7362 49.0406 23.7219C48.6305 23.7075 48.2215 23.7741 47.837 23.9178C47.4526 24.0615 47.1002 24.2795 46.8 24.5593L37.6562 33.0843L29.1312 23.9375C28.5608 23.3532 27.7844 23.0155 26.9681 22.9964C26.1518 22.9774 25.3605 23.2786 24.7635 23.8356C24.1664 24.3926 23.8111 25.1612 23.7736 25.9768C23.736 26.7925 24.0192 27.5905 24.5625 28.2L33.0875 37.3437L23.9406 45.8687C23.6298 46.1458 23.3775 46.4821 23.1985 46.858C23.0195 47.2339 22.9175 47.6418 22.8983 48.0577C22.8792 48.4736 22.9433 48.8892 23.087 49.28C23.2307 49.6707 23.451 50.0288 23.7351 50.3333C24.0191 50.6377 24.3611 50.8823 24.7409 51.0527C25.1208 51.2231 25.5309 51.3159 25.9472 51.3256C26.3634 51.3353 26.7774 51.2618 27.1648 51.1092C27.5522 50.9567 27.9052 50.7283 28.2031 50.4375L37.3469 41.9156L45.8719 51.0593C46.1471 51.3759 46.4833 51.6338 46.8604 51.8176C47.2374 52.0015 47.6476 52.1075 48.0665 52.1294C48.4854 52.1514 48.9045 52.0888 49.2986 51.9453C49.6928 51.8019 50.0541 51.5805 50.3609 51.2945C50.6678 51.0084 50.9138 50.6635 51.0845 50.2803C51.2552 49.8972 51.347 49.4835 51.3545 49.0641C51.3619 48.6447 51.2848 48.2281 51.1278 47.8391C50.9708 47.4501 50.7371 47.0967 50.4406 46.8L41.9187 37.6562L51.0625 29.1312Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.125 37.5C3.125 18.5156 18.5156 3.125 37.5 3.125C56.4844 3.125 71.875 18.5156 71.875 37.5C71.875 56.4844 56.4844 71.875 37.5 71.875C18.5156 71.875 3.125 56.4844 3.125 37.5ZM37.5 65.625C33.8066 65.625 30.1493 64.8975 26.737 63.4841C23.3247 62.0707 20.2243 59.999 17.6126 57.3874C15.001 54.7757 12.9293 51.6753 11.5159 48.263C10.1025 44.8507 9.375 41.1934 9.375 37.5C9.375 33.8066 10.1025 30.1493 11.5159 26.737C12.9293 23.3247 15.001 20.2243 17.6126 17.6126C20.2243 15.001 23.3247 12.9293 26.737 11.5159C30.1493 10.1025 33.8066 9.375 37.5 9.375C44.9592 9.375 52.1129 12.3382 57.3874 17.6126C62.6618 22.8871 65.625 30.0408 65.625 37.5C65.625 44.9592 62.6618 52.1129 57.3874 57.3874C52.1129 62.6618 44.9592 65.625 37.5 65.625Z" fill="black"/>
                        </svg>
                    </motion.div>
                    <WHInput mobile={true} />
                    <NSFWButton mobile={true} />
                    <GTEButton mobile={true} />
                    <SideBar />
                </motion.div> :

                null
            }
        </>
    )
}
